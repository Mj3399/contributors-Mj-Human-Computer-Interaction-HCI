// Create your global variables below:
var tracklist = ["Let It Happen", "Nangs", "The Moment", "Yes I'm Changing", "Eventually", "Gossip", "The Less I Know The Better", "Past Life", "Disciples", "'Cause I'm A Man"];
var volLevels = [];
var x = document.getElementById("myRange");
x.min = 0;
x.value = 0;
x.max = 180;
i=0; //vol index
k=6; //song title index

function init() {

	for(i=0; i<6; i++ ){
		volLevels.push(document.getElementById("vl" +i))
	}

	for(i= 0; i<3; i++){
		volLevels[i].style.backgroundColor = "blue";

	}
};

addEventListener('mouseup', (event) => {
	mom.innerText =	secondsToMs(x.value);
});

addEventListener('keydown', (event) => {
	mom.innerText =	secondsToMs(x.value);
});

function volUp() { 
	if(i>=0 && i<6){
		volLevels[i].style.backgroundColor = "blue";

		i++;
	}
}
var kl; //slider seconds interval object

function volDown() {
	if(i>0){

		i--;

		volLevels[i].style.backgroundColor = "white";
	}
}

var mom = document.getElementById("time"); //slider text time

function switchPlay() {

	if(document.getElementById("play").innerHTML == "play_arrow"){

		document.getElementById("play").innerHTML = "pause";

		function gogogo() {

			x.value++;

			mom.innerText =	secondsToMs(x.value);
			
			if(x.value == 180){
					nextSong();
				}
		}
		kl = setInterval(gogogo, 1000);
			

	}
	else{

		if(document.getElementById("play").innerHTML == "pause"){
			document.getElementById("play").innerHTML = "play_arrow";
			clearInterval(kl);
			mom.innerText =	secondsToMs(x.value);
		};
	}
}



function nextSong() {
	if(k ==9){
		k=0;
	}else{
		k++;
	}
	document.getElementById("name").innerHTML = tracklist[k];	
	x.value=0;
	mom.innerText =	secondsToMs(x.value);
}
	

function prevSong() {
	if(k ==0){
		k=9;
	}else{
		k--;
	}
	document.getElementById("name").innerHTML = tracklist[k];
	x.value=0;
	mom.innerText =	secondsToMs(x.value);
}
	


function secondsToMs(d) {
    d = Number(d);

    var min = Math.floor(d / 60);
    var sec = Math.floor(d % 60);

    return `0${min}`.slice(-1) + ":" + `00${sec}`.slice(-2);
}

init();