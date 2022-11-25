var ledPin = 1;
var potPin = A0;
var value = 0;
var CValue;
function setup() {
	pinMode(ledPin, OUTPUT);
	pinMode(0, OUTPUT)
	pinMode(2, OUTPUT)
	pinMode(3, OUTPUT)
}
function precise(x) {
  return x.toPrecision(3);
}
function loop() {
	// read from pot
	var newValue = analogRead(potPin);
	
	// map it from 1023 to 255
	newValue = Math.floor(map(newValue, 0, 1023, 0, 255));
	
	if (newValue != value) {
		Serial.println("Valor en Farenheit: " + CValue);
		CValue = (newValue - 32) / 1.8;
		
		// analog write to led
		analogWrite(ledPin, newValue);
		value = newValue;
		customWrite(ledPin, precise(CValue) + " C° ");
	}
	if (CValue > 28) {
		digitalWrite(0,HIGH);
		customWrite(2,'2');
		customWrite(3,'2');
	}
	else {
			digitalWrite(0,LOW);
			customWrite(2,'0');
			customWrite(3,'0');
	}
	
}
