<template>
  <div class="footer-bar">
    <div v-if="isNavbarActive" class="navbar" @click="isNavbarActive = false">
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
    <div v-if="isSidebarActive" class="side" @click="isSidebarActive = false">
      <router-link to="/AllPhoto">All Photo</router-link>
      <router-link to="/PaperWork">Paper work</router-link>
      <router-link to="/Portal">Portal</router-link>
      <router-link to="/Phlegm">Phlegm</router-link>
      <router-link to="/Compact">Compact</router-link>
      <router-link to="/Jellyfish">Jellyfish</router-link>
      <router-link to="/Skins">Skins</router-link>
      <router-link to="/Series">Series</router-link>
      <router-link to="/Single">Single</router-link>
    </div>
    <div class="footer">
      <div>
        <img @click="isNavbarActive = true; isSidebarActive = false" v-if="!isNavbarActive" src="../assets/menu.png"
             alt="menu">
        <img @click="isNavbarActive = false" v-else src="../assets/close.png" alt="close">
      </div>

      <h2>ALL PHOTO</h2>
      <div>
        <img @click="isSidebarActive = true; isNavbarActive = false" v-if="!isSidebarActive" src="../assets/menu.png"
             alt="menu">
        <img @click="isSidebarActive = false" v-else src="../assets/close.png" alt="close">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isNavbarActive: false,
      isSidebarActive: false
    }
  },
  methods: {
    closeNavBar() {
      this.isNavbarActive = true;
    },
    closeSideBar() {
      this.isNavbarActive = true;
    },
  }
}
</script>

<style lang="scss" scoped>
h2 {
  a {
    color: #666666;
  }
}

a {
  color: #666666;
}

.footer-bar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  .navbar {
    display: flex;
    flex-direction: column;
    background: rgba(102, 102, 102, 0.7);
    height: 100%;
    align-items: center;
    justify-content: center;
    h2 {
      margin-bottom: 30px;
      text-transform: uppercase;
      a {
        color: white;
      }
    }
  }

  .side {
    display: flex;
    flex-direction: column;
    background: rgba(102, 102, 102, 0.7);
    height: 100%;
    align-items: center;
    justify-content: center;
    a{
      margin-bottom: 30px;
      text-transform: uppercase;
      color: white;
      font-size: 20px;
    }
  }

  .footer {
    position: absolute;
    bottom: 0;
    background: #666;
    left: 0;
    width: 100%;
    height: 99px;
    display: grid;
    grid-template-columns: auto auto auto;
    align-items: center;
    justify-content: space-around;

    h2 {
      color: white;
    }
  }
}
</style>
