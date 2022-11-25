from gpio import *
from time import *

Alarma = 0
Boton = 4

def main():
	pinMode(Alarma, OUT)
	pinMode(Boton, IN)
	print("Blinking")
	while True:
		if digitalRead(Boton) == HIGH:
			customWrite(Alarma, '1')
		if digitalRead(Boton) == LOW:
			customWrite(Alarma, '0')
	

if __name__ == "__main__":
	main()
