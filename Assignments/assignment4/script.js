
let flag = true;
function changeImage() {
  document.getElementById("myImage").src = flag 
    ? "./images/logo.png" 
    : "./images/image.png";
  flag = !flag;
}