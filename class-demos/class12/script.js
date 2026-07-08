// What is the first line of code we write in a .js file?
// Write it below this line.
window.addEventListener("load", ()=>{
	let cont = document.getElementById('container')
	// add an event listener that detects when the container is hovered over with the mouse using the mousenteer
	container.addEventListener("mousenteer", ()=>{
		container.style.backgroundColor = '#e8dab2'
	})
	container.addEventListener("mouseleave", ()=>{
		container.style.backgroundColor = '#eaeaea'
	})
})
// Inside of the function, retrieve the id of the div you created in index.html and assign it to a variable.

// Q: What is another way to write the first line of code? 
// A: window.onload = () => {}

// Q: What does the document keyword represent?
// A: The HTML document

// Q: What is the property we access to change the style of a selected element in js? How would we change the background color of the div we selected?
// A: .style, cont.style.backgroundColor = "(color)"
