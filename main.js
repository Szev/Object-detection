img="";

function setup()
{
    canvas= createCanvas(600, 400);
    canvas.center();
}
function preload()
{
    img= loadImage('dog_cat.jpg');
}
function draw()
{
    image(img, 0 , 0, 600, 400);
    fill("#21eba1");
    text("DOG", 45, 75);
    noFill();
    stroke("#ff0019");
    rect(30, 60, 270, 300);
}