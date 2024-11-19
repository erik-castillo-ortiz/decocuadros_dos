from typing import Any
from pydantic import RedisDsn, root_validator,BaseSettings
from app.constants import Environment

class Config(BaseSettings):
    DATABASE_URL: str
    SCHEMA: str = "public"  # Esquema por defecto
    REDIS_URL: RedisDsn

    SITE_DOMAIN: str = "myapp.com"

    ENVIRONMENT: Environment = Environment.PRODUCTION

    SENTRY_DSN: str | None

    CORS_ORIGINS: list[str]
    CORS_ORIGINS_REGEX: str | None
    CORS_HEADERS: list[str]

    APP_VERSION: str = "1"

    JWT_ALG:str
    JWT_EXP:str
    JWT_SECRET:str

    SECURE_COOKIES:str

    # Nuevas variables para OpenAI
    OPENAI_API_KEY: str
    GPT_TEMPERATURE: float = 0.5
    GPT_MAX_TOKENS: int = 1000

    class Config:
        env_file = ".env"
        env_file_encoding = "utf-8"
        # env_prefix = "app_"

    # @root_validator(skip_on_failure=True)
    # def validate_sentry_non_local(cls, data: dict[str, Any]) -> dict[str, Any]:
    #     if data["ENVIRONMENT"].is_deployed and not data["SENTRY_DSN"]:
    #         raise ValueError("Sentry is not set")

    #     return data

settings = Config()

app_configs: dict[str, Any] = {"title": "App API"}
if settings.ENVIRONMENT.is_deployed:
    app_configs["root_path"] = f"/v{settings.APP_VERSION}"

if not settings.ENVIRONMENT.is_debug:
    app_configs["openapi_url"] = None  # hide docs
