// NOTE: eventCountDownDate is a global variable defined in index.html. This is done intentionally
//   to make new event updates mostly a single-file edit rather than a multi-file edit.
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = eventCountDownDate - now;
  var countdownHeader = "The show starts in..."
  var endText = "The show is on now.";

  // Quality of life variables.
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  var millis = Math.floor(distance % (1000 * 60) / 10) - (seconds * 100);

  document.getElementById("countdown").innerHTML = countdownHeader + "<br />" + days + "d " + hours + "h "
  + minutes + "m " + seconds + "." + millis + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = endText;
  }
}, 16);

// Fade function for objects like the site logo and other details.
$(document).ready(function(){
  $(".fadein").hide(0).delay(500).fadeIn(1500);
  $(".fadeinfast").hide(0).delay(100).fadeIn(750);
  $(".fadeout").delay(1500).fadeOut(1500).hide(0);

  $("#expander").click(function(){
    $("#expanddown").slideDown(200);
    $("#expanddownalt").slideUp(200);
  });

  $("#collapser").click(function(){
      $("#expanddownalt").slideDown(200);
      $("#expanddown").slideUp(200);
  });
});
