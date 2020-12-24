<template>
    <div class="quarter quarter-three">
        <div class="quarter-container">
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
              max-height: unset !important;
              width: 100% !important;
            }
            .owl-carousel .owl-item {
                 @media screen and (max-width: 960px){
                    margin: 0px 12px;
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
    padding: 170px 0px 0px;
    background: #F5F5F7;
    @media screen and (max-width: 960px){
        padding: 80px 0px;
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
        margin-bottom: 35px;
       font-family: "Aver-Regular";
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
        width: 40%;
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
            margin-top: 50px;
            // .advantage-quater__icon

            &__icon {
                margin-bottom: 15px;
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
        width: 60%;
        position: relative;
         @media screen and (max-width: 960px){
             width: 100%;
         }
    }

    .owl-dots{
        display: none;
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
            z-index: 9;
               img{
                @media screen and (max-width: 960px){
                    width: 50px;
                    height: 50px;
                }
            }
    }
     .quarter-right .next{
          position: absolute;
            bottom: 0px;
            left: 95px;
            z-index: 9;
            @media screen and (max-width: 960px){
                left: 50px;
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
