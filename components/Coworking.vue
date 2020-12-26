<template>
    <div class="coworking example-classname display">
        <div class="coworking-container">
             <no-ssr>
                <carousel class="сoworking-carousel" :items="1" :nav="false" :loop="true" :responsive="{0:{stagePadding:0},560:{stagePadding:140}}">
                    <div class="coworking-slide" @click="popupActivo=true">
                        <h3 class="coworking-header"><span>Coworking</span>не отходяот дома.</h3>
                        <div class="coworking-photo">
                            <img src="../assets/img/cow1.png" alt="slide 1">
                            <p class="coworking-text">Зона коворкинга будет располагаться на территории нашего жилого комплекса. В нем жильцы могут спокойно поработать или провести деловую встречу. Коворкинг вмещает в себя Комфортные рабочие места и кабинеты, чтобы сосредоточиться на своем проекте. Пространство с диванами и пуфами, где приятно поработать и провести встречу. При желании здесь можно организовать презентацию или просмотр фильма. </p>
                        </div>
                    </div>
                    <div class="coworking-slide">
                        <h3 class="coworking-header"><span>Планировки</span>с рабочей зоной!</h3>
                        <div class="coworking-photo">
                            <img src="../assets/img/cow2.png" alt="slide 2">
                            <p class="coworking-text">
                                В комплексе представлены комфортабельные одно, двух и трехкомнатные квартиры. Разумный подход к организации пространства и оформлению квартиры — залог отличного настроения всех обитателей вашего дома. Функциональные и продуманные планировочные решения квартир позволяют расположить кроме основных зон, рабочие кабинеты со звукоизоляционными стенами.
                            </p>
                        </div>
                    </div>
                     <div class="coworking-slide">
                        <h3 class="coworking-header"><span>Отделка</span>на ваш вкус!</h3>
                        <div class="coworking-photo">
                            <img src="../assets/img/cow3.png" alt="slide 3">
                            <p class="coworking-text">
                                Проектом предусмотрены секции, в которых все квартиры продаются с отделкой «под ключ», что позволяет с первого дня жить в комфортной атмосфере чистоты, тишины. Планировочные решения квартир и интерьерный дизайн продуманы до мелочей. Высококачественная отделка, реализуемая девелопером, может быть выполнена для Вас в классическом и современном стилях, в светлой и темной цветовых гаммах.
                            </p>
                        </div>
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

      <vs-popup fullscreen  class="advantage-modal" :active.sync="popupActivo">
        <div class="kvartal">
          <!--        <vs-icon icon-pack="material-icons" icon="close" class="vs-popup&#45;&#45;close vs-popup&#45;&#45;close&#45;&#45;icon" style="background: rgb(255, 255, 255) none repeat scroll 0% 0%;"></vs-icon>-->
          <div class="kvartal-wrapper d-flex jc-sb al-item-fl-st">
            <div class="kvartal-left">
              <p class="subtitle">подробнее</p>
              <h5 class="title">Каворкинг</h5>
            </div>
            <div class="kvartal-right">
              <img src="../assets/img/Modal-kvartal.png" alt="modal-pic" class="kvartal-picture">
              <div class="info">
                <p>Зона коворкинга будет располагаться на территории нашего жилого комплекса. В нем жильцы могут спокойно поработать или провести деловую встречу.</p>
                <p>Коворкинг вмещает в себя Комфортные рабочие места и кабинеты, чтобы сосредоточиться на своем проекте. Пространство с диванами и пуфами, где приятно поработать и провести встречу. При желании здесь можно организовать презентацию или просмотр фильма.</p>
                <p>А также в летнее время будет открыта просторная веранда -кроны деревьев над головой, быстрый Wi-Fi и розетки.</p>
              </div>


            </div>
          </div>
        </div>
      </vs-popup>
    </div>
</template>
<script>
import Vue from 'vue'
import { vsButton, vsSelect, vsPopup } from 'vuesax'
import 'vuesax/dist/vuesax.css'
import $ from "jquery"

Vue.use(vsButton)
Vue.use(vsSelect)
Vue.use(vsPopup)
export default {
  data() {
    return {
      popupActivo: false,
    }
  },
  mounted() {
    $(`.vs-popup--close--icon`).bind('click', () => {
      this.popupActivo = false;
    })
  },
}
</script>
<style lang="scss">

