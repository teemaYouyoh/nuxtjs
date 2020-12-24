<template>
  <div id="contacts" class="newsletter">
    <button id="btn-up" class="btn-up">
      <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.75 17.8125V4.6875" stroke="#FCFCFC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M5.1875 11.25L11.75 4.6875L18.3125 11.25" stroke="#FCFCFC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
    <div class="_container">
      <div class="newsletter-wrapper d-flex f-direc-column al-item-center">
        <h6 class="title">РАССЫЛКА</h6>
        <div class="wrapper-for-bg d-flex f-direc-column al-item-center">
          <p class="info"><span>Будь в курсе</span> новостей
            подпишись на рассылку.</p>
          <div class="input-wrapper">
            <input id="email-input" type="email" placeholder="Ваш E-mail">
            <button class="send-email">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M21.7046 4.59154C22.0162 3.18588 20.709 1.91748 19.2937 2.32708L3.63713 6.88281L3.48604 6.93304C2.01645 7.48611 1.79097 9.53286 3.16744 10.3802L9.64297 14.3661L13.5387 20.8202L13.6263 20.9534C14.5395 22.2329 16.5618 21.923 17.0228 20.372L21.668 4.73251L21.7046 4.59154ZM19.7846 3.75323C20.0734 3.72222 20.3202 4.00312 20.2303 4.30473L15.585 19.9448L15.5545 20.0214C15.4093 20.3069 14.9985 20.336 14.823 20.0451L11.135 13.9361L16.3875 8.64975L16.4598 8.56539C16.6767 8.27106 16.6511 7.85447 16.3839 7.5891L16.2996 7.51676C16.0052 7.29988 15.5887 7.32548 15.3233 7.59263L10.078 12.8721L3.95374 9.10284L3.88762 9.05318C3.64979 8.83652 3.72984 8.41781 4.05573 8.32322L19.7117 3.76765L19.7846 3.75323Z" fill="white"/>
              </svg>
            </button>
          </div>
          <button class="subscribe-btn">Подписаться на рассылку</button>
          <a href="#" class="left-request">Оставить заявку</a>
          <p class="question-answers">Остались вопросы, звоните?</p>
          <p class="question-answers_media">Остались вопросы?</p>
          <a href="tel:+88005005005" class="phone-number">8 800 500 500 5</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "Newsletter"
}
</script>

<style scoped lang="scss">
  .newsletter{
    background-color: #F2F9FF;
    position: relative;
    @media screen and (max-width: 560px){
      background: #fff;
    }
    .btn-up{
      position: absolute;
      bottom: 0;
      right: 100px;
      width: 80px;
      height: 80px;
      background: #6544FB;
      border: none;
      cursor: pointer;
      @media(max-width: 768px){
        right: 50px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        display: none;
      }
      svg{
        width: 40px;
        height: 40px;
        @media (max-width: 768px) {
          width: 30px;
          height: 30px;
        }
      }
    }
    .newsletter-wrapper{
      padding-top: 176px;
      padding-bottom: 137px;
      @media(max-width: 768px){
        padding-top: 80px;
        padding-bottom: 30px;
      }
      @media (max-width: 576px) {
        align-items: flex-start;
      }

      .title{
        font-family: "Geometria-Bold";
        font-style: normal;
        font-weight: 800;
        font-size: 18px;
        line-height: 150%;
        display: flex;
        align-items: center;
        color: #0B315E;
        @media(max-width: 576px){
          font-size: 16px;
        }
      }
      .wrapper-for-bg{
        background: url("../assets/img/newsletters.png") center no-repeat;
        background-size: cover;
        @media (max-width: 768px) {
          background: transparent;
        }

      .info{
        font-family: "Aver-Medium";
        font-style: normal;
        font-weight: 800;
        font-size: 72px;
        line-height: 110%;
        text-align: center;
        letter-spacing: -0.03em;
        max-width: 1025px;
        color: #0B315E;
        margin: 32px 0;
        @media screen and (max-width: 1600px){
           font-size: 60px;
        }
        @media (max-width: 768px){
          font-size: 42px;
        }
        @media(max-width: 576px){
          font-size: 36px;
          margin: 12px 0;
          text-align: left;
        }
        span{
          color: #6544FB;
        }
      }
      .input-wrapper{
        position: relative;
        margin-bottom: 47px;
        @media (max-width: 992px) {
          margin-bottom: 32px;
        }
        @media (max-width: 576px) {
          width: 100%;
          margin-bottom: 12px;
        }
        input{
          border: 1px solid #6544FB;
          box-sizing: border-box;
          border-radius: 10px;
          background: #fff;
          height: 60px;
          width: 450px;
          padding: 18px 22px;
          font-family: "Aver-Medium";
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 150%;
          letter-spacing: -0.03em;
          color: #0B315E;
          @media (max-width: 576px) {
            width: 100%;
          }
        }
        .send-email{
          position: absolute;
          right: 0%;
          top: 50%;
          transform: translate(-5%, -50%);
          width: 54px;
          height: 54px;
          border-radius: 8px;
          background: #6544FB;
          border: none;
          cursor: pointer;
        }
      }
        .subscribe-btn{
          display: none;
          @media (max-width: 576px) {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 60px;
            font-family: "Aver-Bold";
            font-style: normal;
            font-weight: 800;
            font-size: 12px;
            line-height: 110%;
            background: #6544FB;

            /* Основной */
            border: 1px solid #6544FB;
            box-sizing: border-box;
            border-radius: 10px;
            /* or 13px */
            text-align: right;
            letter-spacing: -0.03em;
            text-transform: uppercase;

            /* Белый */
            color: #FFFFFF;
          }
        }

      .left-request
      {
        font-family: "Aver-Bold";
        font-style: normal;
        font-weight: 800;
        font-size: 12px;
        line-height: 110%;
        border-bottom: 3px solid #6544FB;
        padding-bottom: 5px;
        text-align: right;
        letter-spacing: -0.03em;
        text-transform: uppercase;
        text-decoration: none;
        color: #6544FB;
        @media (max-width: 576px) {
          display: none;
        }
      }

      .question-answers,
      .question-answers_media{
        padding-top: 54px;
        font-family: "Aver-Regular";
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 150%;

        /* identical to box height, or 21px */
        letter-spacing: -0.03em;

        /* Темный */
        color: #0B315E;
        @media(max-width: 576px){
          display: block;
          padding-top: 23px !important;
          text-align: left;
          width: 100%;
        }
      }
        question-answers_media{
          display: none;
        }
        .question-answers{
          @media(max-width: 576px){
            display: none;
          }
        }
      .phone-number{
        font-family: "Aver-Bold";
        font-style: normal;
        font-size: 24px;
        line-height: 150%;
        letter-spacing: -0.03em;
        text-transform: uppercase;
        text-align: center;
        /* Темный */
        text-decoration: none;
        color: #0B315E;
        @media (max-width: 576px) {
          text-align: left;
          width: 100%;
        }
      }
    }
    }
  }
</style>
