console.log("Ready !");
window.addEventListener("load", () => {
	console.log("Hello world !");

	let timer = document.querySelector("#timer");
	let startBtn = document.querySelector("#start");
	let pauseBtn = document.querySelector("#pause");
	let stopBtn = document.querySelector("#stop");

	let id;

	let ms = 0;
	let hours = 0;
	let minutes = 0;
	let seconds = 0;

	startBtn.addEventListener("click", start);
	pauseBtn.addEventListener("click", pause);
	stopBtn.addEventListener("click", stop);



	function start() {
		id = setInterval(ticking, 10);
		function ticking(){
			timer.innerHTML = ms++;
			if (ms == 100) {
				ms = 0;
				seconds++;
			}else {
				time(seconds, minutes);
				time(minutes, hours);
			}
			display();
		}
	};

	function format(number){
		if (number < 10){
			result = '0' + number;
			return result;
		}else {
			return number;
		}
	};

	function pause() {
		clearInterval(id);
	};

	function stop(){
		clearInterval(id);
		ms = 0;
		hours = 0;
		minutes = 0;
		seconds = 0;
		display();
	};

	function display() {
		timer.innerText = format(hours) + ':' + format(minutes) + ':' + format(seconds) + ':' + format(ms);
	};

	function time(firstValue, secondValue){
		if (firstValue == 60) {
			firstValue = 0;
			secondValue++;
		}
	};
});