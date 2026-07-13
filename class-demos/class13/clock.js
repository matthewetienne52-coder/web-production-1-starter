window.addEventListener("load", () => {
	let dateElement = document.querySelector("#date")

	let currentTime = Date.now()
	console.log(currentTime)

	document.body.addEventListener("click", ()=> {
	console.log(Date.now())
	let newTime = new Date()
	let stringTime = newTime.toLocaleTimeString()	
	})
	let movement = document.querySelector("#move")
	movement.style.top = starting + "px"

	setInterval(() =>{
		starting = starting + 1
		movement.style.top = starting + "px"
	}, 500)
})
