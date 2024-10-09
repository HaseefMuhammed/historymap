const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");

// "Show the dialog" button opens the dialog modally
 dialog.showModal();
// showButton.addEventListener("click", () => {
//   dialog.showModal();
// });

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});



document.getElementById('playButton').addEventListener('click', function() {
  var audio = document.getElementById('myAudio');
  audio.play().catch(function(error) {
      console.log('Play was prevented:', error);
  });
});


// IMG GALLER

$('.portfolio-menu ul li').click(function(){
  $('.portfolio-menu ul li').removeClass('active');
  $(this).addClass('active');
  
  var selector = $(this).attr('data-filter');
  $('.portfolio-item').isotope({
    filter:selector
  });
  return  false;
});
$(document).ready(function() {
var popup_btn = $('.popup-btn');
popup_btn.magnificPopup({
type : 'image',
gallery : {
  enabled : true
}
});
});