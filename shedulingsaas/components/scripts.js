var x = 0;
var y = 0;

window.addEventListener("mousedown", e => {
  x = e.clientX;
  y = e.clientY;
  console.log(x, y);
});

window.addEventListener("mouseup", e => {
  x2 = e.clientX - x;
  y2 = e.clientY - y;
  console.log(x, y);
  spin();
});

function spin() {

  var cube = document.getElementsByName('cube')
  if(x < 0 || y < 0){
    if(x < 0 && y < 0){
      if((-1 * x) > (-1 * y)){
        cube.style.transform = "rotateY("+x+"grad)";
      }
      else {
        cube.style.transform = "rotateX("+-y+"grad)";
      }
    }
    else if(x < 0){
      if((-1 * x) > y){
        cube.style.transform = "rotateY("+x+"grad)";
      }
      else {
        cube.style.transform = "rotateX("+-y+"grad)";
      }
    }
    else {
      if(x > (-1 * y)){
        cube.style.transform = "rotateY("+x+"grad)";
      }
      else{
        cube.style.transform = "rotateX("+-y+"grad)";
      }
    }
  }
  else {
    if(x > y){
      cube.style.transform = "rotateY("+x+"grad)";
    }
    else {
      cube.style.transform = "rotateX("+-y+"grad)";
    }
  }
  cube.style.transform = "rotateY(" + x2 + "grad) rotateX(" + -y2 + "grad)";
}