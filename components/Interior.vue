<template>
    <div class="interior">
        <div class="interior-container">
             <h3 class="interior-header">
                Интерьерные решения для вашего удобства
            </h3>
             <no-ssr>
                <carousel class="сoworking-carousel"  :nav="false" :loop="true" :stagePadding="70" :responsive="{0:{items:1},560:{items:3}}">
                    <div class="interior-slide">
                        <img src="../assets/img/inre1.png" alt="slide 1">
                    </div>
                    <div class="interior-slide">
                        <img src="../assets/img/inre2.png" alt="slide 2">
                    </div>
                    <div class="interior-slide">
                        <img src="../assets/img/inre3.png" alt="slide 3">
                    </div>
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
</template>
<script>
</script>
<style lang="scss">
.interior {
    padding: 200px 0px 0px;
     @media screen and (max-width: 1600px){
         padding: 150px 0px 0px;
     }
      @media screen and (max-width: 960px){
          padding-top: 80px;
      }
       @media screen and (max-width: 560px){
           padding-bottom: 100px;
       }
    background: #F9F9F9;
    .owl-stage {
        right: 70px !important;
    }
    .owl-theme .owl-dots .owl-dot.active span{
        background: #6544FB;
    }
    .owl-theme .owl-dots{
        text-align: right;
        margin-right: 20px;
        margin-top: 15px;
        transform: translateY(35px);
    }
}
.interior-container {
       margin-left: auto;
    width: 87%;
    @media screen and (max-width: 1600px){
        width: 92%;
    }
}
.interior-header {
    font-weight: 800;
    font-size: 72px;
    line-height: 120%;
    letter-spacing: -0.03em;
    color: #0B315E;
    font-family: "Aver-Regular";
    margin-bottom: 30px;
    max-width: 800px;
    @media screen and (max-width: 1600px){
      font-size: 60px;
      max-width: 500px;
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
.interior-slide {
    width: 93%;
    img{
        width: 100%;
        object-fit: cover;
    }
}
 .prev{
          position: absolute;
            bottom: -50px;
            left: 0px;
            z-index: 9;
             display: none;
              @media screen and (max-width: 560px){
                  display: block;
              }
               img{
                @media screen and (max-width: 960px){
                    width: 50px;
                    height: 50px;
                    bottom: -50px;
                }
            }
    } 
    .next{
          position: absolute;
            bottom: -50px;
            left: 95px;
            z-index: 9;
            display: none;
            @media screen and (max-width: 960px){
                left: 50px;
            }
               @media screen and (max-width: 560px){
                  display: block;
              }
            img{
                @media screen and (max-width: 960px){
                    width: 50px;
                    height: 50px;
                    bottom: -50px;
                }
            }

     }
</style>
