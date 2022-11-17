#!/bin/python3

from turtle import *
from random import randint

speed(0)
penup()
goto(-140,140)

for step in range(15):
  write(step, align="center")
  right(90)
  forward(10)
  for steps in range(8):
    pendown()
    forward(10)
    penup()
    forward(10)
  backward(170)
  left(90)
  forward(20)
  
ada = Turtle()
ada.color("red")
ada.shape("turtle")
ada.penup()
ada.goto(-160,100)
ada.pendown()
for turn in range(72):
  ada.right(5)
  
bob = Turtle()
bob.color("blue")
bob.shape("turtle")
bob.penup()
bob.goto(-160,70)
bob.pendown()
for turn in range(72):
  bob.left(5)

gren = Turtle()
gren.color("green")
gren.shape("turtle")
gren.penup()
gren.goto(-160,40)
gren.pendown()
for turn in range(72):
  gren.right(5)

yel = Turtle()
yel.color("yellow")
yel.shape("turtle")
yel.penup()
yel.goto(-160,10)
yel.pendown()
for turn in range(72):
  yel.left(5)

for step in range(100):
  ada.forward(randint(1,5))
  bob.forward(randint(1,5))
  gren.forward(randint(1,5))
  yel.forward(randint(1,5))
