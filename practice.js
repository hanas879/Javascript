
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

//Sript for CodeWars website


//script to check if an array of names has exactly 4 characters
// function friend(friends){
// 	let i = 0
// 	let trueFriends = []
// 	while (i < friends.length) {
// 		if(friends[i].length == 4){
// 			trueFriends.push(friends[i])
// 		}
// 		i += 1
// 	}
// 	return(trueFriends)
// }
//
// friend(["Ryan", "Kieran", "Mark"])


//Find the middle in a string

function getMiddle(s)
{
  if(s.length % 2 == 1){
    middleChar = Math.ceil(s.length / 2) - 1
    return s.charAt(middleChar)
		return "Can NOT be devided by itself"
	}
	else {
		return "CAN be devided by itself"
	}
}





//---------------------------------------------------------------------------
