<template>
    <div id="header" class="header">
        <div class="header-container _container">
            <div class="header-wrap">
                  <div class="header-logo">
               <a href="#">
                    <img class="header-logo__image" src="../assets/img/logo.svg" alt="logo">
                    <img class="header-logo__image" src="../assets/img/logo2.svg" alt="logo">
                    <img class="header-logo__image" src="../assets/img/logo3.svg" alt="logo">
                    <img class="header-logo__image" src="../assets/img/logo4.svg" alt="logo">
                    <span>Три Квартала</span>
               </a>
           </div>
           <div class="header-menu header-menu__desktop">
               <nav>
                   <ul>
                       <li><a class="scrollto" href="#about">о квартале</a></li>
                       <li><a href="#apartments" class="scrollto">Кварталы</a></li>
                       <li><a href="#location" class="scrollto">локация</a></li>
                       <li><a href="#advantages" class="scrollto">Преимущества</a></li>
                       <li><a href="#infrastructure" class="scrollto">инфраструктура</a></li>
                       <li><a href="#contacts" class="scrollto">контакты</a></li>
                   </ul>
               </nav>
           </div>
            </div>
           <div class="header-phone">
               <a class="header-phone__number" href="tel:+88005005005">8 800 500 500 5</a>
               <!-- <a class="header-phone__enter"  href="#">вход</a> -->
           </div>
           <div class="header-phone__mob">
               <a href="#"><img class="mob-tel" src="../assets/img/mobile-tel.svg" alt="phone"></a>
               <nav>
                   <div class="hamburger-menu">
                    <label class="menu__btn" for="menu__toggle">
                        <div class="menuButton">
                          <span></span>
                      </div>
                    </label>
                    <ul class="menu__box">
                        <li class="menu__box-fisrt"><a href="#"><img  src="../assets/img/circle1.svg" alt="logo"></a>
                        <div class="menu__box-num">
                            <a href="#"><img class="mob-tel" src="../assets/img/mobile-tel.svg" alt="phone"></a>
                        </div>
                        </li>
                        <li><a class="menu__item menu__item-current" href="#">Главная</a></li>
                        <li><a class="menu__item" href="#">О Квартале</a></li>
                        <li><a class="menu__item" href="#">Лесной Квартал</a></li>
                        <li><a class="menu__item" href="#">Водный Квартал</a></li>
                        <li><a class="menu__item" href="#">Городской Квартал</a></li>
                        <li><a class="menu__item" href="#">Локация</a></li>
                        <li><a class="menu__item" href="#">Преимущества</a></li>
                        <li><a class="menu__item" href="#">Инфраструктура</a></li>
                        <li><a class="menu__item menu__item-next" href="#">Контакты</a></li>
                        <li class="menu__box-last"><a class="menu__box-tel" href="tel:+88005005005">8 800 500 500 5</a>
                            <div class="menu__box-social">
                                <a href="#">
                                    <img src="../assets/img/facebook.svg" alt="facebook">
                                </a>
                                <a href="#">
                                    <img src="../assets/img/vk.svg" alt="vk">
                                </a>
                                <a href="#">
                                    <img src="../assets/img/insta.svg" alt="instagram">
                                </a>
                            </div>
                        </li>
                    </ul>
                    </div>
               </nav>
           </div>
        </div>

      <!-- <Feedback /> -->
    </div>

</template>

<script>

// Vue.use(vsInput)
import $ from "jquery";

export default {
    data(){
    return {
    }
  },
  methods: {
},

  mounted() {
    $(document).ready(function() {
      $(".scrollto").click(function() {
        let elementClick = $(this).attr("href")
        $("body,html").animate(
          {
            scrollTop: $(elementClick).offset().top
          },
          800 //speed
        );
      });
      $("#btn-up").click(function (){
        $("body,html").animate(
          {
            scrollTop: $(".apartments").offset().top
          },
          800 //speed
        );
      });
      $("#btn-up-footer").click(function (){
        $("body,html").animate(
          {
            scrollTop: $("#header").offset().top
          },
          800 //speed
        );
      });

    //   $('.header-menu > nav > ul > li > a').on('click', function (){
    //     $('.scrollto').removeClass('header-menu__current');
    //     $(this).addClass('header-menu__current');
    //   })
      $(window).scroll(function(){
            if ($(this).scrollTop() > 60) {
                $('.header').addClass('fixed').slideDown();
            } else {
                $('.header').removeClass('fixed');
            }
        });
        $('.header-logo__image:first').addClass('is-current');
            setInterval(function(){
            var $next = $('.header-logo__image.is-current')
                .removeClass('is-current')
                .next('.header-logo__image');
                $next.length ? $next.addClass('is-current') : $('.header-logo__image:first').addClass('is-current');
            }, 2000);
         });
         // Cache selectors
var lastId,
    topMenu = $(".header-menu__desktop ul"),
    topMenuHeight = topMenu.outerHeight()+15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({
      scrollTop: offsetTop
  }, 300);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;

   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";

   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("header-menu__current")
         .end().filter("[href='#"+id+"']").parent().addClass("header-menu__current");
   }
});



