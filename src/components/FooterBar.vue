<template>
  <div class="footer-bar">
    <div class="sidebarMenu">
      <div class="sidebars" v-for="(s, i) in sidebar" :key="i">
        <router-link :to="`/${s.path}`">{{ s.name }}</router-link>
      </div>
      <div class="filter">
        <label @click="handleIsColored" v-if="isColoredPick" class="black">Colored</label>
        <label @click="handleIsColored" v-else>Colored</label>
        <label @click="handleIsNonColored" v-if="isNonColoredPick" class="black">B&W</label>
        <label @click="handleIsNonColored" v-else>B&W</label>
      </div>
    </div>
    <div class="navbarMenu">
      <h2>
        <router-link to="/about">about</router-link>
      </h2>
      <h2>
        <router-link to="/gallery">Gallery</router-link>
      </h2>
      <h2>
        <router-link to="/prints">PRINTS</router-link>
      </h2>
      <h2>
        <router-link to="/workshop">WORKSHOP</router-link>
      </h2>
      <h2>
        <router-link to="/articles">ARTICLES</router-link>
      </h2>
      <h2>
        <router-link to="/contact">CONTACT</router-link>
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterBar"
}
</script>

<style lang="scss" scoped>
.sidebars {
  width: 100px;
  margin-right: 10px;
  display: flex;
  flex-direction: column;

  a {
    font-size: 15px;
    color: #666;
    margin-bottom: 18px;
    text-transform: uppercase;
  }
}

h2 {
  a {
    text-transform: uppercase;
  }
}

</style>
