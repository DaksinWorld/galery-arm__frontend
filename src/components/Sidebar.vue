<template>
  <div class="sidebar">
      <router-link to="/i/allPhoto" query>All Photo</router-link>
      <router-link to="/PaperWork">Paper work</router-link>
      <router-link to="/Portal">Portal</router-link>
      <router-link to="/Phlegm">Phlegm</router-link>
      <router-link to="/Compact">Compact</router-link>
      <router-link to="/Jellyfish">Jellyfish</router-link>
      <router-link to="/Skins">Skins</router-link>
      <router-link to="/Series">Series</router-link>
      <router-link to="/Single">Single</router-link>
      <router-link style="margin-top: 40px" to="/Colored">Colored</router-link>
      <router-link to="/BlackAndWhite">B&W</router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
    }
  },
}
</script>

<style lang="scss" scoped>
.sidebar {
  width: 140px;
  display: flex;
  flex-direction: column;
  a {
    font-size: 15px;
    color: #666;
    margin-bottom: 18px;
  }
}
</style>
