//scroll to exact position
{ 
document.getElementById("goToTop").onclick = function (){
  window.scroll({top: 0, behavior: "smooth"});
}
document.getElementById("aboutButton").onclick = function (){
  window.scroll({top: 1920, behavior: "smooth"});
}
document.getElementById("popularButton").onclick = function (){
  window.scroll({top: 3840, behavior: "smooth"});
}
document.getElementById("careButton").onclick = function (){
  window.scroll({top: 5760, behavior: "smooth"});
}
document.getElementById("funButton").onclick = function (){
  window.scroll({top: 7680, behavior: "smooth"});
}
// end of scrolling
}

