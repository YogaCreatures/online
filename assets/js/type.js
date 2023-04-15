window.ityped.init(document.querySelector('.ityped'),{
    strings: ['Body & Soul', 'Body & Mind'],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
})

$(function () {
  $('.popup-vimeo').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false
  });
});


$(function() {
    $('a[href*=#]').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top - 80}, 1000, 'linear');
    });
  });

  /* Whatsapp Chat Widget by www.bloggermix.com */
$(document).on("click", "#send-it", function() {
  var a = document.getElementById("chat-input");
  if ("" != a.value) {
    var b = $("#get-number").text(),
      c = document.getElementById("chat-input").value,
      d = "https://web.whatsapp.com/send",
      e = b,
      f = "&text=" + c;
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    )
      var d = "whatsapp://send";
    var g = d + "?phone=9877103501" + e + f;
    window.open(g, "_blank");
  }
}),
  $(document).on("click", ".informasi", function() {
    (document.getElementById("get-number").innerHTML = $(this)
      .children(".my-number")
      .text()),
      $(".start-chat,.get-new")
        .addClass("show")
        .removeClass("hide"),
      $(".home-chat,.head-home")
        .addClass("hide")
        .removeClass("show"),
      (document.getElementById("get-nama").innerHTML = $(this)
        .children(".info-chat")
        .children(".chat-nama")
        .text()),
      (document.getElementById("get-label").innerHTML = $(this)
        .children(".info-chat")
        .children(".chat-label")
        .text());
  }),
  $(document).on("click", ".close-chat", function() {
    $("#whatsapp-chat")
      .addClass("hide")
      .removeClass("show");
  }),
  $(document).on("click", ".blantershow-chat", function() {
    $("#whatsapp-chat")
      .addClass("show")
      .removeClass("hide");
  });

// document.onkeydown = function(e) {
//   if (e.ctrlKey && 
//       (e.keyCode === 67 || 
//        e.keyCode === 86 || 
//        e.keyCode === 85 || 
//        e.keyCode === 117)) {
//       alert('not allowed');
//       return false;
//   } else {
//       return true;
//   }
// };
// // disable Ctrl+U using Javascript

// $(document).keydown(function (event) {
//   if (event.keyCode == 123 ) { // Prevent F12
//       alert('not allowed');
//         return false;
//     } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) { // Prevent Ctrl+Shift+I        
//         return false;
//     }
// });
// // block F12 keyboard key in jquery for all my pages and elements

// $(function() {
//     $(this).bind("contextmenu", function(e) {
//         e.preventDefault();
//     });
// }); 
// // prevent Right Click option using jquery