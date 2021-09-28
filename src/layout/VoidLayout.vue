<template>
  <div>
    <div class="container">
      <Nav class="nav"/>
      <div class="layout">
        <router-view />
      </div>
    </div>
    <footer-bar class="footer-bar"/>
  </div>
</template>
<script>
import Nav from '../components/Nav'

export default {
  components: {
    Nav
  }
}
</script>
<style lang="scss" scoped>

</style>
