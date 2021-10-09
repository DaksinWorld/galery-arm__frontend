<template>
  <div v-if="requests[id-1]" class="gallery-style-class">
    <div class="images">
      <img v-if="id !== 1" class="m" src="../assets/left.svg" alt="left" @click="navigateMinusOne">
      <img class="mainPhoto" :src="`https://strapi-postgres22.herokuapp.com${requests[id-1].image.url}`" alt="image">
      <img v-if="requests.length !== id" class="m" src="../assets/right.svg" alt="right" @click="navigatePlusOne">
    </div>
    <div class="information">
      <h3 class="bold">{{ requests[id - 1].name }}</h3>
      <h3>{{ requests[id - 1].createdAt }}</h3>
      <h3 v-if="requests[id-1].isAvailable">PRINT AVAILABLE</h3>
      <h3 v-else>PRINT IS NOT AVAILABLE</h3>
      <h3 v-if="requests[id-1].OpenOrLimited">Limited Edition of {{ requests[id - 1].currentCirculation }}
        AP</h3>
      <h3 v-else>Open Edition</h3>
      <h3>SIZE {{ requests[id - 1].size }}</h3>
      <button v-if="requests[id-1].isAvailable" class="buy-print">
        Buy Print
      </button>
      <h3 class="mt-100px" v-if="requests[id-1].isAvailable">
        this work is part of the "{{ requests[id - 1].tags }}"
      </h3>
      <h3>
        {{ requests[id-1].description }}
      </h3>
    </div>
  </div>
</template>

<script>
import {computed, onMounted, ref} from 'vue'
import {useRoute, useRouter} from 'vue-router'
import {useStore} from 'vuex'

export default {
  setup() {
    const route = useRoute()
    const router = useRouter()
    const store = useStore()
    let data = ref()
    let routeId = ref(route.params.id)
    let tag = ref(routeId.value.match(/[a-zA-Z]+/gm))
    let id = ref(parseInt(routeId.value.match(/\d+/gm)[0], 10))

    onMounted(async () => {
      await store.dispatch('getGallery')
    })

    const requests = computed(() => store.getters['requests']
        .filter(data => {
          if (tag.value) {
            let dataTag = data.tags
            console.log(dataTag)
            console.log(dataTag)
            return dataTag.toLowerCase().includes(tag.value[0].toLowerCase())
          }
          return data
        })
    )

    const navigateMinusOne = () => {
      console.log(tag.value)
      console.log(id.value)
      router.push(`/gallery/${tag.value}_${id.value--}`)
    }
    const navigatePlusOne = () => {
      console.log(tag.value)
      console.log(id.value)
      router.push(`/gallery/${tag.value}_${id.value++}`)
    }

    return {
      data,
      routeId,
      tag,
      id,
      requests,
      navigatePlusOne,
      navigateMinusOne,
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