$('.menuButton').click((e)=>{
  e.preventDefault();
  $('.menuButton').toggleClass('active');
    $('.menu__box').toggleClass('activeMobileMenu');
})
  }

}

</script>
<!--<script>-->
<!--var Vue = require('vue');-->
<!--var VueScrollTo = require('vue-scrollto');-->
<!--Vue.use(VueScrollTo)-->

<!--// You can also pass in the default options-->
<!--Vue.use(VueScrollTo, {-->
<!--  container: "body",-->
<!--  duration: 500,-->
<!--  easing: "ease",-->
<!--  offset: 0,-->
<!--  force: true,-->
<!--  cancelable: true,-->
<!--  onStart: false,-->
<!--  onDone: false,-->
<!--  onCancel: false,-->
<!--  x: false,-->
<!--  y: true-->
<!--})-->
<!--// </script>-->

<style lang="scss">
    ._container{
        max-width: 74%;
        margin: 0 auto;
        @media screen and (max-width: 1600px){
            max-width: 80%;
        }
    }
    .header.fixed{
        height: 90px;
        box-shadow: 0px 3px 25px rgba(0, 0, 0, 0.12);
    }
    .header {
            transition: 0.5s;
           background: rgba(249, 249, 249, 0.98);
            padding: 14px 0px 14px;
            z-index: 999999;
            width: 100%;
            position: fixed;
            padding: 0;
            height: 100px;
            display: flex;
            align-items: center;
        @media screen and (max-width: 1024px){
            padding: 20px 0px;
            background: #FFFFFF;
        }
        .header-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 1400px;
            @media screen and (max-width: 1260px){

            }
        }
        .header-wrap{
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 70%;
             @media screen and (max-width: 1600px){
              width: 75%;
              }
            @media screen and (max-width: 1260px){
                width: 91%;
            }

        }
        .header-logo {
                max-width: 160px;
                width: 100%;
                margin-right: 30px;
                position: relative;
            @media screen and (max-width: 1600px){
               margin-right: 30px;
            }
            @media screen and (max-width: 960px){
                display: block;
            }
            a{
                text-decoration: none;
                display: flex;
                img{
                    margin-right: 10px;
                }
                span{
                    font-family: "Geometria-Medium", sans-serif;
                    font-size: 16px;
                    line-height: 150%;
                    display: flex;
                    align-items: center;
                    letter-spacing: -0.03em;
                    color: #0B315E;
                    margin-left: 40px;
                }
            }
        }
        .header-menu__desktop{
            @media screen and (max-width: 1024px){
                display: none;
            }
        }
        .header-menu {
           max-width: 750px;
            width: 100%;
            &__current{
                color: #6544FB !important;
                padding-bottom: 5px;
                a{
                     color: #6544FB !important;
                     padding-bottom: 3px;
                     border-bottom: 3px solid #6544FB;
                }
            }
             a{
                font-family: "Aver-Bold";
                text-decoration: none;
                letter-spacing: -0.03em;
                text-transform: uppercase;
                color: #0B315E;
                margin: 40px 0px;
                outline: none;
                // padding-bottom: 10px;
                font-size: 14px;
                @media screen and (max-width: 1260px){
                    font-size: 12px;
                }
            }
            nav{
                ul{
                    display: flex;
                    justify-content: space-between;
                }
            }
        }
        .header-phone__mob{
            display: none;
            @media screen and (max-width: 1024px){
                display: inline-flex;
            }
            .mob-tel{
                margin-right: 10px;
                 @media screen and (max-width: 768px){
                     margin-right: 25px;
                 }
                  @media screen and (max-width: 560px){
                     margin-right: 45px;
                 }
            }
        }
        .header-phone {
            margin-top: 5px;
            @media screen and (max-width: 960px){
                display: none;
            }
            &__number{
                display: inline-block;
                background: #6544FB;
                border-radius: 60px;
                text-decoration: none;
                letter-spacing: -0.03em;
                text-transform: uppercase;
                color: #FFFFFF;
                font-weight: 500;
                padding: 12px 25px;
                font-size: 14px;
                font-family: "Aver-Regular", sans-serif;
                @media screen and (max-width: 1260px){
                    display: none;
                }
                &:hover{
                    background: #7e62fa;
                    transition: 0.3s;
                }
            }
            &__enter{
                text-decoration: none;
                font-family: "Aver-Bold";
                letter-spacing: -0.03em;
                text-transform: uppercase;
                color: #0B315E;
                font-size: 14px;
                 @media screen and (max-width: 1260px){
                     font-size: 12px;
                 }
            }
        }
    #menu__toggle {
     opacity: 0;
    }
    .menu__btn {
        display: flex;
        align-items: center;
        position: absolute;
        width: 26px;
        height: 26px;
        cursor: pointer;
        z-index: 90999;
        .menuButton{
            display: flex;
            justify-content: center;
            align-items: center;
            height: 32px;
            width: 32px;
            transition: 0.2s;
            &:hover{
                cursor: pointer;
            }
            span, &::before,  &::after{
                background: #0B315E;
                width: 32px;
                height: 4px;
                border-radius: 8px;
                transition: 0.4s;
            }

            &::before{
                content: '';
                position: absolute;
                transform: translateY(-10px);
            }
            &::after{
                content: '';
                position: absolute;
                transform: translateY(10px);
            }
            }

            .active{
            span{
            visibility: hidden;
            transform: rotate(90deg);
            background:rgba(11,49,94,0);
            }
            &::before{
            transform: rotate(-45deg);
            }

            &::after{
            transform: rotate(45deg);
            }
        }
    }

    .menu__box {
        display: block;
        position: fixed;
        visibility: hidden;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 20px 0 0;
        list-style: none;
        background-color: #F2F9FF;
        box-shadow: 1px 0px 6px rgba(0, 0, 0, .2);
        z-index: 9999;
        transition: all 0.5s;
    }
    .menu__item-next{
        padding-bottom: 80px !important;
    }
    .menu__item {
        display: block;
        padding: 18px 24px;
        color: #333;
        font-size: 16px;
        line-height: 120%;
        text-decoration: none;
        font-weight: 600;
        background-color: #fff;
    }
    .menu__item:hover {
        background-color: #F2F9FF;
        color: #6544FB;
        transition: all 0.3s;
    }

   .activeMobileMenu {
    visibility: visible;
    left: 0;
    transition: all 0.5s;
    }
    .menu__box-last{
        display: flex;
        background: #F2F9FF;
        align-items: center;
        justify-content: space-between;
        padding: 15px 24px;
        .menu__box-tel{
            font-size: 14px;
            line-height: 150%;
            letter-spacing: -0.03em;
            text-transform: uppercase;
            text-decoration: none;
            color: #FFFFFF;
            background: #6544FB;
            border-radius: 60px;
            display: inline-block;
            padding: 7px 20px;
        }
    }
    .menu__item-current{
        font-weight: 800;
        font-size: 16px;
        line-height: 120%;
        color: #6544FB;
        letter-spacing: -0.03em;
    }
    .menu__box-fisrt{
        display: flex;
        justify-content: space-between;
        padding: 0px 24px 20px;
        .menu__box-num{
            margin-right: 40px;
        }
    }
}

