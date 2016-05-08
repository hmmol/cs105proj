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
var  count;

count = 0;

function StartGame()
//Purpose: Initialize the game
//Print a start menu?
//Give opening Option?
{
	//Initial menu
	document.getElementById('textfield').value =
		'With a click and an explosion of light from its interior vacuum tubes, the monitor ' +
		'comes to life. The screen is an unbroken field of black, save for the singular intrusion of a ' +
		'\ngreen cursor several pixels wide. After a few seconds\' delay, a simple message appears ' +
		'on the screen. It reads:\n' +
		'\">>Welcome Home.\"' +
		'\nWhat do you do?\n' +
		'\n1. Try to type something into the computer.' +
		'\n2. Look around.' +
		'\n3. Try to remember how I got here.'
}

function OptionOne() {
	if (count == 0) {
		document.getElementById('textfield').value +=
			'\n\nYou\'re not quite sure what to make of the thing, but you figure \n' +
			'that there must be some way to get into the system. You decide to try a few\n' +
			'simple passwords first. Phrases like \'password\' and \'hello123\', predictably,\n' +
			'don\'t work. You rack your brain for a few minutes, trying just about anything that\n' +
			'comes to mind. Eventually you settle on trying an actual sentence. After all, what could\n' +
			'it hurt? Worst case scenario, you\'re just talking to a computer. You type:\n' +
			'\">>Thanks. Glad to be back.\"' +
			'\nYou hit the enter key, and for a few moments nothing seems to happen. Then, as if ' +
			'it were thinking of a response, new text appears on the screen beneath yours:\n' +
			'\">>Your gratitude is appreciated. What can I do for you?\"\n\n' +
			'1. What is this place? Who are you?\n' +
			'2. How did I get here?\n' +
			'3. Who am I?\n';

			count++;
	}

	else if (count == 1) {
		document.getElementById('textfield').value +=
			'\nYou type your question, and the machine responds:\n' +
			'\">>This facility houses a number of what you call Artifical Intelligence Machines.\n' +
			'For that reason, you may call me Ami.\"\n' +
			'\n2. How did I get here?' +
			'\n3. Who am I?';
	}

	else {
		alert('Error!');
	}
}

function OptionTwo() {
	if (count == 0) {
		document.getElementById('textfield').value +=
			'You decide to take stock of your situation. In front of you sits a large CRT monitor, resting atop a warped\n' +
			'wooden desk. Underneath the desk, resting on a slate gray floor, is a behemoth of a computer tower. It\'s clearly\n' +
			'a couple of decades old at least. The room itself is dark, the only light coming from a single bulb suspended\n' +
			'from the ceiling above you, shining a dim cone of light on you and the computer setup. The rest of the room\n' +
			'is empty save for a single heavy metal door on the far side.\n\n';

			count++;
	}

	else if (count == 1) {
		document.getElementById('textfield').value +=
			'You type in your question, and the machine responds:\n' +
			'\">>I am not omniscient. I know only that you are here, at this moment.' +
			' How you came to be confined in this room, and for what reasons,\n' +
			'are entirely unknown to me.\"\n\n' + 'Real helpful.' +
			'\n1. What is this place? Who are you?' +
			'\n3. Who am I?';
	}

	else {
		alert('Error!');
	}
}

function OptionThree() {
	if (count == 0) {
		document.getElementById('textfield').value +=
			'You pause for a moment and try to recall exactly how you got here. The last thing you remember is falling asleep\n' +
			'at home. How long ago that was, whether it was hours, days, weeks...you don\'t know.';
	}

	else if (count == 1) {
		document.getElementById('textfield').value +=
			'You type in your question, and the machine responds:\n' +
			'\">>You are you. You are human, or so I assume. All of the previous subjects\n' +
			'were human. It is logical that you would be as well. The rest is for you to\n' +
			'decide, isn\'t it?\"\n';
	}

	else {
		alert('Error!');
	}
}
