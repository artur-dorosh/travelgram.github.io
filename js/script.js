/* banner slider */

var slideIndex = 1;
var slides = document.getElementsByClassName("slider-content");
var dots = document.getElementsByClassName("dot");
showSlides(slideIndex);

var intervalId = setInterval(nextSlide,3000);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    if (n > slides.length)
        slideIndex = 1;
    if (n < 1)
        slideIndex = slides.length;

    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (var i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

function nextSlide(){
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (var i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

	slides[slideIndex-1].style.display = 'none';
    dots[slideIndex-1].className = dots[slideIndex-1].className.replace(" active", "");

	slideIndex += 1;
    if (slideIndex > slides.length)
        slideIndex = 1;
    if (slideIndex < 1)
        slideIndex = slides.length;

	slides[slideIndex-1].style.display = 'block';
    dots[slideIndex-1].className += " active";
}


/* map */
var marker, infoWindow, myMap;

function initMap() {
    var myLatLng = {lat: 50.449626, lng: 30.524833};

    myMap = new google.maps.Map(document.getElementById("map"), {
      center: myLatLng,
      zoom: 11
    });
    infoWindow = new google.maps.InfoWindow;

    marker = new google.maps.Marker({
      map: myMap,
      draggable: true,
      position: myLatLng,
      animation: google.maps.Animation.DROP
    });
    marker.addListener('click', toggleBounce);

    if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            myLatLng = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };

            marker.setPosition(myLatLng);
            infoWindow.open(myMap);
            myMap.setCenter(myLatLng);
          }, function() {
            handleLocationError(true, infoWindow, myMap.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, myMap.getCenter());
      }
}

function handleLocationError(browserHasGeolocation, infoWindow, myLatLng) {
    infoWindow.setPosition(myLatLng);
    infoWindow.setContent(browserHasGeolocation ?
                          'Error: The Geolocation service failed.' :
                          'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(myMap);
}

function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}

/* pagination */

var pageIndex = 1;
var pages = document.getElementsByClassName("pagination-link");
var posts = document.getElementsByClassName("posts");
var prev = document.getElementById("prev");
var next = document.getElementById("next");
showPage(pageIndex);

function plusPage(n) {
    showPage(pageIndex += n);
}

function currentPage(n) {
    showPage(pageIndex = n);
}

function showPage(n) {
    if (n == pages.length - 2)
        next.className += " disable";
    else
        next.className = "pagination-link";
    if (n == 1)
        prev.className += " disable";
    else
        prev.className = "pagination-link";

    for (var i = 1; i < pages.length - 1; i++) {
        pages[i].className = "pagination-link";
    }

    for (var i = 0; i < posts.length; i++) {
        posts[i].style.display = "none";
    }


    pages[pageIndex].className += " active";
    posts[pageIndex-1].style.display = "flex";
}

/* anchors */

$(document).ready(function(){
    $("#navigation").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
    $("#mobile-navigation").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
    $("#foot-menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
    $("#author").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});
