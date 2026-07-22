window.onload = ( ) => {
	setInterval(()=>{
		let time = new Date()
		let hours = time.getHours()
		let min = time.getMinutes()
		let sec = time.getSeconds()
		if (hours  >= 5 && hours < 12){
			document.getElementById("timeOfDay").innerHTML = "Sunrise"
			document.getElementById("sunOrMoon").innerHTML = "<img src='sun.png'>"
			document.body.style.backgroundImage = 'url("sunrise_bg.png")'
		}
		else if (hours >= 12 && hours < 19){
			if (hours == 12 && min == 50){
				document.getElementById("timeOfDay").innerHTML = "High Noon"
				document.getElementById("sunOrMoon").innerHTML = "<img src='high_noon_sun.png'>"
				document.body.style.backgroundImage = 'url("high_noon_bg.png")'
			}

			else{
				document.getElementById("timeOfDay").innerHTML = "Daytime"
				document.getElementById("sunOrMoon").innerHTML = "<img src='sun.png'>"
				document.body.style.backgroundImage = 'url("daytime_bg.png")'
			}
			}
		else if (hours >= 19 && hours < 21){
			document.getElementById("timeOfDay").innerHTML = "Sunset"
			document.getElementById("sunOrMoon").innerHTML = "<img src='sun_at_set.png'>"
			document.body.style.backgroundImage = 'url("sunset_bg.png")'
		}
		else{
			document.getElementById("timeOfDay").innerHTML = "Night"
			document.getElementById("sunOrMoon").innerHTML = "<img src='moon.png'>"
			document.body.style.backgroundImage = 'url("night_bg.png")'
		}
		document.getElementById("midAligned").style.width = 'calc(0% + ' + ((1 + hours) * 4.167) + '%)'
	}, 1000)

}