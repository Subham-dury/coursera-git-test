$(document).ready(function(){
  $('#mycarousel').carousel({interval: 3000 });
  $('#carouselButton').click(function(){
      if ($('#carouselButton').children('span').hasClass('fa-pause')) {
          $('#mycarousel').children('pause');
          $('#carouselButton').children('span').removeClass('fa-pause');
          $('#carouselButton').children('span').addClass('fa-play');
      }
      else if ($('#carouselButton').children('span').hasClass('fa-play')) {
          $('#mycarousel').children('circle');
          $('#carouselButton').children('span').removeClass('fa-play');
          $('#carouselButton').children('span').addClass('fa-pause');
      }
      });
      $('#loginModalToggle').click(function(){
          $('#loginModal').modal('toggle');
      });
      $('#reserveModalToggle').click(function(){
          $('#reserveModal').modal('toggle');
      });
  
  });
 