.kvartal{
  padding: 114px 140px;
  @media (max-width: 1200px) {
    padding: 76px 93px;
  }
  @media (max-width: 992px) {
    padding: 60px 78px;
  }
  @media (max-width: 576px) {
    padding: 30px 39px;
  }
  .kvartal-wrapper{
    @media(max-width: 992px){
      flex-direction: column;
    }
    .kvartal-left{
      width: 25%;
      @media(max-width: 1600px){
        width: 35%;
      }
      @media (max-width: 992px) {
        width: 100%;
        padding-bottom: 25px;
      }
      .subtitle{
        font-family: "Geometria-Bold";
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 150%;
        text-transform: uppercase;
        color: #0B315E;
        padding-bottom: 14px;
        @media (max-width: 1200px) {
          font-size: 16px;
        }
        @media (max-width: 576px) {
          padding-bottom: 7px;
          font-size: 12px;
        }
      }
      .title{
        font-family: "Aver-Heavy";
        font-style: normal;
        font-size: 72px;
        line-height: 110%;
        letter-spacing: -0.03em;
        color: #0B315E;
        @media (max-width: 1200px) {
          font-size: 50px;
        }
        @media (max-width: 576px) {
          font-size: 32px;
        }
      }
    }
    .kvartal-right{
      width: 70%;
      @media(max-width: 1600px){
        width: 60%;
      }
      @media (max-width: 992px) {
        width: 100%;
      }
      .kvartal-picture{
        max-width: 1170px;
        width: 100%;
        height: auto;
        padding-bottom: 62px;
        @media(max-width: 992px){
          padding-bottom: 31px;
        }
      }
      .info{
        p{
          padding-bottom: 17px;
          font-family: "Aver";
          font-style: normal;
          font-size: 22px;
          line-height: 170%;
          letter-spacing: -0.03em;
          color: #0B315E;
          @media (max-width: 576px) {
            font-size: 16px;
          }
        }
      }
    }
  }
}



    .coworking-slide{
        padding-left: 235px;
        @media screen and (max-width: 1600px){
            padding-left: 100px;
        }
         @media screen and (max-width: 960px){
            padding-left: 50px;
        }
         @media screen and (max-width: 560px){
            padding-left: 25px;
        }
    }
    .сoworking-carousel{
        position: relative;
    }
   .coworking {
      background: #F9F9F9;
      padding: 100px 0px 200px;
      @media screen and (max-width: 560px){
          padding: 60px 0px 70px;
          background: #F2F9FF;
      }
       .owl-stage {
            right: 140px !important;
            @media screen and (max-width: 560px){
                right: 0px !important;
            }
        }
      .prev{
            position: absolute;
            bottom: -150px;
            left: 200px;
            z-index: 9;
            max-width: 95px;
            max-height: 95px;
            top: unset;
            cursor: pointer;
             @media screen and (max-width: 1600px){
              left: 103px;
            }
            @media screen and (max-width: 960px){
              left: 54px;
              bottom: -100px;
            }
             @media screen and (max-width: 560px){
                 display: none;
             }
        }
        .next{
            position: absolute;
            bottom: -150px;
            left: 295px;
            z-index: 9;
            top: unset;
            max-width: 95px;
            cursor: pointer;
            max-height: 95px;
            @media screen and (max-width: 1600px){
              left: 196px;
            }
              @media screen and (max-width: 960px){
              left: 100px;
              bottom: -100px;
            }
             @media screen and (max-width: 560px){
                 display: none;
             }
        }
       .coworking-container {
              margin-left: auto;
                width: 100%;
                // @media screen and (max-width: 1600px){
                //     width: 92%;
                // }
        }
        .coworking-header {
            font-weight: 800;
            font-size: 72px;
            line-height: 110%;
            letter-spacing: -0.03em;
            color: #0B315E;
            max-width: 800px;
           font-family: "Aver-Demi";

            margin-bottom: 30px;
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
                display: block;
                color: #6544FB;
            }
        }
        .coworking-photo {
            width: 100%;
            img{
                width: 100%;
                object-fit: cover;
                margin-bottom: 40px;
            }
        }
        .coworking-text {
            font-size: 22px;
            line-height: 150%;
            color: #0B315E;
             @media screen and (max-width: 768px){
                 font-size: 16px;
                 line-height: 145%;
             }
        }
        .owl-dots{
            display: none;
        }
}
</style>
