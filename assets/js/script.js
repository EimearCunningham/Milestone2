//---------------------------------------------Scroll to top button - Code source: W3schools.com
//Get button:
var mybutton = document.getElementById("scrollBtn");

// Show button when user scrolls down 20px from top of page
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Scroll to top of page when user clicks on button
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//---------------------------------------------About Us section - On scroll function
$(".about-paragraph").hide();
$(document).scroll(function () {
  var y = $(this).scrollTop();

  if (y > 250) {
    $("#story-paragraph").fadeIn(1000);
  }
  if (y > 600) {
    $("#founders-paragraph").fadeIn(1000);
  }
  if (y > 800) {
    $("#team-paragraph").fadeIn(1000);
  }
});

//---------------------------------------------On click function to collapse menu on sm & md screen sizes
$(".navbar-nav>li>a").on("click", function () {
  $(".navbar-collapse").collapse("hide");
});
