
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

greencar_width = 75;
greencar_height = 100;
background_image = "parkingLot.jpg";
greencar_image = "car2.png";


greencar_x = 5;
greencar_y = 225;
function add() {
}

function uploadBackground() {
	background_imgTag = new Image();
	background_imgTag.onload = uploadBackground();
	background_imgTag.src = greencar_image;

	greencar_imgTag = new Image();
	greencar_imgTag.onload = uploadgreencar;
	greencar_imgTag = greencar_image;

}

function uploadgreencar() {
ctx.drawImage(greencar_imgTag, greencar_x, greencar_y, greencar_width, greencar_height);
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{

	if (greencar_y >0)
	{
greencar_y = greencar_y + 10;
console.log("When Up Arrow Is Pressed, x = " +greencar_ x+"| y="+grrencar_y);
uploadBackground();
uploadgreencar();
	}
}

function down()
{
	if (greencar_y >0)
	{
greencar_y = greencar_y - 10;
console.log("When Down Arrow Is Pressed, x = " +greencar_ x+"| y="+grrencar_y);
uploadBackground();
uploadgreencar();
	}
}

function left()
{
	if (greencar_x >0)
	{
greencar_x = greencar_x - 10;
console.log("When Left Arrow Is Pressed, x = " +greencar_ x+"| y="+grrencar_y);
uploadBackground();
uploadgreencar();
	}
	
}

function right()
{
	if (greencar_x >0)
	{
greencar_x = greencar_x + 10;
console.log("When Right Arrow Is Pressed, x = " +greencar_ x+"| y="+grrencar_y);
uploadBackground();
uploadgreencar();
	}
}
