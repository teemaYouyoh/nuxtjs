<template>
  <div class="main-page">
      <Header />
      <Apartments />
      <ThreeQuarter />
      <ForestQuarter />
      <Coworking />
      <Infrastructure />
      <Interior />
  </div>
</template>

<script>
import "../assets/styles/index.scss"
import Coworking from '../components/Coworking.vue'
import Infrastructure from '../components/Infrastructure.vue'
export default {
  components: { Coworking, Infrastructure },}
</script>

<style>

</style>
