function gridYLines(interval, w, h){
  var divs = int(h / interval);
  for (var i=0; i < divs; i++ ){
    var Y = i * interval;
    line (0,Y,w,Y);
  }
}
function gridXLines(interval, w, h){
  var divs = int(w / interval);
  for (var i=0; i < divs; i++ ){
    var X = i * interval;
    line (X,0,X,h);
  }
}

function createGrid(w, h, i, c){
  i = i?i:20;
  c = c?c:color(180,180,180);
  stroke(c);
  gridYLines(i, w, h);
  gridXLines(i, w, h);
}