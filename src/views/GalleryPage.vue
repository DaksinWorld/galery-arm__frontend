<template>
  <div v-if="data" class="gallery-style-class container">
    <div class="images">
      <img class="m" src="../assets/left.svg" alt="left" @click="navigateMinusOne">
      <img class="mainPhoto" :src="`http://localhost:1337${data.image.url}`" alt="image">
      <img class="m" src="../assets/right.svg" alt="right" @click="navigatePlusOne">
    </div>
    <div class="information">
      <h3 class="bold">{{data.name}}</h3>
      <h3>{{data.createdAt}}</h3>
      <h3 v-if="data.isAvailable">PRINT AVAILABLE</h3>
      <h3 v-else>PRINT IS NOT AVAILABLE</h3>
      <h3 v-if="data.OpenOrLimited">Limited Edition of {{data.currentCirculation}} AP</h3>
      <h3 v-else>Open Edition</h3>
      <h3>SIZE {{data.size}}</h3>
      <button v-if="data.isAvailable" class="buy-print">
        Buy Print
      </button>
      <h3 class="mt-100px" v-if="data.isAvailable">
        this work is part of the "{{data.tags}}"
      </h3>
      <h3>
        {{data.description}}
      </h3>
    </div>
  </div>
  {{requests}}
</template>

<script>
import {ref, onMounted} from 'vue'
import {useRoute, useRouter} from 'vue-router'
import {useStore} from 'vuex'

export default {
  setup(){
    const route = useRoute()
    const router = useRouter()
    const store = useStore()
    let data = ref()

    onMounted(async() => {
      await store.dispatch('getCurrentGalleryPhoto', route.params.id)
      data.value = store.getters['requests']
    })

    const navigateMinusOne = () => {
      let route = data.value.id - 1
      router.push(`/gallery-page/${route}`)
      setTimeout(() => {
        location.reload()
      }, 600)
    }

    const navigatePlusOne = () => {
      let route = data.value.id + 1
      router.push(`/gallery-page/${route}`)
      setTimeout(() => {
        location.reload()
      }, 600)
    }

    return {
      data,
      navigateMinusOne,
      navigatePlusOne
    }
  }
}
</script>

<style lang="scss" scoped>
  .gallery-style-class {
    display: grid;
    justify-items: center;
    grid-template-columns: auto;
    .images {
      display: grid;
      grid-template-columns: auto auto auto;
      align-items: center;
      .mainPhoto {
        max-width: 1300px;
        max-height: 900px;
        object-fit: cover;
        margin: 0 !important;
      }
      .m {
        margin: 5px;
      }
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

      .mt-100px {
        margin-top: 100px;
      }
    }
  }

  @media screen and (max-width: 1760px) {
    .gallery-style-class {
      grid-template-columns: auto;
      justify-items: center;
    }
  }
</style>
