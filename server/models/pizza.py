from sqlalchemy import Column, Table, Integer, String, Float
from config.db import meta, engine

pizzas = Table('pizzas', meta, 
    Column('id', Integer(), primary_key=True),
    Column('name', String(255)),
    Column('name_pizza', String(255)),
    Column('price', Float()),
    Column('quantity', Integer())
)

meta.create_all(engine)