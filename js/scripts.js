$(document).ready(function() {
	var carouselList = $("#carousel ul");
    var t setInterval(function(changeSlide, 2000) {
        carouselList.animate({marginLeft: -480}, 1000, moveFirstSlide); 
        moveFirstSlide(function() {
            var firstItem = carouselList.find("li:first");
            var lastItem = carouselList.find("li:last");
            lastItem.after(firstItem)
            carouselList.css({marginLeft: 0});
        });
    });   
});

