$(function () {
  var a = $(".nurul_name");
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll <= 0) {
      a.removeClass("nurul_change").addClass("nurul_name");
    } else {
      a.removeClass("nurul_name").addClass("nurul_change");
    }
  });
});

$(function () {
  var a = $(".nav-menu");
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll <= 0) {
      a.removeClass("nav-men").addClass("nav-menu");
    } else {
      a.removeClass("nav-menu").addClass("nav-men");
    }
  });
});


//  $(function() {
//   var a = $(".nurul_namemob");
//   $(window).scroll(function() {    
//     var scroll = $(window).scrollTop();

//     if (scroll >= 0) {
//       a.removeClass("nurul_namemob").addClass("nurul_namemob1");
//     } else {
//       a.removeClass("nurul_namemob1").addClass("nurul_namemob");
//     }
//   });

// });

//  $(function() {
//   var a = $(".nurul_namemob");
//   $(window).scroll(function() {    
//     var scroll = $(window).scrollTop();

//     if (scroll <= 0) {
//       a.removeClass("nurul_namemob1").addClass("nurul_namemob");
//     } else {
//       a.removeClass("nurul_namemob").addClass("nurul_namemob1");
//     }
//   });

// });
