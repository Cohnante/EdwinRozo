function Color(){
  var css =document.querySelector("h1");
  var color=document.getElementById("color").value;
  css.style.color=color;
  console.log(color);
}
function Aumentar(){
  var css =document.querySelector("h1");
  console.log(css);
  css.style.fontSize+=1;
}