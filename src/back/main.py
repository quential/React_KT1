from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel


class User(BaseModel):
    id: int
    name: str
    email: str


class UserCreate(BaseModel):
    id: int
    name: str
    email: str


# Временное хранилище в памяти.
users_db: list[User] = [
    User(id=1, name="Alice", email="ada@dl.com"),
    User(id=2, name="Aisha", email="ada@dl.com"),
    User(id=3, name="Emil", email="ada@dl.com"),
    User(id=4, name="Kamil", email="ada@dl.com"),
    User(id=5, name="Pasha", email="ada@dl.com"),
    User(id=6, name="Abdul", email="ada@dl.com"),
    User(id=7, name="Gadzi", email="ada@dl.com"),

]

next_user_id = 8

app = FastAPI(title="User REST API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def root() -> dict[str, str]:
    return {"message": "REST API is ready"}


@app.get("/users", response_model=list[User])
def get_users() -> list[User]:
    return users_db


@app.get("/users/{user_id}", response_model=User)
def get_user(user_id: int) -> User:
    user = next(
        (user for user in users_db if user.id == user_id),
    None,
    )

    if user is None:
        raise HTTPException(
            status_code=404,
            detail="Пользователь не найден",
        )

    return user


@app.post("/users", response_model=User, status_code=201)
def create_user(user_data: UserCreate) -> User:
    global next_user_id

    user = User(
        id=next_user_id,
        name=user_data.name,
        email=user_data.email,
    )

    next_user_id += 1
    users_db.append(user)

    return user
