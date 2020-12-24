<template>
  <div id="advantages" class="advantages">
    <div class="_container">
      <div class="advantages_wrapper d-flex jc-sb">
        <div class="left d-flex f-direc-column">
          <p class="subtitle">О КВАРТАЛЕ</p>
          <h3 class="title">Преимущества</h3>
          <img src="../assets/img/advantage2.png" class="advantages-pic left-pic" alt="advantages-pic">
        </div>
        <div class="right">
          <img src="../assets/img/advantage.png" class="advantages-pic right-pic" alt="advantages-pic">
        </div>
      </div>
            <no-ssr>
                <carousel class="adv-carousel" :items="1" :nav="false" :loop="true" :dots="false" :stagePadding="20">
                    <div class="adv-slide">
                        <div class="adv-photo">
                            <img src="../assets/img/preim.png" alt="slide 1">
                        </div>
                    </div>
                    <div class="adv-slide">
                        <div class="adv-photo">
                            <img src="../assets/img/preim.png" alt="slide 2">
                        </div>
                    </div>
                    <div class="adv-slide">
                        <div class="adv-photo">
                            <img src="../assets/img/preim.png" alt="slide 3">
                        </div>
                    </div>
                </carousel>
            </no-ssr>
    </div>

      <div class="additional">
        <div class="_container">
          <div class="additional-wrapper">
            <div class="card">
              <span class="title">Квартал</span>
              <span class="text">Собственный современный стадион площадью более 6 000 кв.м с трибунами, беговыми дорожками и футбольным полем.</span>
              <a href="#" class="details" @click="popupActivo=true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.75 11.7256H4.75" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M13.7002 5.70124L19.7502 11.7252L13.7002 17.7502" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>подробнее</span>
              </a>
            </div>
            <div class="card">
              <span class="title">Лобби</span>
              <span class="text">Безопасные, просторные входные группы, предусмотрены удобные колясочные, где можно оставить в том числе велосипеды и самокаты.</span>
              <a href="#" class="details">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.75 11.7256H4.75" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M13.7002 5.70124L19.7502 11.7252L13.7002 17.7502" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>подробнее</span>
              </a>
            </div>
            <div class="card">
              <span class="title">Квартира</span>
              <span class="text">В комплексе представлены комфортабельные одно, двух и трехкомнатные квартиры с хорошо продуманными и функциональными планировками.</span>
              <a href="#" class="details">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.75 11.7256H4.75" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M13.7002 5.70124L19.7502 11.7252L13.7002 17.7502" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>подробнее</span>
              </a>
            </div>
          </div>
      </div>
    </div>

    <vs-popup fullscreen  class="advantage-modal" :active.sync="popupActivo">
      <div class="kvartal">
<!--        <vs-icon icon-pack="material-icons" icon="close" class="vs-popup&#45;&#45;close vs-popup&#45;&#45;close&#45;&#45;icon" style="background: rgb(255, 255, 255) none repeat scroll 0% 0%;"></vs-icon>-->
        <div class="kvartal-wrapper d-flex jc-sb al-item-fl-st">
          <div class="kvartal-left">
            <p class="subtitle">подробнее</p>
            <h5 class="title">Квартал</h5>
          </div>
          <div class="kvartal-right">
            <img src="../assets/img/Modal-kvartal.png" alt="modal-pic" class="kvartal-picture">
            <div class="info">
              <p>Территория жилого комплекса Три Квартала создана как полноценное общественное пространство, где можно погулять с детьми, заняться спортом, посидеть с любимой книгой, провести время в кругу друзей. Вы можете найти для себя все необходимое, не покидая своего комплекса.</p>
              <p>50 ГА благоустроенной территории, которые вмещают в себя образовательные и детские площадки, велосипедные и беговые тропы, зоны для занятия йогой и спортом.</p>
              <p>Детские площадки на территории ЖК созданы для каждой возрастной группы детей, что позволяет играть без риска маленьким и в то же время не ограничивать потребностей более старших.</p>
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
  data(){
    return {
      popupActivo:false,
    }
  },
  mounted() {
      $(`.vs-popup--close--icon`).bind('click', () => {
        this.popupActivo = false;
      })
  },
  name: "Advantages"
}
</script>

