<template>
  <div v-if="data" class="gallery-style-class container">
    <img :src="`http://localhost:1337${data.image.url}`" alt="image">
    <div class="information">
      <h2 class="bold">{{data.name}}</h2>
      <h2>{{data.createdAt}}</h2>
      <h2 v-if="data.isAvailable">PRINT AVAILABLE</h2>
      <h2 v-else>PRINT IS NOT AVAILABLE</h2>
      <h2>{{data.edition}}</h2>
      <h2>SIZE {{data.size}}</h2>
      <button v-if="data.isAvailable" class="buy-print">
        Buy Print
      </button>
      <h2 class="mt-150px">
        this work is part of the "{{data.tags}}"
      </h2>
      <h2>
        {{data.description}}
      </h2>
    </div>
  </div>
</template>

<script>
import {ref, onMounted} from 'vue'
import {useRoute} from 'vue-router'
import {useStore} from 'vuex'

export default {
  setup(){
    const route = useRoute()
    const store = useStore()
    let data = ref()

    onMounted(async() => {
      await store.dispatch('getCurrentGalleryPhoto', route.params.id)
      data.value = store.getters['requests']
    })

    return {
      data
    }
  }
}
</script>

<style lang="scss" scoped>
  .gallery-style-class {
    display: grid;
    grid-template-columns: auto auto;
    img {
      max-width: 1290px;
      max-height: 800px;
      object-fit: cover;
    }
    .information {
      text-align: center;
      h2 {
        margin-top: 30px;
        color: #666666;
      }
      .bold {
        color: black;
      }
      h2:first-child{
        margin-top: 0;
      }
      .buy-print {
        background: #666;
        border-radius: 50px;
        color: white;
        border: none;
        padding: 13px 55px;
        margin-top: 30px;
        font-family: Montserrat;
        font-weight: 500;
        font-size: 20px;
      }

      .mt-150px {
        margin-top: 150px;
      }
    }
  }
</style>
