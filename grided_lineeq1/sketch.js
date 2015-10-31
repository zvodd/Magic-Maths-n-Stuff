var LineXSlider;
var LineGradientSlider;
function setup() {
  createCanvas(720, 480);
  
  
  LineXSlider = createSlider(0, 200);
  LineXSlider.position(width - 200, 20);
  
  LineGradientSlider = createSlider(0, 100);
  LineGradientSlider.position(width - 200, 50);
  
}

function draw() {
  background('white');
  createGrid(width, height);
  stroke("lightblue");
  strokeWeight(4);
  var l = {m: LineGradientSlider.value()/100, b:LineXSlider.value()};
  translate(100,0);
  drawLine(l,300)
}

function findY(l, x)
{
  var y =  l.m *x+l.b;
  return y;
}

function drawLine(l, x)
{
  var y = findY(l, x),
      ox = x,
      oy = y;

  x = 0;
  y = findY(l, x);
  
  line(ox,oy,x,y);
  
}