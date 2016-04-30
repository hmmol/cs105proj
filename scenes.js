/*    Scenes file
*
*     Defines scene class and assigns properties
*
*
* **********************************************
*/

/*
class Scene {
	constructor(description, id) {
		this.description = description;
		this.id = id;
	}
	
	this.getDescription() {
		return this.description;
	}
}
*/
function GetInput() {
	var choice;

	choice = document.getElementById('input').value;

	return choice;
}

function NextScene(option1, option2, option3) {
	if (GetInput() == '1') {
		option1;
	}

	else if (GetInput() == '2') {
		option2;
	}

	else {
		option3;
	}
}

function SceneOne() {
	document.getElementById('textfield').innerHTML += 
		'<br>This is the first scene.';
}

function SceneTwo(choice) {
	document.getElementById('textfield').innerHTML +=
		'<br>' + choice + '<br>This is scene two.';
}

function SceneThree(choice) {
	document.getElementById('textfield').innerHTML +=
		'<br>' + choice + '<br>This is scene three.';
}