<template>
  <div class="container gallery" v-if="requests">
    <div class="flexbin flexbin-margin">
      <a v-for="(gallery) in requests" :key="gallery.id">
        <router-link v-slot="{navigate}" custom :to="{name: 'GalleryPage', params: {id: gallery.id}}">
          <img :src="`http://localhost:1337${gallery.image.url}`" alt="image" @click="navigate" :requests="requests">
        </router-link>
      </a>
    </div>
  </div>
</template>

<script>
import {onMounted, computed} from 'vue'
import {useRoute} from 'vue-router'
import {useStore} from 'vuex'

export default {
  setup(){
    const store = useStore()
    const route = useRoute()

    onMounted(async () => {
      await store.dispatch('getGallery')
    })

    const requests = computed(() => store.getters['requests']
        .filter(data => {
          if(route.params.id) {
            let dataTag = data.tags
            let result = dataTag.toLowerCase().includes(route.params.id.toLowerCase())
            return result
          }
          return data
        })
    )

    return {
      requests
    }
  }
}
</script>
<style lang="scss" scoped>
@import "~flexbin/flexbin.css";

.gallery {
  display: flex;
  flex-direction: row;
  .elements {
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    .element, img {
      height: 400px;
      object-fit: cover;
      background: #566666;
      border: 1px solid black;
    }
  }
}

@media screen and (max-width: 860px) {
  .element, img {

  }
}


</style>
