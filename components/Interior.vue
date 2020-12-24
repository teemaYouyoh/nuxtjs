<template>
    <div class="interior">
        <div class="interior-container">
             <h3 class="interior-header">
                Интерьерные решения для вашего удобства
            </h3>
             <no-ssr>
                <carousel class="сoworking-carousel" :items="3" :nav="false" :loop="true" :stagePadding="70">
                    <div class="interior-slide">
                        <img src="../assets/img/inre1.png" alt="slide 1">
                    </div>
                    <div class="interior-slide">
                        <img src="../assets/img/inre2.png" alt="slide 2">
                    </div>
                    <div class="interior-slide">
                        <img src="../assets/img/inre3.png" alt="slide 3">
                    </div>
                </carousel>
            </no-ssr>
        </div>
    </div>
</template>
<script>
</script>
<style lang="scss">
.interior {
    padding: 200px 0px 100px;
    background: #F9F9F9;
    .owl-stage {
        right: 70px !important;
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
    font-family: "Aver-Medium";
    margin-bottom: 30px;
    max-width: 800px;
}
.interior-slide {
    width: 93%;
    img{
        width: 100%;
        object-fit: cover;
    }
}

</style>
