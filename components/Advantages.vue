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
    </div>

      <div class="additional">
        <div class="_container">
          <div class="additional-wrapper">
            <div class="card">
              <span class="title">Квартал</span>
              <span class="text">Собственный современный стадион площадью более 6 000 кв.м с трибунами, беговыми дорожками и футбольным полем.</span>
              <a href="#" class="details">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.75 11.7256H4.75" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M13.7002 5.70124L19.7502 11.7252L13.7002 17.7502" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
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
              </a>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "Advantages"
}
</script>

<style scoped lang="scss">
  .advantages{
    background: #6544FB;
    @media screen and (max-width: 960px){
      background: #fff;
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
                padding-top: 100px;
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


  .additional{
    padding-bottom: 175px;
    padding-top: 400px;
    background-color: #F2F9FF;
    .additional-wrapper{
      display: flex;
      justify-content: space-between;
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
        .title{
          margin-top: 0;
          font-family: "Avenir-heavy", sans-serif;
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
          img{
            width: 20px;
            height: 20px;
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
   }
  .additional .card:hover .details svg path{
    stroke: #6544FB;
  }

</style>
