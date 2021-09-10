//Create a reference for canvas 

//Give specific height and width to the car image
Canvas = document.getElementById('myCanvas');
ctx=cnavas.context("2d");
background_image = "parkingLot.jpg";
greencar_image = "car2.png";
greencar_x = 5;
greencar_y = 225;
greencar_width = 75;
greencar_height = 100;


//Set initial position for a car image.

function add() {
	background_imageTag = new Image();
	background_imgTag.onlode = uploadBackground();
	background_image.src= background_image;

	background_imageTg = new Image();
	background_imgTag.onlode = uploadgreencar();
	background_imag.src= background_image;
	
}

function uploadBackground() {
	ctx.drawImage(background_imgTag,0.0,canvas.width,cnavas.height);


}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
ctx.drawImage(greencar_imgTag, greencar_x,greencar_y,greencar_width,greencar_height);

	
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
	if(greencar_y >=0)
	{
		greencar_y = greencar_y -10;
		uplodeBackground();
		uplodegreencar();
	}
}

function down()
{
	if(greencar_y<=500){
greencar_y=greencar_y -10;
uplodeBackground();
uplodegreencar();
	}
}

function left()
{
	if(greencar_x>=0){
		green_x = greencar_x -10;
		uplodegreencar();
		uplodeBackground();
	}
}

function right()
{
	if(greencar_x<=700){
		greencar_x = greencar_x +10;
		uplodeBackground();
		uplodegreencar();
	}
}
