<template>
  <div v-if="data[id-1]" class="gallery-style-class container" id="gallery">
    <div class="images">
      <img :class="{none: id === 1}" class="m" src="../assets/left.svg" alt="left" @click="navigateMinusOne">
      <img id="image" class="mainPhoto" :src="`https://quiet-basin-40455.herokuapp.com${data[id-1].image.url}`"
           alt="image">
      <img v-if="data.length !== id" class="m" src="../assets/right.svg" alt="right" @click="navigatePlusOne">
      <div v-if="isActive" class="description">
        <span class="image-text" v-if="data[id-1].isAvailable">
          this work is part of the "
          <bold style="font-weight: 500">{{ data[id - 1].tags }}</bold>
          " series
        </span>
        <span class="image-text" style="margin-top: 30px" v-if="data[id-1].description">{{
            data[id - 1].description
          }}</span>
      </div>
      <div class="information" v-if="isActive">
        <!--Name-->
        <div class="h3">
          <span class="image-text bold">{{ data[id - 1].name }}  {{ data[id - 1].createdYear }}</span>
          <!--Is print available-->
          <span class="image-text" v-if="!data[id-1].isAvailable" style="font-weight: 500">SOLD OUT</span>
          <!--Edition-->
          <span class="image-text" v-if="data[id-1].OpenOrLimited"><span
              style="font-weight: 500">LIMITED EDITION OF</span>
            {{ data[id - 1].circulation }}</span>
          <span class="image-text" v-else style="font-weight: 500">OPEN EDITION</span>
          <span class="image-text" style="font-weight: 500">EDITION {{ data[id - 1].currentCirculation }}</span>
          <span class="image-text"><span class="bold font-6">SIZE</span> {{ data[id - 1].size }}</span>
        </div>
        <div class="description-right"
        >
          <button v-if="data[id-1].isAvailable" class="buy-print">
          <a :href="data[id-1].url">Buy Print</a>
        </button>
          <span class="image-text" v-if="data[id-1].isAvailable && data[id-1].tags">
            this work is part of the "
            <router-link :to="`/${data[id-1].tags}`" class="bold">{{ data[id - 1].tags }}</router-link>
            " series
          </span>
          <span class="image-text" v-if="data[id-1].description">{{ data[id - 1].description }}</span>

        </div>
      </div>
      <span class="image-text more" v-if="!isActive" @click="isActive = !isActive">Learn More</span>
    </div>
    <div class="images2">
      <img :class="{none: id === 1}" class="m" src="../assets/left.svg" alt="left" @click="navigateMinusOne">
      <img id="image2" class="mainPhoto" :src="`https://quiet-basin-40455.herokuapp.com${data[id-1].image.url}`"
           alt="image">
      <img v-if="data.length !== id" class="m" src="../assets/right.svg" alt="right" @click="navigatePlusOne">
      <div v-if="isActive" class="description" id="descriptionDown">
        <span class="image-text" v-if="data[id-1].isAvailable">
          this work is part of the "
          <bold style="font-weight: 500">{{ data[id - 1].tags }}</bold>
          " series
        </span>
        <span class="image-text" style="margin-top: 30px" v-if="data[id-1].description">{{
            data[id - 1].description
          }}</span>
      </div>
      <div class="information" v-if="isActive">
        <!--Name-->
        <div class="h3">
          <span class="image-text bold">{{ data[id - 1].name }} {{ data[id - 1].createdYear }}</span>
          <!--Is print available-->
          <span class="image-text" v-if="!data[id-1].isAvailable" style="font-weight: 500">SOLD OUT</span>
          <!--Edition-->
          <span class="image-text" v-if="data[id-1].OpenOrLimited"><span
              style="font-weight: 500">LIMITED EDITION OF</span>
            {{ data[id - 1].circulation }}AP</span>
          <span class="image-text" v-else style="font-weight: 500">OPEN EDITION</span>
        </div>
        <div class="description-right" id="descriptionRight">
          <span class="image-text" style="font-weight: 500">EDITION {{ data[id - 1].currentCirculation }}</span>
          <span class="image-text"><span class="bold font-6">SIZE</span> {{ data[id - 1].size }}</span>
        </div>
      </div>
      <div class="desc">
        <div class="allWidth">
          <button v-if="data[id-1].isAvailable" class="buy-print2">
            <a :href="data[id-1].url">Buy Print</a>
          </button>
        </div>
        <span class="image-text" v-if="data[id-1].isAvailable && data[id-1].tags">
            this work is part of the "
            <router-link :to="`/${data[id-1].tags}`" class="bold">{{ data[id - 1].tags }}</router-link>
            " series
      </span>
        <span class="image-text" v-if="data[id-1].description">{{ data[id - 1].description }}</span>
      </div>
      <span class="image-text more" v-if="!isActive" @click="isActive = !isActive">Learn More</span>
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
        let images2 = document.querySelector('.images2')

        let id2 = id.value - 1

        if (window.innerWidth < 768 && data.value[id2].image.width < data.value[id2].image.height) {
          isActive.value = false
          images.classList.add('moreInfo')
        } else {
          isActive.value = true
        }

        if (data.value[id2].image.width > 1200) {
          gallery.classList.add('gallery-class-one-element')
          images.remove()
        } else {
          gallery.classList.add('gallery-class-two-element')
          images2.remove()
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
              if (data.value.length !== id.value) {
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


    const data = computed(() => store.getters['requests']
        .filter(d => {
          if (tag.value) {
            let dataTag = d.tags
            return dataTag.toLowerCase().includes(tag.value[0].toLowerCase())
          }
          return d
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
