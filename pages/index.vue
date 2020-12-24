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
export default {
  components: { Coworking, Infrastructure, Footer, }, }
</script>

<style>

</style>
