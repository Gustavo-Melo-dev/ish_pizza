from fastapi import APIRouter
from config.db import conn
from models.pizza import pizzas
from schemas.pizza import Pizza

pizza = APIRouter()

@pizza.get("/")
def get_pizzas():
    return conn.execute(pizzas.select()).fetchall()

@pizza.get("/{id_pizza}")
def get_pizzas(id_pizza: int):
    return conn.execute(pizzas.select().where(pizzas.c.id == id_pizza)).first()

@pizza.post("/pedir-pizza/{id}")
def create_pizza(pizza: Pizza, id: int):
    conn.execute(pizzas.insert().values(name=pizza.name, name_pizza=pizza.name_pizza, price=pizza.price, quantity=pizza.quantity))
    return conn.execute(pizzas.select()).fetchall()

@pizza.delete("/{id}")
def delete_pizza(id: int):
    conn.execute(pizzas.delete().where(pizzas.c.id == id))
    return conn.execute(pizzas.select()).fetchall()