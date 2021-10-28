<template>
  <div class="sidebar">
    <router-link to="/article">All tags</router-link>
    <router-link to="/articles/AboutAss">About ass</router-link>
    <router-link to="/articles/AboutAssAndShit">About ass and shit</router-link>
    <router-link to="/articles/AmoutLive">Amout live</router-link>
    <router-link to="/articles/CompactHole">Compact hole</router-link>
    <router-link to="/articles/Jellyfish">Jellyfish in water</router-link>
    <router-link to="/articles/Skins">Skins of clash</router-link>
    <router-link to="/articles/Series">Series three hundred bucks</router-link>
    <router-link to="/articles/Single">My Single </router-link>
  </div>
  <div class="menu" @click="isSidebarActive = false;" v-if="isSidebarActive">
    <router-link to="/article">All tags</router-link>
    <router-link to="/articles/AboutAss">About ass</router-link>
    <router-link to="/articles/AboutAssAndShit">About ass and shit</router-link>
    <router-link to="/articles/AmoutLive">Amout live</router-link>
    <router-link to="/articles/CompactHole">Compact hole</router-link>
    <router-link to="/articles/Jellyfish">Jellyfish in water</router-link>
    <router-link to="/articles/Skins">Skins of clash</router-link>
    <router-link to="/articles/Series">Series three hundred bucks</router-link>
    <router-link to="/articles/Single">My Single </router-link>
    <div class="navbarMenu" v-if="isNavbarActive">
      <h2>
        <router-link to="/about">about</router-link>
      </h2>
      <h2>
        <router-link to="/i/allPhoto">Gallery</router-link>
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
  <div class="footerBar">
    <div class="navigation">
      <img v-if="isSidebarActive" @click="isSidebarActive = !isSidebarActive" src="../assets/close.png" alt="close">
      <img v-else @click="isSidebarActive = !isSidebarActive;" src="../assets/menu.png" alt="menu">
    </div>
  </div>
</template>

<script>
import {ref} from 'vue'

export default {
  setup(){
    let isSidebarActive = ref()

    return {
      isSidebarActive
    }
  }
}
</script>

<style lang="scss" scoped>
.sidebar {
  width: 234px;
  display: flex;
  flex-direction: column;
  a {
    font-size: 15px;
    color: #666;
    margin-bottom: 18px;
  }
}

.footerBar {
  display: none;
  position: fixed;
  bottom: 0;
  left: 0;
  height: 100px;
  right: 0;
  background: #666666;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}

.menu{
  position: fixed;
  background: rgba(102, 102, 102, 0.95);
  top: 0;
  right: 0;
  left: 0;
  bottom: 100px;
  z-index: 100;
  flex-direction: column;
  align-items: center;
  text-align:center;
  justify-content: center;
  .sidebarMenu{
    .sidebars {
      margin: 10px;
    }
  }
}

@media screen and (max-width: 768px) {
  .sidebar{
    display: none;
  }
  .menu, .footerBar {
    display: flex;
  }
  h2 > a {
    text-transform: uppercase;
  }

  a {
    color: black;
    margin: 10px !important;
    font-weight: 400;
    font-size: 20px !important;
  }
}
</style>
