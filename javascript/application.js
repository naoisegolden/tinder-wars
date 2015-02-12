$(document).ready(function(){
  $("#cards").on("click", ".action-yes", function(event) {
    event.preventDefault();
    var el = $(this).parents(".card").addClass("swipe swipe-left").one('webkitAnimationEnd animationend', function(e) {
      $(this).hide();
    });
  });
  $("#cards").on("click", ".action-no", function(event) {
    event.preventDefault();
    var el = $(this).parents(".card").addClass("swipe swipe-right").one('webkitAnimationEnd animationend', function(e) {
      $(this).hide();
    });
  });
});