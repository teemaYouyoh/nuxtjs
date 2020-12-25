<template>
    <div class="footer">
        <div class="footer-mob">
           <div class="footer-mob__wrapper">
                <div class="footer-mob__left">
                    <p><span>Все права</span> защищены 2020.</p>
                </div>
                <div class="footer-mob__right">
                    <p>Телефон</p>
                    <a href="tel:+88005005005">8 800 500 500 5</a>
                </div>
           </div>
        </div>
        <div class="footer-container _container">
          <div class="footer-wrap">
              <div class="footer-left">
                  <p>Все права защищены 2020.</p>
                  <button id="btn-up-footer" class="btn-up">
                    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.75 17.8125V4.6875" stroke="#FCFCFC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M5.1875 11.25L11.75 4.6875L18.3125 11.25" stroke="#FCFCFC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    </button>
              </div>
              <div class="footer-right">
                  <a class="footer-right__faq" href="#">Faq</a>
                  <a class="footer-right__tel" href="tel:+88005005005">8 800 500 500 5</a>
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
        max-width: 80%;
    }
}

.footer {
    background: #F9F9F9;
     @media screen and (max-width: 560px){
         background: #fff;
     }
    .footer-wrap {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 40px 0px 60px;
        position: relative;
        @media screen and (max-width: 560px){
            flex-direction: column;
            align-items: flex-start;
            margin-top: 15px;
            padding-bottom: 30px;
        }
    }
    .footer-mob{
        display: none;
          @media screen and (max-width: 560px){
              display: block;
          }
    }
    .footer-mob__wrapper {
        display: flex;
        justify-content: space-between;
        width: 100%;
        background: #F2F9FF;
        padding: 20px;
        .footer-mob{
            	// .footer-mob__left

		&__left {
            p{
                font-weight: bold;
                font-size: 12px;
                line-height: 170%;
                letter-spacing: -0.03em;
                text-transform: uppercase;
                color: #0B315E;
                span{
                    display: block;
                }
            }
		}

		// .footer-mob__right

		&__right {
            text-align: right;
            p{
                font-size: 12px;
                line-height: 150%;
                letter-spacing: -0.03em;
                text-transform: uppercase;
                color: #6E7191;
                font-weight: 800;
            }
            a{
                font-size: 14px;
                line-height: 150%;
                display: flex;
                font-weight: 800;
                align-items: center;
                letter-spacing: -0.03em;
                text-transform: uppercase;
                color: #0B315E;
                text-decoration: none;
             }
		}
        }

}

    .footer-left {
        display: flex;
        align-items: center;
        margin-left: 70px;
        a{
            outline: none;
        }
        img{
            margin-right: 40px;
            width: 80px;
            height: 80px;
            @media screen and (max-width: 560px){
                border-radius: 50%;
                width: 40px;
                height: 40px;
            }
        }
        p{
            text-transform: uppercase;
            font-family: "Aver-Bold";
            font-weight: 800;
            font-size: 14px;
            line-height: 150%;
            @media screen and (max-width: 560px){
                display: none;
            }
        }
    }
    .footer-right {
        @media screen and (max-width: 560px){
                display: none;
            }
            a{
                outline: none;
                text-decoration: none;
            }
            // .footer-right__faq

            &__faq {
                 font-family: "Aver-Bold";
                font-weight: 800;
                font-size: 14px;
                line-height: 150%;
                letter-spacing: -0.03em;
                text-transform: uppercase;
                color: #0B315E;
                margin-right: 40px;
             }

            // .footer-right__tel

            &__tel {
                 font-family: "Aver-Bold";
                font-weight: 800;
                font-size: 14px;
                line-height: 150%;
                letter-spacing: -0.03em;
                text-transform: uppercase;
                color: #0B315E;
            }
    }
}
.btn-up{
      display: none;
      position: absolute;
      bottom: 20px;
      right: 10px;
      width: 80px;
      height: 80px;
      background: #6544FB;
      border: none;
      cursor: pointer;
      z-index: 9999999;
      @media(max-width: 768px){
        right: 0px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        display: block;
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
</style>
