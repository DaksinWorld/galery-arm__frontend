<template>
  <div class="sidebar">
    <div class="sidebar-item" v-for="(s, i) in sidebar" :key="i">
      <router-link :to="`/${s.path}`">{{ s.name }}</router-link>
    </div>
    <div class="filter">
      <label @click="handleIsColored" v-if="isColoredPick" class="black">Colored</label>
      <label @click="handleIsColored" v-else>Colored</label>
      <label @click="handleIsNonColored" v-if="isNonColoredPick" class="black">B&W</label>
      <label @click="handleIsNonColored" v-else>B&W</label>
    </div>
  </div>
  <div class="menu" @click="isSidebarActive = false; isNavbarActive = false" v-if="isSidebarActive || isNavbarActive">
    <div class="sidebarMenu" v-if="isSidebarActive" >
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
    <div class="navbarMenu" v-if="isNavbarActive">
      <h2>
        <router-link to="/info/about">about</router-link>
      </h2>
      <h2>
        <router-link to="/i/allPhoto">Gallery</router-link>
      </h2>
      <h2>
        <router-link to="/info/prints">PRINTS</router-link>
      </h2>
      <h2>
        <router-link to="/info/workshop">WORKSHOP</router-link>
      </h2>
      <h2>
        <router-link to="/article">ARTICLES</router-link>
      </h2>
      <h2>
        <router-link to="/info/contact">CONTACT</router-link>
      </h2>
    </div>
  </div>
  <div class="footerBar">
    <div class="navigation">
      <img v-if="isSidebarActive" @click="isSidebarActive = !isSidebarActive" src="../assets/close.png" alt="close">
      <img v-else @click="isSidebarActive = !isSidebarActive; isNavbarActive = false" src="../assets/menu.png" alt="menu">
    </div>
    <div class="navigation">
      <img v-if="isNavbarActive" @click="isNavbarActive = !isNavbarActive" src="../assets/close.png" alt="close">
      <img v-else @click="isNavbarActive = !isNavbarActive; isSidebarActive = false" src="../assets/menu.png" alt="menu">
    </div>
  </div>
</template>
<script>
import { ref, watch} from "vue";

export default {
  emits: ['update:modelValue'],
  props: ['modelValue'],
  setup(_, {emit}) {
    const isColoredPick = ref(false)
    const isNonColoredPick = ref(false)
    const data = ref()
    const isSidebarActive = ref()
    const isNavbarActive = ref()

    const sidebar = ref({
      allPhoto: {
        name: "All Photo",
        path: "i/allPhoto"
      },
      PaperWork: {
        name: "Paper Work",
        path: "PaperWork"
      },
      Portal: {
        name: "Portal",
        path: "Portal"
      },
      Phlegm: {
        name: "Phlegm",
        path: "Phlegm"
      },
      Compact: {
        name: "Compact",
        path: "Compact"
      },
      Jellyfish: {
        name: "Jellyfish",
        path: "Jellyfish"
      },
      Series: {
        name: "Series",
        path: "Series"
      },
      Single: {
        name: "Single",
        path: "Single"
      },
    })

    const handleIsColored = () => {
      if (isColoredPick.value) {
        isColoredPick.value = false
        isNonColoredPick.value = false
        data.value = ''
      } else {
        isColoredPick.value = true
        isNonColoredPick.value = false
        data.value = 'Colored'
      }
    }

    const handleIsNonColored = () => {
      if (isNonColoredPick.value) {
        isNonColoredPick.value = false
        isColoredPick.value = false
        data.value = ''
      } else {
        isNonColoredPick.value = true
        isColoredPick.value = false
        data.value = 'BlackAndWhite'
      }
    }

    watch([data], values => {
      emit('update:modelValue', {
        data: values[0]
      })
    })

    return {
      isColoredPick,
      isNonColoredPick,
      sidebar,
      handleIsColored,
      handleIsNonColored,
      isSidebarActive,
      isNavbarActive,
    }
  }
}
</script>

<style lang="scss" scoped>
.sidebar {
  min-width: 100px;
  width: 11.5vw;
  display: flex;
  flex-direction:column

}

.footerBar {
  display: none;
  position: fixed;
  z-index: 1;
  bottom: 0;
  left: 0;
  height: 50px;
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
  bottom: 50px;
  z-index: 100;
  flex-direction: column;
  align-items: center;
  text-align:center;
  justify-content: center;
  .sidebarMenu{
    overflow-y: scroll;
    .sidebars {
      margin: 10px;
    }
  }
}

.sidebar-item {
  width: 100px;
  margin-right: 10px;
  display: flex;
  flex-direction: column;

  a {
    font-size: 1em !important;
    color: #666;
    line-height: 2em;
  }
}

label {
  margin: 18px 0;
  font-size: 15px;
  font-family: Montserrat !important;
}

label:first-child {
  margin-top: 22px;
}

.black {
  font-weight: 500;
  color: black;
}

.menu {
  display: none;
}

@media screen and(max-width: 768px) {
  .sidebar {
    display: none;
  }
  .footerBar {
    display: flex;
  }
  .menu {
    display: flex;
  }

  h2 > a {
    text-transform: uppercase;
  }

  a, label {
    color: black;
    margin: 10px !important;
    font-weight: 400;
    font-size: 20px !important;
  }
}

</style>
