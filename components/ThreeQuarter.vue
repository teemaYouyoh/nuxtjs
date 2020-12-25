<template>
    <div id="about" class="quarter quarter-three">
        <div class="quarter-container">
            <div class="quar-wr">
                  <p class="quarter-about">О КВАРТАЛЕ</p>
           <h2 class="quarter-header"><span>Три Квартала</span> – жилой квартал нового формата. </h2>
           <div class="quarter-wrapper">
               <div class="quarter-left">
                    <p class="quarter-info">Городской комфорт и высокий уровень жизни в экологически чистом районе с собственным зеленым парком и спортивным кластером для жизни, учебы и работы.</p>
                    <div class="quarter-advantages">
                        <div class="quarter-advantage__item advantage-quater">
                            <img class="advantage-quater__icon" src="../assets/img/advantages1.svg" alt="Срок сдачи">
                            <p class="advantage-quater__grey">Срок сдачи</p>
                            <p class="advantage-quater__blue"> II кв. 2022 г.</p>
                        </div>
                        <div class="quarter-advantage__item advantage-quater">
                            <img class="advantage-quater__icon" src="../assets/img/advantages2.svg" alt="Класс ЖК">
                            <p class="advantage-quater__grey">Класс ЖК</p>
                            <p class="advantage-quater__blue">Комфорт</p>
                        </div>
                        <div class="quarter-advantage__item advantage-quater">
                            <img class="advantage-quater__icon" src="../assets/img/advantages3.svg" alt="Этажность">
                            <p class="advantage-quater__grey">Этажность</p>
                            <p class="advantage-quater__blue">17</p>
                        </div>
                        <div class="quarter-advantage__item advantage-quater">
                            <img class="advantage-quater__icon" src="../assets/img/advantages4.svg" alt="Паркинг">
                            <p class="advantage-quater__grey">Паркинг</p>
                            <p class="advantage-quater__blue">Подземный</p>
                        </div>
                    </div>
               </div>
               <div class="quarter-right">
                   <no-ssr class="quarter-right__carousel">
                        <carousel :items="1" :loop="true" :nav="false">
                            <img src="../assets/img/quarter-img1.png" alt="slide 1">
                            <img src="../assets/img/quarter-img2.png" alt="slide 2">
                            <template slot="prev">
                                <span class="prev">
                                    <img src="../assets/img/prev-arrow.svg" alt="prev">
                                </span>
                            </template>
                            <template slot="next">
                                <span class="next">
                                    <img src="../assets/img/next-arrow.svg" alt="next">
                                </span>
                            </template>
                        </carousel>
                    </no-ssr>
               </div>
           </div>
            </div>
        </div>
    </div>
</template>
<script>
</script>
<style lang="scss">
    ._container{
        max-width: 73%;
        margin: 0 auto;
        @media screen and (max-width: 1600px){
            max-width: 85%;
        }
    }
    .quarter-container{
        margin-left: auto;
        width: 87%;
        @media screen and (max-width: 1600px){
            width: 92%;
        }
        .quar-wr{
            margin-left: auto;
            width: 87%;
            @media screen and (max-width: 1600px){
               width: 92%;
            }
            //  @media screen and (max-width: 1270px){
            //     padding: 0px 0px 0px 100px;
            // }
            // @media screen and (max-width: 960px){
            //     padding: 0px 0px 0px 50px;
            // }
            //  @media screen and (max-width: 560px){
            //     padding: 0px 0px 0px 25px;
            // }
        }
    }
    .quarter-three{
         .owl-carousel .owl-item img{
            width: 98% !important;
            max-height: 540px !important;
            @media screen and (max-width: 1600px){
                  max-height: 470px !important;
            }
            @media screen and (max-width: 1270px){
              max-height: 380px !important;
            }
            @media screen and (max-width: 960px){
              max-height: 300px !important;
              width: 100% !important;
            }
             @media screen and (max-width: 560px){
              max-height: 240px !important;
              width: 100% !important;
            }
              @media screen and (max-width: 400px){
                  max-height: 150px !important;
              }
            .owl-carousel .owl-item {
                 @media screen and (max-width: 960px){
                    margin: 0px 12px;
                 }
                 @media screen and (max-width: 560px){
                    max-height: 150px;
                 }
            }
        }
         .owl-stage {
            right: 150px !important;
            @media screen and (max-width: 960px){
              right: 200px !important;
            }
        }
    }
