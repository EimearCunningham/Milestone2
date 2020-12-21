/*$(document).ready(function() {

    //About Us section functionality 
   $(".about-paragraph").hide();

    $("#story-image").click(function(){
  $("#story-paragraph").show();
    });

    $("#founders-image").click(function(){
  $("#founders-paragraph").show();
    });

    $("#team-image").click(function(){
  $("#team-paragraph").show();
    });
});*/


//Scroll to top button - Code source: W3schools.com

//Get button:
mybutton = document.getElementById("scrollBtn");

// Show button when user scrolls down 20px from top of page
window.onscroll = function() {scrollFunction()};

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

//About Us section - On scroll function
$(document).scroll(function() {
    $(".about-paragraph").hide();
  var y = $(this).scrollTop();
  if (y > 250) {
    $('#story-paragraph').show();
  } 
  if (y > 600) {
    $('#founders-paragraph').show();
  } 
  if (y > 800) {
    $('#team-paragraph').show();
  } 
  
});
