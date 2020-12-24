<template>
    <div class="infrastructure">
        <div class="infrastructure-container _container">
             <h3 class="infrastructure-header">Инфраструктура комплекса</h3>
             <div class="infrastructure-wrapper">
                <div class="infrastructure-left">
                    <div class="infrastructure-item">
                        <img class="infrastructure-item__back" src="../assets/img/inf1.png" alt="1">
                        <div class="infrastructure-item__info">
                           <h5>Государственные детские сады</h5>
                           <div class="info-infrastructure">
                               <p><img  src="../assets/img/car1.svg" alt="1"> <span> 5 мин.</span></p>
                               <p><img  src="../assets/img/rinn.svg" alt="1"> <span> 15 мин.</span></p>
                           </div>
                        </div>
                    </div>
                     <div class="infrastructure-item">
                        <img class="infrastructure-item__back" src="../assets/img/inf1.png" alt="2">
                        <div class="infrastructure-item__info">
                           <h5>Школа танцев, Футбольная секция.</h5>
                           <div class="info-infrastructure">
                               <p><img  src="../assets/img/car1.svg" alt="1"> <span> 5 мин.</span></p>
                               <p><img  src="../assets/img/rinn.svg" alt="1"> <span> 15 мин.</span></p>
                           </div>
                        </div>
                    </div>
                </div>
                <div class="infrastructure-right">
                     <div class="infrastructure-item">
                        <img class="infrastructure-item__back" src="../assets/img/inf1.png" alt="3">
                        <div class="infrastructure-item__info">
                           <h5>Школа с углубленным изучением отдельных предметов</h5>
                           <div class="info-infrastructure">
                               <p><img  src="../assets/img/car1.svg" alt="1"> <span> 5 мин.</span></p>
                               <p><img  src="../assets/img/rinn.svg" alt="1"> <span> 15 мин.</span></p>
                           </div>
                        </div>
                    </div>
                     <div class="infrastructure-item">
                        <img class="infrastructure-item__back" src="../assets/img/inf1.png" alt="3">
                        <div class="infrastructure-item__info">
                           <h5>Коворкинги</h5>
                           <div class="info-infrastructure">
                               <p><img  src="../assets/img/car1.svg" alt="1"> <span> 5 мин.</span></p>
                               <p><img  src="../assets/img/rinn.svg" alt="1"> <span> 15 мин.</span></p>
                           </div>
                        </div>
                    </div>
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
.infrastructure {
    padding: 150px 0px 80px;
}
.infrastructure-header {
     font-weight: 800;
    font-size: 72px;
    line-height: 110%;
    letter-spacing: -0.03em;
    color: #0B315E;
    max-width: 800px;
    font-family: "Aver-Medium";
    margin-bottom: 60px;
}
.infrastructure-wrapper {
    display: flex;
    justify-content: space-between;
}
.infrastructure-left {
    width: 49%;
}
.info-infrastructure{
    display: flex;
}
.infrastructure-item {
    position: relative;
    margin-bottom: 70px;
    &__back{
        width: 100%;
        object-fit: cover;
    }
    &__info{
        position: absolute;
        top: 30px;
        left: 30px;
        h5{
             font-family: "Aver-Bold";
            font-weight: 800;
            font-size: 36px;
            line-height: 120%;
            letter-spacing: -0.03em;
            color: #FFFFFF;
            max-width: 400px;
            margin-bottom: 30px;
        }
        p{
            margin-right: 10px;
            font-weight: 500;
            font-size: 14px;
            line-height: 17px;
            color: #0B315E;
            border-radius: 8px;
            background: #FFFFFF;
            border-radius: 43px;
            padding: 7px;
            display: flex;
            align-items: center;
            justify-content: center;
            img{
                margin-right: 5px;
            }
        }
    }
}
.infrastructure-right {
    margin-top: 170px;
    width: 49%;
}

</style>