.quarter {
    padding: 250px 0px 0px;
    background: #F5F5F7;
    @media screen and (max-width: 960px){
        padding: 80px 0px 0px;
        background: #f9f9f9;
    }
     @media screen and (max-width: 560px){
         padding-bottom: 100px !important;
     }
     @media screen and (max-width: 400px){
         padding-bottom: 0px !important;
     }
    .quarter-about {
         font-family: "Geometria-Bold";
        font-weight: 800;
        font-size: 18px;
        line-height: 150%;
        letter-spacing: -0.03em;
        color: #0B315E;
        margin-bottom: 20px;
        @media screen and (max-width: 960px){
            font-size: 16px;
            margin-bottom: 15px;
        }
    }
    .quarter-header {
        font-weight: 600;
        font-size: 72px;
        line-height: 110%;
        letter-spacing: -0.03em;
        color: #0B315E;
        max-width: 800px;
        margin-bottom: 73px;
       font-family: "Aver-Demi";

       @media screen and (max-width: 1600px){
            font-size: 60px;
        }
         @media screen and (max-width: 960px){
            font-size: 48px;
            max-width: 400px;
            margin-bottom: 40px;
         }
          @media screen and (max-width: 768px){
                font-size: 36px;
                max-width: 300px;
                margin-bottom: 30px;
            }
        span{
            color: #6544FB;
        }
    }
    .quarter-wrapper {
        display: flex;
        @media screen and (max-width: 960px){
            flex-direction: column;
        }
    }
    .quarter-left {
        width: 35%;
        @media screen and (max-width: 1600px){
            width: 40%;
        }
        @media screen and (max-width: 1270px){
            margin-right: 30px;
        }
        @media screen and (max-width: 960px){
            width: 100%;
            margin-right: 0px;
            margin-bottom: 30px;
        }
    }
    .quarter-info {
        font-size: 18px;
        line-height: 170%;
        letter-spacing: -0.03em;
        color: #0B315E;
        max-width: 440px;
        @media screen and (max-width: 960px){
            max-width: 80%;
            font-size: 16px;
            line-height: 150%;
        }
    }
    .quarter-advantages {
        display: flex;
        justify-content: space-between;
         max-width: 440px;
        @media screen and (max-width: 560px){
            display: none;
        }
    }
    .quarter-advantage {

            // .quarter-advantage__item

            &__item {
            }
    }
    .advantage-quater {
            margin-top: 64px;
            // .advantage-quater__icon

            &__icon {
                margin-bottom: 30px;
            }

            // .advantage-quater__grey

            &__grey {
                font-size: 12px;
                line-height: 150%;
                color: #A1A6AA;
            }

            // .advantage-quater__blue

            &__blue {
                font-size: 12px;
                line-height: 150%;
                color: #0B315E;
            }
    }
    .quarter-right {
        width: 65%;
        margin-top: -70px;
        position: relative;
        @media screen and (max-width: 1600px){
            margin-top: -30px;
            width: 60%;
        }
         @media screen and (max-width: 960px){
             width: 100%;
             margin-top: 30px;
         }
    }

    .owl-dots{
        display: none;
        @media screen and (max-width: 560px){
            display: block;
            text-align: right;
            transform: translateY(20px);
            margin-right: 20px;
        }
         @media screen and (max-width: 400px){
            transform: translateY(-100px);
         }
    }
    .owl-theme .owl-dots .owl-dot.active span{
        background: #6544FB;
    }
   .owl-carousel .owl-stage:after{
          @media screen and (max-width: 960px){
              display: none;
          }
   }
   .owl-carousel{
       @media screen and (max-width: 960px){
            height: 700px;
        }
         @media screen and (max-width: 768px){
            height: 500px;
        }
         @media screen and (max-width: 560px){
            height: 350px;
        }
   }
    .carousel-navigation{
        display: flex;
    }
    .quarter-right .prev{
          position: absolute;
            bottom: 0px;
            left: 0px;
            top: unset;
            z-index: 9;
             @media screen and (max-width: 400px){
                 bottom: 115px !important;
             }
               img{
                @media screen and (max-width: 960px){
                    width: 50px;
                    height: 50px;
                }
                  @media screen and (max-width: 560px){
                    bottom: -30px;
                }
                
            }
    }
     .quarter-right .next{
          position: absolute;
            bottom: 0px;
            left: 95px;
            z-index: 9;
            top: unset;
            @media screen and (max-width: 960px){
                left: 50px;
            }
            @media screen and (max-width: 560px){
                bottom: 0px;
            }
             @media screen and (max-width: 400px){
                 bottom: 115px !important;
             }
            img{
                @media screen and (max-width: 960px){
                    width: 50px;
                    height: 50px;
                }
            }

     }
    .quarter-right .prev,
    .quarter-right .next{
        cursor: pointer;
        position: absolute;
    }
}

</style>