// ========== feedback popup =====================

  .feedback {

        .feedback-wrap{
            background: #F2F9FF;
            padding: 70px 14px 37px 74px;
             @media(max-width: 960px){
                padding: 31px 16px;
             }
        }
    }
    .feedback-form{
        padding:70px 70px 90px;
         @media(max-width: 960px){
                padding: 21px 16px;
             }
        p{
            font-size: 16px;
            line-height: 15px;
        }
    }
    .feedback-header {
        h3{
            font-weight: 800;
            font-weight: 800;
            font-size: 72px;
            letter-spacing: -0.03em;
            color: #14142B;
             font-family: "Aver-Bold";
             max-width: 300px;
             @media(max-width: 1600px){
                 font-size: 60px;
             }
               @media(max-width: 960px){
                 font-size: 48px;
             }
            span{
                color: #6544FB;
            }
        }
        input{
            display: inline-block;
            box-sizing: border-box;
            padding: 10px 0px;
            width: 100%;
            border: none;
            border-bottom: 1px solid #BDBDBD;
            font-size: 16px;
            line-height: 15px;
            margin-bottom: 20px;
             font-family: "Geometria";
        }
         input::placeholder{
            color: #828282;
        }
    }
    .feedback-agree {
        display: flex;
        align-items: flex-start;
        margin: 20px 0px;
        label{
            font-size: 14px;
            line-height: 20px;
            color: #4F4F4F;
        }
    }
    .feedback-send {
         font-family: "Geometria";
         background: #6544FB;
         font-weight: 600;
        border-radius: 100px;
        font-size: 18px;
        line-height: 18px;
        display: inline-block;
        text-align: center;
        color: #FFFFFF;
        border: none;
        padding: 15px 30px;
        box-sizing: border-box;
        width: 100%;
        &:hover{
           background: #7f62ff;
           transition: all 0.3s;
        }
    }
    .header-logo__image{
        opacity: 0;
        transition: opacity 1s;
        width: 27px;
        height: 27px;
        position: absolute;
        top: 0px;
        left: 0px;
    }
    .is-current {
        z-index:5;
        opacity: 1;
    }
    .header.fixed .menu__btn{
        top: 12px;
    }
</style>
