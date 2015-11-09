var L1;
function setup() {
  createCanvas(720, 480);
  
  // Line1 object holds 2 vectors; origin and destination.
  L1 = {posA:null, posB:null};
  
  lxo_slider = createSlider(0, width, 100);
  lxo_slider.position(width - 200, 20);
  lyo_slider = createSlider(0, height, 100);
  lyo_slider.position(width - 200, 40);
  lxd_slider = createSlider(0, width, 200);
  lxd_slider.position(width - 200, 60);
  lyd_slider = createSlider(0, height, 200);
  lyd_slider.position(width - 200, 80);
}

function draw() {
  background('white');
  createGrid(width, height);

  // Get origin and destination position from sliders.
  L1.posA = createVector(lxo_slider.value(), lyo_slider.value());
  L1.posB = createVector(lxd_slider.value(), lyd_slider.value());
  
  // Color and draw the line
  stroke("lightblue");
  strokeWeight(4);
  drawLine(L1);
  strokeWeight(0);
  
  // Set up text color
  fill("blue");
  
  // Find the vector of the line.
  var realVector = findVector(L1);
  text(realVector.x + ', ' + findVector(L1).y, width/2, 20);
  
}

function findVector(L){
  return createVector(L.posB.x - L.posA.x, L.posB.y - L.posA.y);
}

function drawLine(L)
{
  line(L.posA.x, L.posA.y, L.posB.x, L.posB.y);
}