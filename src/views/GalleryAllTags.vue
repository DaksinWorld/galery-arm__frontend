<template>
  <div class="container gallery" v-if="data">
    <div class="flexbin flexbin-margin">
      <a v-for="(gallery) in data" :key="gallery.id">
        <router-link v-slot="{navigate}" custom :to="{name: 'GalleryPage', params: {id: gallery.id}}">
          <img :src="`http://localhost:1337${gallery.image.url}`" alt="image" @click="navigate">
        </router-link>
      </a>
    </div>
  </div>
</template>

<script>
import {onMounted, ref} from 'vue'
import {useStore} from 'vuex'

export default {
  setup() {
    const store = useStore()
    const data = ref()

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
@import "~flexbin/flexbin.css";

</style>
