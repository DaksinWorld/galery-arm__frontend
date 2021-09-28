<template>
  <div class="container gallery" v-if="data">
    <div class="elements">
      <div class="element" v-for="(gallery) in data" :key="gallery.id">
        <router-link v-slot="{navigate}" custom :to="{name: 'GalleryPage', params: {id: gallery.id}}">
          <img :src="`https://protected-plains-17913.herokuapp.com${gallery.image.url}`" alt="image" @click="navigate">
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {onMounted, ref} from 'vue'
import {useStore} from 'vuex'

export default {
  setup(){
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
