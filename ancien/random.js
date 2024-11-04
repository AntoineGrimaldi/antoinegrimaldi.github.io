function randomImg(){
   document.getElementById('image').src = "images/image" + Math.round(Math.random()*4+1) + ".gif";
}