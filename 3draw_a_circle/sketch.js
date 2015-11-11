
function setup() {
  createCanvas(720, 720);
  // setup the slider UIs
  lxo_slider = createSlider(-width/2, width/2, 0);
  lxo_slider.position(width - 200, 20);
  lyo_slider = createSlider(-height/2, height/2, 0);
  lyo_slider.position(width - 200, 40);
  n_lines_slider = createSlider(1, 360, 36);
  n_lines_slider.position(width - 200, 60);
  radius_slider = createSlider(10, width/2);
  radius_slider.position(width - 200, 80);
}

function draw() {
  background('white');
  stroke("cyan");
  
  //center the screen
  translate(width/2, height/2);
  
  var orig = createVector(lxo_slider.value(), lyo_slider.value());
  var radius = radius_slider.value();
  var division = n_lines_slider.value();
  var ration =  360/division;
  var base_vector = createVector(1,0) ;
  
  // draw the lines
  for (var i = 1; i <= division; i++ ){
    var newvec = myRotate(base_vector, i * ration);
    line(orig.x, orig.y, newvec.x * radius, newvec.y * radius);
  }
}


function myRotate(vec, ang){
  var a = radians(ang); // cos and sin take radians
  var x1 = (cos(a) * vec.x) - (sin(a)* vec.y);
  var y1 = (sin(a) * vec.x) + (cos(a) * vec.y);
  return createVector(x1,y1);
}