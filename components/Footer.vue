<template>
    <div class="footer">
        <div class="footer-container _container">
          <div class="footer-wrap">
              <div class="footer-left">
                  <a href="#"><img  src="../assets/img/tel.svg" alt="tel"></a>
                  <p>Все права защищены 2020.</p>
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
    .footer-wrap {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0px 0px 70px;
    }
    .footer-left {
        display: flex;
        align-items: center;
        a{
            outline: none;
        }
        img{
            margin-right: 40px;
            width: 80px;
            height: 80px;
        }
        p{
            text-transform: uppercase;
            font-family: "Aver-Bold";
            font-weight: 800;
            font-size: 14px;
            line-height: 150%;
        }
    }
    .footer-right {
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
</style>
