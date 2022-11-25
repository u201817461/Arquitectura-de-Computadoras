var DELAY_TIME = 1000;
var current_time = 0;

var X_READ_DISTANCE = 50;
var Y_READ_DISTANCE = 50;
var cardID = 0;
var lastCardID = 0;
var state = 2; // waiting

function setup(){
	/*
	Registration Server Setup
	*/
	IoEClient.setup({
		type: "RFID Reader",
		states: [
			{
			name: "Card ID",
			type: "number",
			unit: '',
			controllable: false
			},
			{
			name: "Status",
			type: "options",
			options: {
				"0": "Valid",
				"1": "Invalid",
				"2": "Waiting"
			},
			controllable: true
			}	
	 	]
	 });
	
	IoEClient.onInputReceive = function(input) {
		processData(input, true);
	};
}

function loop(){
	var devices = devicesAt(getCenterX(), getCenterY(), X_READ_DISTANCE, Y_READ_DISTANCE);
	var found = false;
	for (var i = 0; i < devices.length; ++i){
		if (devices[i] === getName()){
			continue;
		}
		cardID = getDeviceProperty(devices[i], 'CardID');
		found = true;
		break;
	}
	
	if (!found) {
		cardID = lastCardID = 0;
		setState(2);
	}
	else {
		if (lastCardID != cardID){
			lastCardID = cardID;
			sendReport();
		}
	}
	if (cardID == 1001){
		setState(0);
	}
	else
	{
		setState(1);
	}
	delay(DELAY_TIME);
}

function setState(newState){
	if (state != newState) {
		state = newState;
		analogWrite(A1, state);
		sendReport();
	}
}

function sendReport()
{
	var report = parseInt(cardID) + "," + state;
	IoEClient.reportStates(report);
}

function processData(data, bIsRemote)
{
	if ( data.length <= 0  )
		return;
	data = data.split(",");
	setState(Number(data[1]));
}
