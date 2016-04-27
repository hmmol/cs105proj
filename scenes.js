/*    Scenes file
*
*     Defines scene class and assigns properties
*
*
* **********************************************
*/
var Scene = function Scene(description, id) {
  this.description = description;
  //this.choices = ['choice1', 'choice2', 'choice3'];
  this.id = id;

  function getDescription(){
    document.getElementById('outputDiv').innerHTML =
      this.description;
  }
};

//.var scene1 = new Scene("First", 1);
