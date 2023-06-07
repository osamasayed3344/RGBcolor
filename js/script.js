let background=document.getElementById("background");
let colorvalue=document.getElementById("color_value");


background.style.backgroundColor=colorvalue.value;
function funchangeColor(){
	let red=document.getElementById("red");
	let green=document.getElementById("green");
	let blue=document.getElementById("blue");
	colorvalue.value="rgb("+red.value+","+green.value+","+blue.value+")";
	background.style.backgroundColor=colorvalue.value;
}