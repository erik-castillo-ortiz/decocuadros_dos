from typing import Tuple, Optional
from sqlalchemy.orm import Session
from .models import User
from .extensions import NotFound,DetailedException

class BaseRepository:
    def __init__(self, session: Session):
        self.db = session

class UserRepository(BaseRepository):
    """Operations to interact with the `users` table in the database."""
    
    def get(self, user_id: int) -> Tuple[Optional[User], Optional[DetailedException]]:
        """This method gets a user from the database."""

        user = (
            self.db.query(User)
            .filter(User.id == user_id)
            .first()
        )
        
        if not user:
            return ( None, NotFound(detail=f"User id {user_id} Not Found") )

        return (user, None)