from gpio import *
from time import *

PuertaCP = 0
PuertaCN = 1
PuertaB = 2
PuertaC = 3
Boton = 4
BotonNoche = 5
EM = A0
EM1 = A1
EM2 = A2
Garage = A3
def main():
	pinMode(PuertaB, OUT)
	pinMode(PuertaCN, OUT)
	pinMode(PuertaCP, OUT)
	pinMode(PuertaC, OUT)
	pinMode(BotonNoche, IN)
	pinMode(Boton, IN)
	pinMode(EM, OUT)
	pinMode(EM1, OUT)
	pinMode(EM2, OUT)
	pinMode(Garage, OUT)
	print("Blinking")
	while True:
		if digitalRead(Boton) == HIGH:
			customWrite(PuertaB, '-MODO PANICO- \nLlamar al 911')
			customWrite(PuertaCN, '0,1')
			customWrite(PuertaCP, '0,1')
			customWrite(PuertaC, '0,0')
			customWrite(EM, '0')
			customWrite(EM1, '0')
			customWrite(EM2, '0')
			customWrite(Garage, '0')
		if digitalRead(Boton) == LOW:
			if digitalRead(BotonNoche) == HIGH:
				customWrite(PuertaB, '-MODO Noche-')
				customWrite(PuertaCN, '0,0')
				customWrite(PuertaCP, '0,0')
				customWrite(PuertaC, '0,0')
				customWrite(EM, '0')
				customWrite(EM1, '0')
				customWrite(EM2, '0')
				customWrite(Garage, '0')
			else:
				customWrite(PuertaB, ' Modo Espera ')
				customWrite(PuertaCN, '1,0')
				customWrite(PuertaCP, '1,0')
				customWrite(PuertaC, '1,0')
				customWrite(EM, '1')
				customWrite(EM1, '1')
				customWrite(EM2, '1')
				customWrite(Garage, '1')
	

if __name__ == "__main__":
	main()
