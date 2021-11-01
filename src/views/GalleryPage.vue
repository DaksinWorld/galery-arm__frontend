<template>
  <div v-if="requests[id-1]" class="gallery-style-class container" id="gallery">
    <div class="images">
      <img :class="{none: id === 1}" class="m" src="../assets/left.svg" alt="left" @click="navigateMinusOne">
      <img id="image" class="mainPhoto" :src="`https://quiet-basin-40455.herokuapp.com${requests[id-1].image.url}`"
           alt="image">
      <img v-if="requests.length !== id" class="m" src="../assets/right.svg" alt="right" @click="navigatePlusOne">
      <div v-if="isActive" class="description" id="descriptionDown">
        <span class="image-text" v-if="requests[id-1].isAvailable">
          this work is part of the "
          <bold style="font-weight: 500">{{ requests[id - 1].tags }}</bold>
          " series
        </span>
        <span class="image-text" style="margin-top: 30px" v-if="requests[id-1].description">{{ requests[id - 1].description }}</span>
      </div>
      <div class="information" v-if="isActive">
        <!--Name-->
        <div class="h3">
          <span class="image-text bold">{{ requests[id - 1].name }}</span>
          <!--Created Year-->
          <span class="image-text">{{ requests[id - 1].createdYear }}</span>
          <!--Is print available-->
          <span class="image-text" v-if="!requests[id-1].isAvailable" style="font-weight: 500">SOLD OUT</span>
          <!--Edition-->
          <span class="image-text" v-if="requests[id-1].OpenOrLimited"><span style="font-weight: 500">LIMITED EDITION OF</span>
            {{ requests[id - 1].circulation }}
            AP</span>
          <span class="image-text" v-else style="font-weight: 500">OPEN EDITION</span>
          <span class="image-text">EDITION {{requests[id - 1].currentCirculation}}</span>
          <span class="image-text"><span class="bold font-6">SIZE</span> {{ requests[id - 1].size }}</span>
        </div>
        <div class="description-right" id="descriptionRight">
          <span class="image-text" v-if="requests[id-1].isAvailable && requests[id-1].tags">
            this work is part of the "
            <router-link :to="`/${requests[id-1].tags}`" class="bold">{{ requests[id - 1].tags }}</router-link>
            " series
          </span>
          <span class="image-text" v-if="requests[id-1].description">{{ requests[id - 1].description }}</span>
          <button v-if="requests[id-1].isAvailable" class="buy-print">
            Buy Print
          </button>
        </div>
      </div>
      <span class="image-text more" v-if="!isActive" @click="isActive = !isActive">Подробнее</span>
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
    let isActive = ref()
    let routeId = ref(route.params.id)
    let tag = ref(routeId.value.match(/[a-zA-Z]+/gm))
    let id = ref(parseInt(routeId.value.match(/\d+/gm)[0], 10))

    onMounted(async () => {
      document.body.style.display = 'none'
      setTimeout(() => {
        document.body.style.display = 'block'
      }, 1650)
      await store.dispatch('getGallery');

      setTimeout(() => {
        let gallery = document.querySelector('#gallery')
        let images = document.querySelector('.images')

        let id2 = id.value - 1

        if(window.innerWidth < 768 && requests.value[id2].image.width < 600) {
          isActive.value = false
          images.classList.add('moreInfo')
        } else {
          isActive.value = true
        }

        if (requests.value[id2].image.width > 1200) {
          gallery.classList.add('gallery-class-one-element')
        } else {
          gallery.classList.add('gallery-class-two-element')
        }


        // SWIPE
        document.addEventListener('touchstart', handleTouchStart, false);
        document.addEventListener('touchmove', handleTouchMove, false);

        var xDown = null;
        var yDown = null;

        //
        function handleTouchStart(evt) {
          xDown = evt.touches[0].clientX;
          yDown = evt.touches[0].clientY;
        }

        //
        function handleTouchMove(evt) {
          if (!xDown || !yDown) {
            return;
          }

          var xUp = evt.touches[0].clientX;
          var yUp = evt.touches[0].clientY;

          var xDiff = xDown - xUp;
          var yDiff = yDown - yUp;

          if (Math.abs(xDiff) > Math.abs(yDiff)) {/*most significant*/
            if (xDiff > 0) {
              if (requests.value.length !== id.value) {
                let idi = id.value + 1
                router.push(`/gallery/${tag.value}_${idi}`)
                setTimeout(() => {
                  location.reload()
                }, 100)
              }
            } else {
              if (id.value !== 1) {
                let idi = id.value - 1
                router.push(`/gallery/${tag.value}_${idi}`)
                setTimeout(() => {
                  location.reload()
                }, 100)
              }
            }
          }

          xDown = null;
          yDown = null;
        }
      }, 300)
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
      }, 100)
    }
    const navigatePlusOne = () => {
      let idi = id.value + 1
      router.push(`/gallery/${tag.value}_${idi}`)
      setTimeout(() => {
        location.reload()
      }, 100)
    }

    return {
      data,
      routeId,
      tag,
      id,
      requests,
      navigatePlusOne,
      navigateMinusOne,
      isActive
    }
  }
}
</script>

<style lang="scss" scoped>
@import "gallery";
</style>
