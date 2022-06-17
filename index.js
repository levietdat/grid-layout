jQuery(function(){
  const btnMobile =  $(".mobile")
  const btnTablet =  $(".tablet")
  const btnPc =  $(".pc")

  btnMobile.on("click",function(){
    $(".row").css("flex-direction","column");
    $(".container").css("max-width","739px");
  });

  btnTablet.on("click",function(){
    $(".row").css("flex-direction","column");
    $(".container").css("max-width","900px");
  });

  btnPc.on("click",function(){
    $(".row").css("flex-direction","row");
    $(".container").css("max-width","1200px");
  });
});