<template>
  <div>
    <div class="container">
      <Nav class="nav"/>
    </div>
    <div class="container2">
      <div class="layout">
        <router-view v-if="data" :requests="data"/>
      </div>
    </div>
    <footer-bar class="footer-bar"/>
  </div>
</template>
<script>
import Nav from '../components/Nav'
import {onMounted, ref} from "vue";
import {useStore} from "vuex";

export default {
  components: {
    Nav
  },
  setup() {
    const store = useStore()
    let data = ref()

    onMounted(async () => {
      await store.dispatch('getGallery')
      data.value = store.getters['requests']
    })

    return {
      data
    }
  }
}
</script>
<style lang="scss" scoped>
.container2 {
  width: 1200px;
  margin: 0 auto;
}
</style>
