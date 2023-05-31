$(function(){
  $(".menubtn").click(function(){
    let txt = $(".menubtn ul li a").text();
    console.log(txt);
    if (txt == "메뉴"){
      $(".go").fadeOut(500)
      $(".menubtn ul li i").attr("class", "fa-solid fa-x");
      $(".menusub_bg").slideDown(500, function(){
        $(".menubtn ul li a").text("닫기");
      });
    } else if (txt == "닫기") {
      $(".menusub_bg").slideUp(500, function(){
        $(".menubtn ul li a").text("메뉴");
      });
      $(".menubtn ul li i").attr("class", "fa-solid fa-bars");
      $(".go").fadeIn(500);
    };
    //   if(txt)
  });
});