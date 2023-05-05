function startApp() {
  console.log("dasdsad");
  $(".nav-item").hover(function () {
    $(this).css("background-color", "grey");
  });

  $(".nav-item").mouseout(function () {
    $(this).css("background-color", "white");
  });

  $("#myworkNavButton").attr("href", "https://google.com");
}
$(".img").click(function() {$(".img").animate({width:'500px', height:'300px'},1000);
$("img-after").show().animate({opacity: '1'})};