function toggleMenu() {
	var element = document.getElementById("main-menu");
    element.classList.toggle("expanded");
	// $(".menu").toggleClass("extended")
 };

 window.onscroll = function () {
     var menu = document.getElementById('main-menu');
     if (window.pageYOffset > 0) {
         menu.classList.add("is-scrolled");
     } else {
         menu.classList.remove("is-scrolled");
     }
 }