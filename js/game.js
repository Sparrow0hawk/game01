// game js

var canvas = document.getElementById("game-layer");
var context = canvas.getContext("2d");

context.fillStyle = "red";
context.fillRect(0, 0, canvas.width, canvas.height);

// addition game boxes

context.fillStyle = "grey";
context.fillRect(5, 5, 10, 15);
context.fillStyle = "blue";
context.fillRect(25, 25, 20, 20);
context.fillStyle = "green";
context.fillRect(50, 50, 20, 40);
