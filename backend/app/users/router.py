from fastapi import APIRouter, Depends, HTTPException, Response, Cookie
from app.users.services import UserService
from app.users.schemas import UserCreate, UserOut, UserLogin
from app.extensions import DetailedException
from fastapi import Request

router = APIRouter()

def validate_session(session_id: str = Cookie(None), service: UserService = Depends()):
    if not session_id or not service.validate_session(session_id):
        raise HTTPException(status_code=401, detail="Session expired or invalid")
    return session_id

@router.post("/register", response_model=UserOut)
def register_user(user: UserCreate, service: UserService = Depends()):
    try:
        return service.create_user(user)
    except DetailedException as err:
        raise HTTPException(status_code=err.status_code, detail=err.detail)

@router.post("/login", response_model=UserOut)
def login_user(
    user: UserLogin,
    response: Response,
    service: UserService = Depends()
):
    try:
        logged_user = service.authenticate_user(user.email, user.password, response)
        if not response.headers.get("set-cookie"):
            raise HTTPException(status_code=500, detail="Session cookie not set")
        print("Cookie set successfully:", response.headers.get("set-cookie"))
        return logged_user
    except DetailedException as err:
        raise HTTPException(status_code=err.status_code, detail=err.detail)
    except Exception as e:
        raise HTTPException(status_code=500, detail="Internal Server Error")


@router.post("/logout")
def logout_user(
    response: Response,
    session_id: str = Cookie(None),
    service: UserService = Depends()
):
    if not session_id:
        raise HTTPException(status_code=400, detail="No session cookie found")
    service.logout_user(response, session_id)
    return {"message": "Logged out successfully"}

@router.get("/check")
def check_user_authentication(
    request: Request,
    session_id: str = Cookie(None),
    service: UserService = Depends()
):
    print(f"Headers received: {request.headers}")  # Log completo de los encabezados
    print(f"Cookies received: {request.cookies}")  # Log de las cookies recibidas
    print(f"Received session_id: {session_id}")    # Verifica si la cookie específica llegó

    if not session_id or not service.validate_session(session_id):
        print("Session validation failed.")
        raise HTTPException(status_code=401, detail="Session expired or invalid")
    print("Session validated successfully.")
    return {"authenticated": True}


@router.get("/protected-route")
def protected_route(session_id: str = Depends(validate_session)):
    return {"message": "You have access!", "session_id": session_id}
    
@router.get("/user", response_model=UserOut)
def get_user(session_id: str = Cookie(None), service: UserService = Depends()):
    if not session_id:
        raise HTTPException(status_code=401, detail="No session cookie found")
    try:
        return service.get_user_by_session(session_id)
    except DetailedException as err:
        raise HTTPException(status_code=err.status_code, detail=err.detail)
