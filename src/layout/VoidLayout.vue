<template>
  <div>
    <div class="container">
      <Nav class="nav"/>
      <div class="layout">
        <router-view :requests="data"/>
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

</style>
