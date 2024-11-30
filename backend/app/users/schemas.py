# from pydantic import BaseModel, EmailStr, Field
# from typing import Optional


# class UserCreate(BaseModel):
#     email: EmailStr
#     password: str = Field(..., min_length=8, max_length=64, description="Password must be 8-64 characters long.")
#     first_name: str = Field(..., max_length=255, description="First name of the user.")
#     last_name: str = Field(..., max_length=255, description="Last name of the user.")
#     phone: Optional[str] = Field(None, regex=r"^\+?[0-9]*$", description="Optional phone number in valid format.")
#     rut: str = Field(..., max_length=12, description="Unique RUT of the user.")

#     class Config:
#         schema_extra = {
#             "example": {
#                 "email": "user@example.com",
#                 "password": "SecurePassword123!",
#                 "first_name": "John",
#                 "last_name": "Doe",
#                 "phone": "+123456789",
#                 "rut": "12345678-9",
#             }
#         }


# class UserOut(BaseModel):
#     id: int
#     email: EmailStr
#     first_name: str
#     last_name: str
#     phone: Optional[str]
#     rut: str

#     class Config:
#         orm_mode = True
#         schema_extra = {
#             "example": {
#                 "id": 1,
#                 "email": "user@example.com",
#                 "first_name": "John",
#                 "last_name": "Doe",
#                 "phone": "+123456789",
#                 "rut": "12345678-9",
#             }
#         }


# class UserLogin(BaseModel):
#     email: EmailStr
#     password: str = Field(..., min_length=8, max_length=64, description="Password must be 8-64 characters long.")

#     class Config:
#         schema_extra = {
#             "example": {
#                 "email": "user@example.com",
#                 "password": "SecurePassword123!",
#             }
#         }
from pydantic import BaseModel, EmailStr, Field
from typing import Optional
import re


class UserCreate(BaseModel):
    email: EmailStr
    password: str = Field(..., min_length=8, max_length=64)
    first_name: str = Field(..., max_length=255)
    last_name: str = Field(..., max_length=255)
    phone: Optional[str] = Field(None, regex=r"^\+?[0-9]*$")
    rut: str = Field(..., max_length=12)

    @staticmethod
    def validate_password(password: str) -> str:
        if not (re.search(r"[A-Z]", password) and re.search(r"\d", password) and re.search(r"[@$!%*?&#]", password)):
            raise ValueError("Password must include at least one uppercase letter, one number, and one special character.")
        return password

    class Config:
        schema_extra = {
            "example": {
                "email": "user@example.com",
                "password": "SecurePassword123!",
                "first_name": "John",
                "last_name": "Doe",
                "phone": "+123456789",
                "rut": "12345678-9",
            }
        }


class UserOut(BaseModel):
    id: int
    email: EmailStr
    first_name: str
    last_name: str
    phone: Optional[str]
    rut: str

    class Config:
        orm_mode = True


class UserLogin(BaseModel):
    email: EmailStr
    password: str
