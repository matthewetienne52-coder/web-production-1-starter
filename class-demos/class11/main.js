// to write comments
// if you use the hotkey CTRL+ it will automatically switch based on file type

// thge syntax of a func is the name fullowed by parenthesis and a semicolon
// functionname();

// 2 functions for figuring out where your code is WRONG
alert("This is a javascript alert!")

// - function name is alert
// - paramaeter is "This is a javascript alert"

// - (Also, you might not want to put apostrophes in these)

// we could also use "" and '' to differentiate

// alert("I've changed this text")

// or use an escape chaarcter like \ b4 the apostrophe

// alert('I\ve changed this text')

// this does not show up on the webpage
// you need to open the inspector > console to see
// function name = log
// parameter = 'This is a console message'
// log belongs to the console = console.log
// log does not exist outside of the console

console.log('this is a console message')

// in order for js to manipulate the html, the HTML file needs to be fully loaded
// We detect when the page has loaded using
// addEventListener() = function
// "load" = parameter #1
// we are waiting for the WINDOW to finish loading the HTML
// () => {} parameter #2, the action / function execute when the page is fully loaded


window.addEventListener("load", ()=>{
	// all of our code that changes the html/css will live inside the curly braces ({})
	
	console.log('page has loaded, js connected')
	
	// to change something in hs we need to grab the specific element we are changing
	// document = html doc
	// getElementById() = function to retrieve an element name
	// bigParagraph > - name o fthe id, without #
	// .textContent = html inside of the <p> to change
	
	document.getElementById('bigParagraph').textContent = '<strong> changed with js </strong>'
	document.getElementById('bigParagraph').innerHTML = '<em> changed again </em>'
	
	//querySelector() > function to retrieve an element using CSS selector syntax. It retrieves the first item that matches the css selector
	// .innerHTML > does not include the html tags
	
	document.querySelector('.redParagraph').innerHTML = '<em> changed again <em>'
	document.querySelector('#bigParagraph').style.backgroundColor = 'red'

	// grab another id and add a class to it
	// add() > function name
	// 'redParagraph' > paramater of the class name you want to add

	document.querySelector('#another').classList.add('redParagraph')

	// treating a variable so we dont have the write document.getElementById over and over

	let sp = document.getElementById('special')
	sp.textContent = 'this is a very special paragraph'
	sp.style.fontSize = "50px"
	sp.style.color = "red"

	//remove elements
	// let another = document.querySelector('#another')
	// another way to remove
	document.querySelector('#another').remove()

	let newElement = document.createElement('h1')

	newElement.textContent = 'this was added with js'

	document.body.appendChild(newElement)
	
		// we can add to parent container

	document.querySelector('#container').appendChild(newElement)


})
// window.onload = () => {} // shorthand, they do the same thing, commented out for the same reason