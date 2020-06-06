var runRatio = document.getElementById("runRatio");
var walkRatio = document.getElementById("walkRatio");
var runMin = document.getElementById("runMin");
var runSec = document.getElementById("runSec");
var lengths = document.getElementById("lengths");

var runSecFinal=0;
var walkSecFinal=0;


var runMode = true;

var timeout;
var count = 0;
var stopwatch = document.getElementById("stopwatch");
var totalSecs = 0;
var stopped=true;

var runFirst = document.getElementById("runFirst");
var pb = document.getElementById("pause");
var sb = document.getElementById("start");
var stopB = document.getElementById("stop");

var mainAudio = document.getElementById("mainAudio");

var hiitMode=true;