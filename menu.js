function openCity(cityName) {
    var i;
    var x = document.getElementsByClassName("city");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(cityName).style.display = "block";
}

$(document).ready(function(){
  $('.button-menu').hide();
  $('.menu').click(function(){
    $('.button-menu').toggle();
  })
  $('.button-menu li').click(function(){
    $('.button-menu').toggle();
  })
  $('.left-customer p').hide();
  $('#para2').show();
  $('.left-customer img').click(function(){
    $('.left-customer img').removeClass('enlarge');
    $(this).toggleClass('enlarge');
    var checked = $('.enlarge').attr('para-id')
    $('.left-customer p').hide();
    $(checked).show();
  })
})
<!-- Google Analytics -->

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-91549349-1', 'auto');
  ga('send', 'pageview');
  ga('set', 'userId', {{USER_ID}}); // Set the user ID using signed-in user_id.

  <!-- Google Analytics -->
