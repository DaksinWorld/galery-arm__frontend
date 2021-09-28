<template>
    <div class="container gallery" v-if="requests">
      <div class="elements">
        <div class="element" v-for="(gallery) in requests" :key="gallery.id">
          <img :src="`https://protected-plains-17913.herokuapp.com${gallery.image.url}`" alt="image">
        </div>
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
          let dataTag = data.tags
          return dataTag.toLowerCase().includes(route.params.id.toLowerCase())
        })
    )

    return {
      requests
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
