<template>
   <div class="apartments">
       <div class="apartments-slider">
           <p>01</p>
           <p class="apartments-slider__current">02</p>
           <p>03</p>
           <p>04</p>
       </div>
       <div class="apartments_container _container">
           <div class="apartments-info">
            <p class="apartments-info__rate">ЖК 3 Квартала</p>
            <h1 class="apartments-info__price">Квартиры 4,5 млн за 42 м <sup>2</sup> </h1>
            <p class="apartments-info__distance">10 минут  от метро</p>
            <ul class="apartments-info__list">
                <li><img src="../assets/img/li-point1.svg" alt="Домодедовская"><span>Домодедовская, Зябликов</span></li>
                <li><img src="../assets/img/li-point2.svg" alt="Красногвардейская"> <span>Красногвардейская</span></li>
            </ul>
           </div>
           <div class="apartments-blocks">
               <div class="apartments-blocks__item apartments-blocks__green">
                   <img src="../assets/img/home-icon.svg" alt="Благоустроенная территория ">
                   <h4>50 <span>га.</span></h4>
                   <p>Благоустроенная территория </p>
               </div>
                <div class="apartments-blocks__item apartments-blocks__blue">
                   <img src="../assets/img/heart-icon.svg" alt="Благоустроенная территория ">
                   <h4>3.5 <span>га.</span></h4>
                   <p>Cчастливых семей.</p>
               </div>
           </div>
       </div>
   </div>
</template>

<style lang="scss">
sup{
    vertical-align: super;
    font-size: smaller;
}
.apartments {
   position: relative;
    background: rgba(249, 249, 249, 0.98) url(../assets/img/appartment.png) no-repeat bottom right;
    background-size: 61%;
    padding: 100px 0px 336px;
     @media screen and (max-width: 1600px){
         padding-bottom: 150px;
     }
     @media screen and (max-width: 560px){
        background: rgba(249, 249, 249, 0.98) url(../assets/img/bg-mob.png) no-repeat bottom right;
        background-size: cover;
     }

    .apartments-slider {
      position: absolute;
        top: 41%;
        left: 4%;
        display: none;
        transform: translate(50%, -50%);
         @media screen and (max-width: 1600px){
           left: 0%;
        }
        // .partments-slider__current

            &__current {
                font-weight: 900;
                font-size: 48px;
                line-height: 150%;
                letter-spacing: -0.03em;
                color: #0B315E;
                 @media screen and (max-width: 1600px){
                    font-size: 32px;
                }
            }
    }
     .apartments-blocks {
            display: flex;
            position: absolute;
            bottom: 0px;
            left: 56%;
            transform: translate(-50%, 0%);
            @media screen and (max-width: 560px){
                left: 50%;
            }
            &__green{
                background: #00BA88;
                margin-right: 13px;
                @media screen and (max-width: 560px){
                    margin-right: 0px;
                }
            }
            &__blue{
                background: #0B315E;
            }
		// .apartments-blocks__item

            &__item {
                max-width: 207px;
                padding: 20px;
                @media screen and (max-width: 560px){
                    padding: 15px;
                    max-width: 145px;
                }
                img{
                    margin-bottom: 15px;
                }
                h4{
                    font-weight: 800;
                    font-size: 48px;
                    line-height: 150%;
                    letter-spacing: -0.03em;
                    color: #FFFFFF;
                    margin-bottom: 10px;
                    @media screen and (max-width: 1600px){
                        font-size: 40px;
                    }
                     @media screen and (max-width: 768px){
                         font-size: 36px;
                        line-height: 49px;
                     }
                     span{
                         font-size: 24px;
                         line-height: 150%;
                     }
                }
                p{
                    font-weight: 800;
                    font-size: 18px;
                    line-height: 150%;
                    letter-spacing: -0.03em;
                    color: #FFFFFF;
                     @media screen and (max-width: 768px){
                         font-size: 14px;
                     }
                }
            }
    }

}
.apartments-slider {
     @media screen and (max-width: 960px){
         display: none;
     }
    p{
        font-weight: 800;
        font-size: 24px;
        line-height: 150%;
        display: flex;
        align-items: center;
        letter-spacing: -0.03em;
        color: #BDBDBD;
        margin-bottom: 40px;
         font-family: "Aver-Bold";
          @media screen and (max-width: 1600px){
            font-size: 18px;
            margin-bottom: 25px;
        }
    }
}


    ._container{
        max-width: 73%;
        margin: 0 auto;
        @media screen and (max-width: 1600px){
            max-width: 80%;
        }
    }
.apartments-info {
    padding-top: 188px;
    @media screen and (max-width: 1600px){
         padding-top: 130px;
    }
    @media screen and (max-width: 960px){
        padding-bottom: 100px;
    }
    @media screen and (max-width: 560px){
        padding-top: 100px;
    }
		// .apartments-info__rate

		&__rate {
            font-weight: 800;
            font-size: 18px;
            line-height: 150%;
            letter-spacing: -0.03em;
            color: #14142B;
            font-family: "Geometria-Medium", sans-serif;
            margin-bottom: 30px;
            @media screen and (max-width: 768px){
                display: none;
            }
		}

		// .apartments-info__price

		&__price {
             font-family: "Avenir-heavy";
             font-weight: 600;
            font-size: 72px;
            line-height: 110%;
            letter-spacing: -0.03em;
            color: #0B315E;
            max-width: 650px;
            margin-bottom: 43px;
            @media screen and (max-width: 1600px){
               font-size: 60px;
               max-width: 550px;
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
		}

		// .apartments-info__distance

		&__distance {
            font-size: 24px;
            line-height: 150%;
            letter-spacing: -0.03em;
            color: #14142B;
             font-family: "Geometria-Medium", sans-serif;
             margin-bottom: 13px;
            @media screen and (max-width: 768px){
                font-size: 18px;
                line-height: 150%;
                margin-bottom: 10px;
            }
		}

		// .apartments-info__list

		&__list {
            li{
                 font-family: "Geometria-Bold";
                display: flex;
                align-items: center;
                font-size: 18px;
                line-height: 150%;
                color: #0B315E;
                margin-bottom: 10px;
                @media screen and (max-width: 768px){
                    font-size: 14px;
                    margin-bottom: 5px;
                }
                img{
                    margin-right: 15px;
                    @media screen and (max-width: 768px){
                        margin-right: 10px;
                    }
                }
            }
        }
}

</style>
