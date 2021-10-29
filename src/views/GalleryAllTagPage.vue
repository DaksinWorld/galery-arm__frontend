<template>
  <div v-if="data[id-1]"  class="gallery-style-class container" id="gallery">
    <div class="images">
      <img :class="{none: id === 1}" class="m" src="../assets/left.svg" alt="left" @click="navigateMinusOne">
      <img id="image" class="mainPhoto" :src="`https://quiet-basin-40455.herokuapp.com${data[id-1].image.url}`" alt="image">
      <img v-if="data.length !== id" class="m" src="../assets/right.svg" alt="right" @click="navigatePlusOne">
      <div class="description" id="descriptionDown">
        <h3 class="mt-100px" v-if="data[id-1].isAvailable">
          this work is part of the "<bold style="font-weight: 500">{{ data[id - 1].tags }}</bold>" series
        </h3>
        <h3 style="margin-top: 30px" v-if="data[id-1].description">{{ data[id-1].description }}</h3>
      </div>
      <div class="information">
      <!--Name-->
      <h3 class="bold">{{ data[id - 1].name }}</h3>
      <!--Created Year-->
      <h3>{{ data[id - 1].createdYear }}</h3>
      <!--Is print available-->
      <h3 v-if="data[id-1].isAvailable" style="font-weight: 500">PRINT AVAILABLE</h3>
      <h3 v-else style="font-weight: 500">PRINT IS NOT AVAILABLE</h3>
      <!--Edition-->
      <h3 v-if="data[id-1].OpenOrLimited"><span style="font-weight: 500">LIMITED EDITION OF</span> {{ data[id - 1].currentCirculation }}
        AP</h3>
      <h3 v-else style="font-weight: 500">OPEN EDITION</h3>
      <h3><span class="bold font-6">SIZE</span> {{ data[id - 1].size }}</h3>
      <button v-if="data[id-1].isAvailable" class="buy-print">
        Buy Print
      </button>
      <div id="descriptionRight">
        <h3 class="mt-100px" v-if="data[id-1].isAvailable && data[id-1].tags">
          this work is part of the "<router-link :to="`/${data[id-1].tags}`" class="bold">{{ data[id - 1].tags }}</router-link>" series
        </h3>
        <h3 v-if="data[id-1].description">{{ data[id-1].description }}</h3>
      </div>
    </div>
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
        setTimeout(() => {
          let photo = document.getElementById('image')
          let gallery = document.getElementById('gallery')
          let descriptionRight = document.getElementById('descriptionRight')
          let description = document.getElementById('descriptionDown')

          console.log(photo.width)

          if(photo.width > 1200) {
            descriptionRight.style.display = 'none'
            gallery.classList.add('gallery-class-one-element')
          } else {
            gallery.classList.add('gallery-class-two-element')
            description.remove()
          }
        },1000)
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
.none {
  opacity: 0;
}

.bold,  {
  font-weight: 600;
}

.font-6,h3, span {
  color: #666 !important;
}

.gallery-class-one-element {
  .images {
    display: grid;
    grid-template-areas:
        "d mainPhoto m info"
        ". description . info" !important;
    align-items: center;
    justify-content: left;
    .information {
      align-self: self-start;
    }
  }
}

.gallery-class-two-element {
  grid-template-columns: auto auto;
  .images {
    grid-template: "d mainPhoto m info" !important;
    .description {
      display: none;
    }
    .information {
      margin-left: 50px;
      align-self: start !important;
    }
  }
}

.gallery-style-class {
  display: grid;
  justify-content: center;
  width: 100%;
  .images {
    display: grid;
    align-items: center;
    justify-content: left;
    gap: 50px;
    .information {
      grid-area: info;
      justify-self: left;
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

    .mainPhoto {
      grid-area: mainPhoto;
      max-width: 1300px;
      width: 100%;
      max-height: 900px;
      object-fit: cover;
      margin: 0 !important;
    }

    .description {
      grid-area: description;
    }
    .m {
      margin: 10px;
    }

    .m:first-child {
      grid-area: d;
    }

    .m:last-child {
      grid-area: m;
    }
  }
}

@media screen and (max-width: 1760px) {
  .gallery-style-class {
    grid-template-columns: auto;
  }
}
</style>
