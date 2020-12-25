<template>
  <div class="main-page">
      <Header />
      <Apartments />
      <ThreeQuarter />
      <ForestQuarter />
      <Map />
      <Coworking />
      <Advantages />
      <Infrastructure />
      <Interior />
      <Documentation />
      <Newsletter />
      <Footer />
      <a class="call-us" href="#"><img  src="../assets/img/tel.svg" alt="tel"></a>
  </div>
</template>

<script>
import "../assets/styles/index.scss"
import Coworking from '../components/Coworking.vue'
import Footer from '../components/Footer.vue'
import Infrastructure from '../components/Infrastructure.vue'
import $ from "jquery";

// var VueScrollTo = require('vue-scrollto');
//
// var Vue = require('vue');
// Vue.use(VueScrollTo)
//
// // You can also pass in the default options
// Vue.use(VueScrollTo, {
//   container: "body",
//   duration: 500,
//   easing: "ease",
//   offset: 0,
//   force: true,
//   cancelable: true,
//   onStart: false,
//   onDone: false,
//   onCancel: false,
//   x: false,
//   y: true
// })
export default {
  mounted: () => {

    $(document).ready(() => {
      $(() => {
        $.scrollify({
          section : ".example-classname",
        });
      });
      // $(() => {
      //   $.scrollify({
      //     section : ".quartal-scroll",
      //   });
      // });
    })
  },
  components: { Coworking, Infrastructure, Footer, }, }
</script>

<style lang="scss">
body{
  position: relative;
}
.documents-wrapper .owl-stage{
        @media screen and (max-width: 560px) {
          right: 20px;
          margin-top: 20px;
          margin-bottom: 40px;
          margin-left: 30px;
      }
    }
   .documents-wrapper .owl-theme .owl-dots{
     margin-top: 50px;
    }
  // ============ popup settings

    .vs-popup--title{
        display: none;
        background: transparent;
    }
    .vs-popup--content{
        padding: 0px !important;
    }
    .con-vs-popup .vs-popup{
        position: relative;
        margin: 0px;
        border-radius: 8px;
    }
    .vs-popup--close{
        margin-left: auto;
        background:  url(../assets/img/close-popup.svg) no-repeat !important;
        background-size: cover !important;
        width: 24px;
        height: 24px;
        border-radius: 50% !important;
    }
    .vs-popup--header{
        position: absolute !important;
        background: transparent !important;
        right: 20px;
        top: 20px;
    }
    .vs-popup--content{
        margin: 0px !important;
        width: 100% !important;
        border-radius: 8px !important;
    }

  .vs-input--input{
    border: none !important;
    border-radius: 0px !important;
    width: 100% !important;
    border-bottom: 1px solid #BDBDBD !important;
  }
  .feedback-form .vs-button--text{
    width: 80% !important;
  }
  .call-us{
    position: fixed;
    bottom: 40px;
    left: 60px;
    z-index: 999999;
  }
  .vs-button-primary.vs-button-filled:hover{
    box-shadow: unset !important;
  }
</style>
