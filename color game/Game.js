var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("messageDisplay");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	colors = generateRandomColors(3);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;

	for(var i = 0; i < squares.length; i++){
		if (colors[i]){
			squares[i].style.background = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}

})

hardBtn.addEventListener("click", function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");

	for(var i = 0; i < squares.length; i++){
		if (colors[i]){
			squares[i].style.background = colors[i];
		}
		else{
			squares[i].style.display = "block";
		}
	}
})

reset.addEventListener("click", function(){

	colors = generateRandomColors(6);

	pickedColor = pickColor();


colorDisplay.textContent = pickedColor;


for(var i=0; i<squares.length; i++){
	squares[i].style.background = colors[i];


}
h1.style.background = "black";

})



for(var i=0; i<squares.length; i++){
	squares[i].style.background = colors[i];


squares[i].addEventListener("click", function(){
      var clickedColor = this.style.background;
      if (pickedColor===clickedColor){
      	messageDisplay.textContent = "correct!";
      	changecolors(clickedColor);
      	h1.style.background = clickedColor;

      

      }
      else{
          this.style.background = "black";
          messageDisplay.textContent = "Try again!"

      }
});

}

function changecolors(color) {
	for(var i = 0; i < colors.length; i++){
		squares[i].style.background = color;
	}
}

function pickColor() {
	 var random = Math.floor(Math.random() * colors.length);
	 return colors[random];
}

function generateRandomColors(num){
    var arr = [];
    for(var i = 0; i <num; i++){
    	arr.push(randomColors());

    }
    return arr;
}

function randomColors(){
	var r = Math.floor(Math.random() * 256);

	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")"
}