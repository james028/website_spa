//toggle menu
document.querySelector(".nav-bar__menu-btn").addEventListener('click', function(e){
  e.stopPropagation();
  document.querySelector(".nav-bar").classList.toggle('nav-bar_open');
}, false);

document.querySelector(".nav-bar__nav").addEventListener('click', function(e){
  e.stopPropagation();
}, false);

//close menu if is's not focused
document.addEventListener("click", function (){
  document.querySelector(".nav-bar").classList.remove('nav-bar_open');
}, false);