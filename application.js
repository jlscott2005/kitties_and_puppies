$(function(){
  // Your code goes here...
  var pups = "<div id='p_carousel'>\
        <div class='carousel_controls'>\
          <a href='#' id='pprevious_frame'>&lt;</a>\
          <a href='#' id='pnext_frame'>&gt;</a>\
        </div>\
        <div class='carousel'>\
        <p>Puppies</p>\
          <ul class='frames'>\
           <li>\
              <img src='http://www.getupanddosomething.org/wp-content/uploads/2013/11/220.jpg'>\
            </li>\
            <li>\
              <img src='http://www.tehcute.com/pics/201109/puppies-hanging-in-baby-clothes-big.jpg'>\
            </li>\
            <li>\
              <img src='http://images4.fanpop.com/image/photos/14700000/Sweet-puppy-with-bunny-puppies-14749075-1600-1200.jpg'>\
            </li>\
          </ul>\
        </div>\
      </div>"

  var kitties = "<div id='k_carousel'>\
        <div class='carousel_controls'>\
          <a href='#' id='kprevious_frame'>&lt;</a>\
          <a href='#' id='knext_frame'>&gt;</a>\
        </div>\
        <div class='carousel' >\
        <p>Kitties</p>\
          <ul class='frames'>\
            <li>\
              <img src='http://cl.jroo.me/z3/F/c/F/d/a.aaa-Kitties-in-teacups.jpg'>\
            </li>\
            <li>\
              <img src='http://images4.fanpop.com/image/photos/18000000/Adorable-kitties-kitties-18082710-500-375.jpg'>\
            </li>\
            <li>\
              <img src='http://images4.fanpop.com/image/photos/16700000/Cute-little-kitties-teddybear64-16776219-600-602.jpg'>\
            </li>\
          </ul>\
        </div>\
      </div>"

  $('.kitty').click(function(event){
    event.preventDefault;
    $("#p_carousel").remove();
    $(".container").append(kitties);
    $("#k_carousel").css("visibility", "visible");
  });

  $('.puppy').click(function(event){
    event.preventDefault;
    $("#k_carousel").remove();
    $(".container").append(pups);
    $("#p_carousel").css("visibility", "visible");
  });

  $(".container").on('click', '#knext_frame', function(event) {
    $(".frames li:first-child").animate({
      right: "+=360"
    }, 1000);
    $(".frames li:first-child").delay( 500 ).remove();
  });


  $(".container").on('click', '#kprevious_frame', function(event) {
    $(".frames li").animate({right: "-=360"},1000, function(){
      $(this).find("li:last").after($(this).find("li:first"));
      $(this).css({marginLeft: 0});
    }, 500);
  });

  $(".container").on('click', '#pnext_frame', function(event) {
    $(".frames ul").clone().appendTo(".frames ul");

    $(".frames li:last-child").animate({
      right: "+=360"
    }, 1000);
    $(".frames li:first-child").delay( 500 ).remove();
  });


  $(".container").on('click', '#pprevious_frame', function(event) {
    $(".frames ul").clone().prependTo(".frames ul");
    $(".frames li:last-child").animate({
      right: "-=360"
    }, 1000);
    $(".frames li:last-child").delay( 500 ).remove();
  });
});
