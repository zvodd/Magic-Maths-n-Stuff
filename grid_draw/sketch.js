function setup() {
   createCanvas(720, 480);
}

function gridYLines(interval, w, h){
  var divs = int(h / interval);
  for (var i=0; i < divs; i++ ){
    var Y = i * interval;
    line (0,Y,w,Y)
  }
}
function gridXLines(interval, w, h){
  var divs = int(w / interval);
  for (var i=0; i < divs; i++ ){
    var X = i * interval;
    line (X,0,X,h)
  }
} 

function createGrid(w, h, c){
  c = c?c:color(180,180,180);
  stroke(c);
  gridYLines(20, w, h);
  gridXLines(20, w, h);  
}

function draw() {
  createGrid(width, height);

}