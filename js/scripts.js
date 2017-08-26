$(document).ready(function() {
    var carouselList = $('#carousel ul');
    var setInterval = (function(changeSlide) {
        carouselList.animate({marginLeft: -480}, 1000, moveFirstSlide); 
        var moveFirstSlide = (function() {
            var firstItem = carouselList.find('li:first');
            var lastItem = carouselList.find('li:last');
            lastItem.after(firstItem);
            carouselList.css({marginLeft: 0});
        });
    });  
});
