$(document).ready(function(){
  $('.carousel').carousel();
});

$(document).ready(function(){
  $('.slider').slider();
});


// Pause slider
$('.slider').slider('pause');
// Start slider
$('.slider').slider('start');
// Next slide
$('.slider').slider('next');
// Previous slide
$('.slider').slider('prev');

$('.collapsible').collapsible({
  accordion: false, // A setting that changes the collapsible behavior to expandable instead of the default accordion style
  //onOpen: function(el) { alert('Open'); }, // Callback for Collapsible open
  //onClose: function(el) { alert('Closed'); } // Callback for Collapsible close
});
