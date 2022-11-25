from gpio import *
from time import *

Sensor = A0
SensorMov1 = A1
SensorMov2 = A2
SensorMov3 = A3
PuertaP = 0
SirenaP = 1
Camara = 2
Camara1 = 3
Camara2 = 4
Switch = 5

def main():
	pinMode(Sensor, IN)
	pinMode(SensorMov1, IN)
	pinMode(SensorMov2, IN)
	pinMode(SensorMov3, IN)
	pinMode(SirenaP, OUT)
	pinMode(PuertaP, OUT)
	pinMode(Camara, OUT)
	pinMode(Camara1, OUT)
	pinMode(Camara2, OUT)
	pinMode(Switch, IN)
	print("Blinking")
	
	while True:
		if analogRead(Sensor) == 0:
			customWrite(PuertaP,'1,0')
		else:
			customWrite(PuertaP,'0,1')
		if digitalRead(SensorMov1) == HIGH:
			customWrite(SirenaP,'1')
			customWrite(Camara2,'1')
		else:
			if digitalRead(SensorMov2) == HIGH:
				customWrite(SirenaP,'1')
				customWrite(Camara,'1')
			else:
				if digitalRead(SensorMov3) == HIGH:
					customWrite(SirenaP,'1')
					customWrite(Camara1,'1')
				else:
					customWrite(SirenaP,'0')
					if digitalRead(Switch) == HIGH:
						customWrite(Camara,'1')
						customWrite(Camara1,'1')
						customWrite(Camara2,'1')
					else:	
						customWrite(Camara,'0')
						customWrite(Camara1,'0')
						customWrite(Camara2,'0')
		
		

if __name__ == "__main__":
	main()
