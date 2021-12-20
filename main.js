canvas =
document.getElementById("My_canvas");
ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle = "silver";   
ctx.lineWidth = 4;
ctx.rect(25,25,750,400);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "blue";   
ctx.lineWidth = 10;
ctx.arc(150, 150, 100,0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";   
ctx.lineWidth = 10;
ctx.arc(400, 150, 100,0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "red";   
ctx.lineWidth = 10;
ctx.arc(650, 150, 100,0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "yellow";   
ctx.lineWidth = 10;
ctx.arc(275, 275, 100,0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "green";   
ctx.lineWidth = 10;
ctx.arc(525, 275, 100,0, 2*Math.PI);
ctx.stroke();