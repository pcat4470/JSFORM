//bubling example
	//{
//	let document.querySelector("button_area").addEventListener("click",function(event))
	//}

	//let elCount = event.target.parentNode.parentNode.querySelector(".count");
	//elCount.innerText = parseInt()
buildButton (document.)
	function buildButton(element buttons = 10) {
		//wipe out innet HTML
		element.innerHTML = "";
		for (let i = 0; i<buttons; i++) {
			element.innerHTML += `
			<div class="counter">
			<span clas="count">0</span>
			<button>+</button>
			</div>
			;
		}
	}