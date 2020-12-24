<template>
    <div class="header">
        <div class="header-container _container">
            <div class="header-wrap">
                  <div class="header-logo">
               <a href="#">
                    <img src="../assets/img/logo.svg" alt="logo">
                    <span>Три Квартала</span>
               </a>
           </div>
           <div class="header-menu">
               <nav>
                   <ul>
                       <li><a class="header-menu__current" href="#">о квартале</a></li>
                       <li><a href="#">Кварталы</a></li>
                       <li><a href="#">локация</a></li>
                       <li><a href="#">Преимущества</a></li>
                       <li><a href="#">инфраструктура</a></li>
                       <li><a href="#">контакты</a></li>
                   </ul>
               </nav>
           </div>
            </div>
           <div class="header-phone">
               <a class="header-phone__number" href="tel:+88005005005">8 800 500 500 5</a>
               <a class="header-phone__enter" href="#">вход</a>
           </div>
        </div>
    </div>
</template>

<style lang="scss">
    ._container{
        max-width: 73%;
        margin: 0 auto;
        @media screen and (max-width: 1600px){
            max-width: 80%;
        }
    }
    .header {
        background: rgba(249, 249, 249, 0.98);
        padding: 30px 0px;
        .header-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .header-wrap{
            display: flex;
            justify-content: space-between;
            width: 70%;
             @media screen and (max-width: 1600px){
              width: 75%;
            }
        }
        .header-logo {
                max-width: 160px;
                width: 100%; 
            @media screen and (max-width: 1600px){
               margin-right: 30px;
            }
            a{
                text-decoration: none;
                display: flex;
                img{
                    margin-right: 10px;
                }
                span{
                    font-family: "Geometria-Medium", sans-serif;
                    font-size: 16px;
                    line-height: 150%;
                    display: flex;
                    align-items: center;
                    letter-spacing: -0.03em;
                    color: #0B315E;
                     
                }
            }
        }
        .header-menu {
           max-width: 760px;
            width: 100%;
            &__current{
                color: #6544FB !important;
                border-bottom: 3px solid #6544FB;
            }
             a{
                font-family: "Aver-Bold";
                text-decoration: none;
                letter-spacing: -0.03em;
                text-transform: uppercase;
                color: #0B315E;
                margin: 40px 0px;
                outline: none;
                padding-bottom: 10px;
                font-size: 14px;
            }
            nav{
                ul{
                    display: flex;
                    justify-content: space-between;
                }
            }
        }
        .header-phone {
            &__number{
                display: inline-block;
                background: #6544FB;
                border-radius: 60px;
                text-decoration: none;
                letter-spacing: -0.03em;
                text-transform: uppercase;
                color: #FFFFFF;
                font-weight: 500;
                padding: 12px 25px;
                font-size: 14px;
                font-family: "Aver-Regular", sans-serif;
                margin-right: 20px;
                &:hover{
                    background: #7e62fa;
                    transition: 0.3s;
                }
            }
            &__enter{
                text-decoration: none;
                font-family: "Aver-Bold";
                letter-spacing: -0.03em;
                text-transform: uppercase;
                color: #0B315E;
                font-size: 14px;
            }
        }

}

</style>