<style scoped lang="scss">
.advantage-modal{
  .con-vs-popup{
    .vs-popup{
      max-width: 1920px;
      width: 100%;
      height: auto;
    }
  }

}
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


  .owl-stage{
      right: 70px;
    }
  .advantages{
    background: #6544FB;
    @media screen and (max-width: 960px){
      background: #fff;
    }
    .owl-dots{
      @media screen and (max-width: 960px){
          display: none;
      }
    }
    .adv-carousel{
      display: none;
       @media screen and (max-width: 960px){
          display: block;
      }
    }
    //padding-top: 205px;
    .advantages_wrapper{
      //max-height: 800px;
      .left{
        transform: translate(0, 292px);
        width: 48%;
        @media screen and (max-width: 960px){
          transform: unset;
        }
        .title{
        font-family: "Aver-Regular";
          font-style: normal;
          font-size: 72px;
          line-height: 110%;
          letter-spacing: -0.03em;
          color: #FFFFFF;
          padding-bottom: 150px;
          font-weight: 700;
          @media screen and (max-width: 1600px){
            font-size: 60px;
          }
           @media screen and (max-width: 960px){
                font-size: 48px;
                padding-bottom: 30px;
                color: #0B315E;
            }
          @media screen and (max-width: 768px){
                font-size: 36px;
            }
        }
        .subtitle{
          font-family: "Geometria-Bold";
          font-style: normal;
          font-size: 18px;
          line-height: 150%;
          display: flex;
          align-items: center;
          letter-spacing: -0.03em;
          color: #FFFFFF;
           @media screen and (max-width: 960px){
                color: #0B315E;
                padding-top: 70px;
                font-size: 16px;
                margin-bottom: 10px;
            }
        }
      }
      .right{
        transform: translate(0, 205px);
        width: 48%;
        .right-pic{
        }
      }
    }
  }
  .advantages-pic{
    height: auto;
    width: 100%;
    @media screen and (max-width: 960px){
      display: none;
    }
  }
.owl-dots{
  display: none;
}

  .additional{
    padding-bottom: 175px;
    padding-top: 400px;
    background-color: #F2F9FF;
    @media screen and (max-width: 960px){
      background: #fff;
      padding-top: 30px;
      padding-bottom: 40px;
    }
    .additional-wrapper{
      display: flex;
      justify-content: space-between;
        @media screen and (max-width: 960px){
          flex-direction: column;
        }
      .card:hover{
        cursor: pointer;
        background: #6544FB;
        box-shadow: 0px 81px 90px 7px rgba(0, 0, 0, 0.2);
        .details{
          color: #fff;

        }
        .card{
          color: #fff;
        }
      }
      .card{
        align-items: flex-start;
        width: 31%;
        min-height: 270px;
        display: flex;
        padding: 40px 40px 0;
        box-sizing: border-box;
        flex-direction: column;
        justify-content: flex-start;
        transition: 0.5s;
         @media screen and (max-width: 960px){
           width: 100%;
           min-height: unset;
           margin-bottom: 25px;
           padding: 0px 0px;
         }
        .title{
          margin-top: 0;
          font-family: "Aver-Regular";
          font-style: normal;
          font-weight: 800;
          font-size: 24px;
          line-height: 120%;
          /* identical to box height, or 29px */
          margin-bottom: 10px;
          letter-spacing: -0.03em;
          /* Темный */
          color: #0B315E;
        }
        .text{
          font-family: "Geometria", sans-serif;
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 145%;
          /* or 26px */
          letter-spacing: -0.03em;
          /* Темный */
          color: #0B315E;
        }
        .details{
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 25px;
          text-decoration: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #6544FB;
          @media screen and (max-width: 960px){
            background: transparent;
            width: unset;
            height: unset;
            border-radius: 0px;
          }
          span{
            display: none;
             @media screen and (max-width: 960px){
              display: block;
              font-size: 12px;
              line-height: 110%;
              letter-spacing: -0.03em;
              color: #6544FB;
              text-transform: uppercase;
              padding-bottom: 5px;
              border-bottom: 2px solid #6544FB;
            }
          }
          img{
            width: 20px;
            height: 20px;
          }
          svg{
            @media screen and (max-width: 960px){
              display: none;
            }
          }
        }
      }
    }
  }
   .additional .card:hover .title, .additional .card:hover .text, .additional .card:hover .details {
    color: white; }
   .additional .card:hover .details{
     background: #fff;
     margin-left: auto;
     margin-right: 10px;
     @media screen and (max-width: 960px){
        background: transparent;
     }
   }
  .additional .card:hover .details svg path{
    stroke: #6544FB;
  }
   .additional .card:hover .details span{
     color: #fff;
     padding-bottom: 20px;
   }

</style>
