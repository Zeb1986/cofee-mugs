import "./index.html";
import "./index.scss";
import "./modules/slick-1.8.1/slick/slick"
import "./modules/slick-1.8.1/slick/slick-theme.css"
import "./modules/slick-1.8.1/slick/slick.css"
import $ from 'jquery';
window.jQuery = $;
window.$ = $;

$(document).ready(function(){
    $('.product__wrapper').slick({
      arrows:true,
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            arrows:false,
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 700,
          settings: {
            arrows:false,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 281,
          settings: {
            arrows:false,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false
          }
        }
      ]
    });
  });


