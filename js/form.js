// form.js - form mechanics and simple maths to generate time


// simple function to check if NaN and return 0 if so
function checkNaN(n){
	if(isNaN(n))
		return 0;
	return parseInt(n,10);
}

// generates the run for walk for text
function generateText(){
	// generates a temp runsec and walksec
	var rs = ((runMin.value==0 ? 0 : parseInt(runMin.value,10))*60) + (runSec.value==0 ? 0 : parseInt(runSec.value,10));
	var ws = (parseInt(walkRatio.value,10) * rs)/parseInt(runRatio.value,10);
	
	// uses them for the final values
	runSecFinal = checkNaN(rs);
	walkSecFinal = checkNaN(ws);
	
	// generates the text
	lengths.innerHTML = "Run for "+runSecFinal+" seconds. Walk for "+walkSecFinal+" seconds.";
}

// updates the ratio on text change
function updateRatio(){
	if(runRatio.value=="")
		runRatio.value = "0";
		
	if(walkRatio.value=="")
		walkRatio.value = "0";
		
	generateText();
}

// updates the time on text change
function updateTime(){
	var secInt = parseInt(runSec.value,10);
	if(secInt>=60){
		runSec.value = "59";
	}
	if(secInt<0){
		runSec.value = "00";
	}
	if(parseInt(runMin.value,10)<0){
		runMin.value = "0";
	}
	generateText();
}

function updateFormat(){
	if(parseInt(runSec.value,10)<1){
		runSec.value = "00";
		return;
	}
	if((runSec.value>=0 && runSec.value<10) && runSec.value.length!=2)
		runSec.value = "0" + runSec.value;
}