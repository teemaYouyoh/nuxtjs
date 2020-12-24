<template>
    <div class="coworking">
        <div class="coworking-container">
             <no-ssr>
                <carousel class="сoworking-carousel" :items="1" :nav="false" :loop="true" :stagePadding="70">
                    <div class="coworking-slide">
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
    </div>
</template>
<script>
</script>
<style lang="scss">
    .сoworking-carousel{
        position: relative;
    }
   .coworking {
      background: #F9F9F9;
      padding: 100px 0px 200px;
       .owl-stage {
            right: 70px !important;
        }
      .prev{
            position: absolute;
            bottom: -150px;
            left: 0px;
            z-index: 9;
            max-width: 95px;
            max-height: 95px;
            cursor: pointer;
        }
        .next{
            position: absolute;
            bottom: -150px;
            left: 95px;
            z-index: 9;
            max-width: 95px;
            cursor: pointer;
            max-height: 95px;
        }
       .coworking-container {
              margin-left: auto;
                width: 87%;
                @media screen and (max-width: 1600px){
                    width: 92%;
                }
        }
        .coworking-header {
            font-weight: 800;
            font-size: 72px;
            line-height: 110%;
            letter-spacing: -0.03em;
            color: #0B315E;
            max-width: 800px;
            font-family: "Aver-Medium";
            margin-bottom: 30px;
            span{
                display: block;
                color: #6544FB;
            }
        }
        .coworking-photo {
            width: 85%;
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
        }
        .owl-dots{
            display: none;
        }
}
</style>
