/*
*	Super Awesome RPG!!!!!!
*	Totally going to be badass
*	By Holden, Nick, & Michael
*
*	This is the JS file for the game itself
*	Intention is to be embedded inside an HTML page
*
*
* =================================================
*/

function StartGame()
//Purpose: Initialize the game
//Print a start menu?
//Give opening scene?
{
	//Initial menu
	document.getElementById('outputDiv'),innerHTML =
		'>>Welcome to the terminal.<br>' +
		'>>Please select an option below.<br>' +
		'1. Enter Digita<br>' +
		'2. Continue<br>' +
		'3. Exit<br>;'

		var Scene = new Scene("First", 1);

		Scene(1).description = "This is the first scene.";
		Scene(1).getDescription;

	//GetInput();
}
/*
function NextScene(choice)
//Purpose: Advance story to next part
//Takes in variable choice from
//GetInput() to determine next scene
{
	if (choice == some boolean) {
		pick a scene;
	}

	else if (choice == something else) {
		pick different scene;
	}
}

function GetInput()
//Purpose: Get user input, parse,
//determine choice
{
	var choice;

	choice = document.getElementById('inputBox').value;

	//parse the string;

	NextScene(choice);
}
*/
