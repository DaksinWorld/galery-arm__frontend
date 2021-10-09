<template>
  <div v-if="data[id-1]" class="gallery-style-class container">
    <div class="images">
      <img v-if="id !== 1" class="m" src="../assets/left.svg" alt="left" @click="navigateMinusOne">
      <img :src="`https://strapi-postgres22.herokuapp.com${data[id-1].image.url}`" alt="image">
      <img v-if="data.length !== id" class="m" src="../assets/right.svg" alt="right" @click="navigatePlusOne">
    </div>
    <div class="information">
      <h3 class="bold">{{data[id-1].name}}</h3>
      <h3>{{data[id-1].createdAt}}</h3>
      <h3 v-if="data[id-1].isAvailable">PRINT AVAILABLE</h3>
      <h3 v-else>PRINT IS NOT AVAILABLE</h3>
      <h3>{{data[id-1].edition}}</h3>
      <h3>SIZE {{data[id-1].size}}</h3>
      <button v-if="data[id-1].isAvailable" class="buy-print">
        Buy Print
      </button>
      <h3 class="mt-150px">
        this work is part of the "{{data[id-1].tags}}"
      </h3>
      <h3>
        {{data[id-1].description}}
      </h3>
    </div>
  </div>
</template>

<script>
import {ref, onMounted} from 'vue'
import {useRoute} from 'vue-router'
import {useRouter} from 'vue-router'
import {useStore} from 'vuex'
export default {
  setup(){
    const route = useRoute()
    const router = useRouter()
    const store = useStore()
    let data = ref([])
    let id = ref(parseInt(route.params.id))

    onMounted(async() => {
      await store.dispatch('getGallery', route.params.id)
      data.value = store.getters['requests']
      console.log(data.value[0])
      console.log(data.value)
    })

    const navigateMinusOne = () => {
      let id = parseInt(route.params.id, 10) - 1
      router.push(`/gallery-page/${id}`)
      setTimeout(() => {
        location.reload()
      },600)
    }

    const navigatePlusOne = () => {
      let id = parseInt(route.params.id, 10) + 1
      router.push(`/gallery-page/${id}`)
      setTimeout(() => {
        location.reload()
      },600)
    }

    return {
      data,
      navigateMinusOne,
      navigatePlusOne,
      id
    }
  }
}
</script>

<style lang="scss" scoped>
.gallery-style-class {
  display: grid;
  justify-items: center;
  grid-template-columns: auto;
  width: 100%;
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

    h2:first-child {
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
