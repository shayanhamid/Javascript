function feedDog(){
  return "kibble, canned food, and water";
}

var eveningChores = feedDog;

console.log(eveningChores());
console.log(feedDog());


var myNewDiv = document.createElement('div');

myNewDiv.innerHTML = "<ul> <li>1</li><li>2</li> <ul>"

document.body.appendChild(myNewDiv);