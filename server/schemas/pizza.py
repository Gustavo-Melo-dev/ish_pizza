from pydantic import BaseModel

class Pizza(BaseModel):
    name: str
    name_pizza: str
    price: float
    quantity: int