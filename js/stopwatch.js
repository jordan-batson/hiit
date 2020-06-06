// stopwatch.js - probably the worst thing i've ever coded

function playAudio(n){
	if(n=="run"){
		mainAudio.src = "audio/runTone.mp3";
		mainAudio.play();
	}else{
		mainAudio.src = "audio/walkTone.mp3";
		mainAudio.play();
	}
}

function startButton(){
	if(runSecFinal==0 || walkSecFinal==0){
		stopwatch.innerHTML = "Error: seconds cannot be 0";
		return;
	}
	
	// change button states
	sb.disabled = true;
	pb.disabled = false;
	stopB.disabled = false;
	
	if(!stopped){
		timeout = setTimeout(start,1000);
		return;
	}
	
	stopped=false;
	runFirst.disabled=true;
	
	updateFormat();
	if(runSec.value=="0")
		runSec.value="00";
	
	if(runFirst.checked){
		runMode=true;
		if(count==0){
			playAudio("run");
		}
	}
	else{
		runMode=false;
		if(count==0){
			playAudio("walk");
		}
	}
	start();
}

function pause(){
	sb.disabled=false;
	pb.disabled=true;
	clearTimeout(timeout);
}

function stopClock(){
	pb.disabled = true;
	sb.disabled = false;
	stopB.disabled = false;
	
	clearTimeout(timeout);
	stopwatch.innerHTML="";
	stopped=true;
	runFirst.disabled=false;
	count=0;
	totalSecs=0;
}

function start(){
	if(runMode){
		if(count>=runSecFinal){
			runMode=false;
			count = 0;
			mainAudio.src = "audio/walkTone.mp3";
			mainAudio.play();
		}
	}
	else{
		if(count>=walkSecFinal){
			runMode=true;
			count = 0;
			mainAudio.src = "audio/runTone.mp3";
			mainAudio.play();
		}
	}
	stopwatch.innerHTML = "<b>"+(runMode ? "Run: " : "Walk: ")+"</b>"+ parseInt(count/60,10) + ":" + ((count%60 >=0 && count%60<10) ? "0" : "") + count%60;
	var ts = parseInt(totalSecs,10);
	stopwatch.innerHTML += "<br>Total Time: "+ parseInt(ts/60,10) + ":" + ((ts%60 >=0 && ts%60<10) ? "0" : "") + ts%60;
	totalSecs++;
	count++;
	timeout = setTimeout(start,1000);
}