window.onload = ( ) => {
	// 1st param: func name that is called after ms has passed
	// 2nd param: the ms b4 func is executed
	setTimeout(sayYo, 2000)


	// this timeout will not happen because it will be cleared
	let myTimer = setTimeout(yo, 2000)
	console.log(myTimer) // printing out the id of the timer
	clearTimeout(myTimer) // removing the timer

	let myInt = setInterval(myInterval, 3000)

	document.body.addEventListener("click", ()=>{
		console.log(myInt)
		clearInterval(myInt)
		console.log("click")
		document.querySelector('#content').innerHTML = ""

	})
	// create a new date using the DATE class
	let date = new Date()
	console.log(date)
	console.log(date.toString())

	let dateDiv = document.querySelector("#date")
	dateDiv.textContent = date.toString()
	// storing the date (number of the day of the month)
	let day = document.createElement('p')
	day.textContent = "date" + date.getDate()
	dateDiv.appendChild(day)
	let hours = document.createElement('p')
	day.textContent = "date" + date.getHours()
	dateDiv.appendChild(hours)
	let current = document.createElement('p')
	create.textContent = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
	dateDiv.appendChild(current)

	// if you are making a normal

	setInterval(()=>{
		let date2 = newDate()
		let currentTime = document.createElement('p')
		// remove all prev elements
		dateDiv.innerHTML = ""
		let min = date2.getMinutes()
		if(min < 10){
			min = "0" + min
		}
		let sec = date2.getSeconds()
		if(sec < 10){
			sec = "0" + sec
		}
		// update the current time
		currentTime.innerHTML = date2.getHours() + ":" + min + ":" + sec
		dateDiv.appendChild(currentTime)
	}, 1000)
}

//The only code that should be written after window.onload are function declarations

// we need to define sayYo
// function is just like let but to make a function instead of variable
function sayYo(){
	console.log("Yo")
	document.getElementById('content').textContent = "Yo"

}

// this is another function declaration

function yo(){
	console.log('Yo')
}
function myInterval(){
	console.log('3 seconds')
	let newElement = document.createElement('span')
	newElement.textContent = "Yo"
	document.querySelector("#content").appendChild(newElement)
}


function handleClick(){
	console.log('click')
	document.querySelector('#content').innerHTML = ""
}