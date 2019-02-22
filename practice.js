
//Just printing stuff
//console.log("Hello World!")
//----------------------------------------------------------------------------

//Creating functions and stuff
/*

function calculateAreal(height, width) {
	areal = height * width

}

calculateAreal(1530,15)
console.log(areal)*/
//---------------------------------------------------------------------------

//Magic 8-ball with function
let question = null
let num = 0

function randomNumber() {
	question = prompt("What is your question?")
	num = Math.floor(Math.random() * 21)
}

//Testing
randomNumber()
