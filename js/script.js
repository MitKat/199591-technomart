
var link2 = document.querySelectorAll(".btn-buy");
var popupcart = document.querySelector(".modal-cart");
var closecart = popupcart.querySelector(".modal-close");
var closecart2 = popupcart.querySelector(".btn-close");
			
for (var i = 0; i < link2.length ; i++) {
	link2[i].addEventListener("click", function(event) {
  	event.preventDefault();
		popupcart.classList.add("modal-content-show");
  });
}
			
closecart.addEventListener("click", function(event) {
   event.preventDefault();
   popupcart.classList.remove("modal-content-show");
});
			
closecart2.addEventListener("click", function(event) {
   event.preventDefault();
   popupcart.classList.remove("modal-content-show");
});

var link = document.querySelector(".btn-open-modal");
var popupform = document.querySelector(".modal-form");
var closeform = popupform.querySelector(".modal-close");
		
link.addEventListener("click", function(event) {
 	event.preventDefault();
	popupform.classList.add("modal-form-show");
});
			
closeform.addEventListener("click", function(event) {
  event.preventDefault();
  popupform.classList.remove("modal-form-show");
});

var mapOpen = document.querySelector(".map");
var mapPopup = document.querySelector(".modal-map");
var closeMap = mapPopup.querySelector(".modal-close");

mapOpen.addEventListener("click", function(event) {
 	event.preventDefault();
	mapPopup.classList.add("modal-content-show");
});
			
closeMap.addEventListener("click", function(event) {
  event.preventDefault();
  mapPopup.classList.remove("modal-content-show");
});
			