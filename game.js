/*We could do something like this you know. http://play.textadventures.co.uk/Play.aspx?id=t6l0-u78k0qxhy1zdpnn3w or
http://play.textadventures.co.uk/Play.aspx?id=wds-i4cyp0syixvyynb_ca 



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
	call function() to start game here;
}

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
	
	recieve user input via document.getElementById('inputBox').value;
	
	parse the string;
	
	pass reult by calling NextScene(choice);
}
