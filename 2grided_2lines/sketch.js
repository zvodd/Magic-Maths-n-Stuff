var L1, L2;
function setup() {
  createCanvas(720, 480);
  
  // Line1 object holds 2 vectors; origin and destination.
  L1 = {posA:null, posB:null};
  L2 = {posA:null, posB:null};
  
  lxo_slider = createSlider(0, width, 300);
  lxo_slider.position(width - 200, 20);
  lyo_slider = createSlider(0, height, 300);
  lyo_slider.position(width - 200, 40);
  lxd_slider = createSlider(0, width, 200);
  lxd_slider.position(width - 200, 60);
  lyd_slider = createSlider(0, height, 200);
  lyd_slider.position(width - 200, 80);
  lxo_slider2 = createSlider(0, width, 100);
  lxo_slider2.position(width - 200, 120);
  lyo_slider2 = createSlider(0, height, 100);
  lyo_slider2.position(width - 200, 140);
  lxd_slider2 = createSlider(0, width, 200);
  lxd_slider2.position(width - 200, 160);
  lyd_slider2 = createSlider(0, height, 200);
  lyd_slider2.position(width - 200, 180);
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
  text(realVector.x + ', ' + findVector(L1).y, width -120, height - 150);
  
  
    // Get origin and destination position from sliders.
  L2.posA = createVector(lxo_slider2.value(), lyo_slider2.value());
  L2.posB = createVector(lxd_slider2.value(), lyd_slider2.value());

  
  // Color and draw the line
  stroke("orange");
  strokeWeight(4);
  drawLine(L2);
  strokeWeight(0);
  
  // Set up text color
  fill("orange");
  
  // Find the vector of the line.
  var realVector2 = findVector(L2);
  text(realVector2.x + ', ' + findVector(L2).y, width -60, height - 150);
  
  // normalise vectors
  var nv1 = normVector2(realVector);
  var nv2 = normVector2(realVector2);
  
  push();
  translate(width -50, height -50);
  //translate(300, 300);
  strokeWeight(1);
  stroke("black");
  fill('white');
  rect(width -50, height -50, width, height);
  stroke("blue")
  line(0,0,nv1.x*50, nv1.y*50);
  stroke("red")
  line(0,0,nv2.x*50, nv2.y*50);
  pop();
  fill("black");
  text(dotVector2(nv1,nv2), width -80, height - 120);
}

function findVector(L){
  return createVector(L.posB.x - L.posA.x, L.posB.y - L.posA.y);
}

function normVector2(v){
  var m = sqrt( v.x*v.x + v.y*v.y )
  var newv = createVector( v.x/m , v.y/m);
  return newv;
}

function dotVector2(a,b){
  return a.x*b.x + a.y*b.y;
}

function drawLine(L)
{
  line(L.posA.x, L.posA.y, L.posB.x, L.posB.y);
}