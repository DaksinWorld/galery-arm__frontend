<template>
  <div v-if="requests[id-1]" class="gallery-style-class container" id="gallery">
    <div class="images">
      <img :class="{none: id === 1}" class="m" src="../assets/left.svg" alt="left" @click="navigateMinusOne">
      <img id="photo" class="mainPhoto" :src="`https://quiet-basin-40455.herokuapp.com${requests[id-1].image.url}`" alt="image">
      <img v-if="requests.length !== id" class="m" src="../assets/right.svg" alt="right" @click="navigatePlusOne">
      <div class="description" id="descriptionDown">
        <h3 class="mt-100px" v-if="requests[id-1].isAvailable">
          this work is part of the "<span class="bold">{{ requests[id - 1].tags }}</span>"
        </h3>
        <h3 style="margin-top: 30px" v-if="requests[id-1].description">{{ requests[id-1].description }}</h3>
      </div>
      <div class="information">
        <h3 class="bold">{{ requests[id - 1].name }}</h3>
        <h3>{{ requests[id - 1].createdYear }}</h3>
        <h3 v-if="requests[id-1].isAvailable" style="font-weight: 500">PRINT AVAILABLE</h3>
        <h3 v-else style="font-weight: 500">PRINT IS NOT AVAILABLE</h3>
        <h3 v-if="requests[id-1].OpenOrLimited"><span style="font-weight: 500">LIMITED EDITION OF</span> {{ requests[id - 1].currentCirculation }}
          AP</h3>
        <h3 v-else style="font-weight: 500">Open Edition</h3>
        <h3><span class="bold font-6">SIZE</span> {{ requests[id - 1].size }}</h3>
        <button v-if="requests[id-1].isAvailable" class="buy-print">
          Buy Print
        </button>
        <div id="descriptionRight">
          <h3 v-if="requests[id-1].description">{{ requests[id-1].description }}</h3>
          <h3 class="mt-100px" v-if="requests[id-1].isAvailable">
            this work is part of the "<span class="bold">{{ requests[id - 1].tags }}</span>"
          </h3>
        </div>
      </div>
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

      let photo = document.getElementById('photo')
      let gallery = document.getElementById('gallery')
      let descriptionRight = document.getElementById('descriptionRight')
      let description = document.getElementById('descriptionDown')

      setTimeout(() => {
        if(photo.width > 1200) {
          descriptionRight.style.display = 'none'
          gallery.classList.add('gallery-class-one-element')
        } else {
          gallery.classList.add('gallery-class-two-element')
          description.remove()
        }
      },100)
    })

    const requests = computed(() => store.getters['requests']
        .filter(data => {
          if (tag.value) {
            let dataTag = data.tags
            return dataTag.toLowerCase().includes(tag.value[0].toLowerCase())
          }
          return data
        })
    )

    const navigateMinusOne = () => {
      let idi = id.value - 1
      router.push(`/gallery/${tag.value}_${idi}`)
      setTimeout(() => {
        location.reload()
      },100)
    }
    const navigatePlusOne = () => {
      let idi = id.value + 1
      router.push(`/gallery/${tag.value}_${idi}`)
      setTimeout(() => {
        location.reload()
      },100)
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
  grid-template-areas:
      'image info'
      'desc desc'
;
  .description {
    display: block;
    grid-area: desc;
  }
  .images {
    grid-area: image;
  }
  .information {
    grid-area: info;
  }
}

.gallery-class-two-element {
  grid-template-columns: auto auto;
  .images {
    grid-template: "d mainPhoto m" !important;
    .description {
      display: none;
    }
  }
}

.gallery-style-class {
  justify-content: center;
  display: grid;
  width: 100%;
  .images {
    display: grid;
    grid-template-areas:
        "d mainPhoto m"
        ". description ."
        ". information ." !important;
    align-items: center;
    justify-content: left;

    .information {
      grid-area: information;
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
