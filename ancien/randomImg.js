function randomImg(){
   document.getElementById('image').src = "index_" + Math.round(Math.random()*4+1) + ".jpg";
   rdm = Math.round(Math.random()*4+1);
   return rdm;
}