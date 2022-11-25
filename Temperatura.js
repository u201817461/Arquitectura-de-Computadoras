function setup() {
	pinMode(1, OUTPUT);
	pinMode(0, INPUT);
	Serial.println("Blinking");
}

function loop() {
	if(digitalRead(0) == HIGH) {
		digitalWrite(1, HIGH);
	}
	else {
		digitalWrite(1, LOW);
	}
	
}
