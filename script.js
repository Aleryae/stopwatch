console.log("Ready !");
window.addEventListener("load", () => {
	console.log("Hello world !");

	let timer = document.querySelector("#timer");
	let ms = 0;
	let startBtn = document.querySelector("#start");
	let pauseBtn = document.querySelector("#pause");
	let stopBtn = document.querySelector("#stop");
	let id;

	startBtn.addEventListener("click", start);
	pauseBtn.addEventListener("click", pause);

	function start() {
		id = setInterval(ticking, 10);
		function ticking(){
			timer.innerHTML = ms++;
		}
	};

	function pause() {
		clearInterval(id);
	};
});