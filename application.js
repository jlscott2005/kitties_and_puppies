$(document).ready(function(){
    var t = setInterval(function(){
        $("#k_carousel ul").animate({marginLeft:-350},1000,function(){
            $(this).find("li:last").after($(this).find("li:first"));
            $(this).css({marginLeft:0});
        })
    },5000);


        var t = setInterval(function(){
        $("#p_carousel ul").animate({marginLeft:-350},1000,function(){
            $(this).find("li:last").after($(this).find("li:first"));
            $(this).css({marginLeft:0});
        })
    },5000);

  $('.kitty').click(function(event){
    event.preventDefault;
    $("#k_carousel").css("visibility", "visible");
  });

  $('.puppy').click(function(event){
    event.preventDefault;
    $("#k_carousel").remove();
    $("#p_carousel").css("visibility", "visible");
  });
});
