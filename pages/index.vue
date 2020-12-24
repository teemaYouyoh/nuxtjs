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


  </div>
</template>

<script>
import "../assets/styles/index.scss"
import Coworking from '../components/Coworking.vue'
import Footer from '../components/Footer.vue'
import Infrastructure from '../components/Infrastructure.vue'
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
  components: { Coworking, Infrastructure, Footer, }, }
</script>

<style>

</style>
