<template>
  <div v-if="requests[id-1]" class="gallery-style-class container" id="gallery">
    <div class="images">
      <img :class="{none: id === 1}" class="m" src="../assets/left.svg" alt="left" @click="navigateMinusOne">
      <img id="image" class="mainPhoto" :src="`https://quiet-basin-40455.herokuapp.com${requests[id-1].image.url}`"
           alt="image">
      <img v-if="requests.length !== id" class="m" src="../assets/right.svg" alt="right" @click="navigatePlusOne">
      <div v-if="isActive" class="description" id="descriptionDown">
        <h3 v-if="requests[id-1].isAvailable">
          this work is part of the "
          <bold style="font-weight: 500">{{ requests[id - 1].tags }}</bold>
          " series
        </h3>
        <h3 style="margin-top: 30px" v-if="requests[id-1].description">{{ requests[id - 1].description }}</h3>
      </div>
      <div class="information" v-if="isActive">
        <!--Name-->
        <div class="h3">
          <h2 class="bold">{{ requests[id - 1].name }}</h2>
          <!--Created Year-->
          <h2>{{ requests[id - 1].createdYear }}</h2>
          <!--Is print available-->
          <h2 v-if="requests[id-1].isAvailable" style="font-weight: 500">PRINT AVAILABLE</h2>
          <h2 v-else style="font-weight: 500">PRINT IS NOT AVAILABLE</h2>
          <!--Edition-->
          <h2 v-if="requests[id-1].OpenOrLimited"><span style="font-weight: 500">LIMITED EDITION OF</span>
            {{ requests[id - 1].currentCirculation }}
            AP</h2>
          <h2 v-else style="font-weight: 500">OPEN EDITION</h2>
          <h2><span class="bold font-6">SIZE</span> {{ requests[id - 1].size }}</h2>
        </div>
        <div class="description-right" id="descriptionRight">
          <h2 v-if="requests[id-1].isAvailable && requests[id-1].tags">
            this work is part of the "
            <router-link :to="`/${requests[id-1].tags}`" class="bold">{{ requests[id - 1].tags }}</router-link>
            " series
          </h2>
          <h2 v-if="requests[id-1].description">{{ requests[id - 1].description }}</h2>
          <button v-if="requests[id-1].isAvailable" class="buy-print">
            Buy Print
          </button>
        </div>
      </div>
      <h2 class="more" v-if="!isActive" @click="isActive = !isActive">Подробнее</h2>
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
      await store.dispatch('getGallery')

      setTimeout(() => {
        let gallery = document.querySelector('#gallery')
        let images = document.querySelector('.images')

        let id2 = id.value - 1

        if(window.innerWidth > 768 && requests.value[id2].image.width > 598) {
          isActive.value = true
        } else {
          isActive.value = false
          images.classList.add('moreInfo')
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
.none {
  opacity: 0;
}

.moreInfo {
  grid-template-areas:
          "d mainPhoto m"
          ". more ."
          ". info ." !important;

}

.mt-20px {
  margin-top: 20px;
}

.bold, {
  font-weight: 600;
}

.font-6, h3, span {
  color: #666 !important;
}

.gallery-class-one-element {
  .images {
    display: grid;
    grid-template-areas:
          "d mainPhoto m"
          ". info ." ;
    align-items: center;
    justify-content: left;

    .description {
      display: none;
      grid-area: desc;
    }

    .information {
      grid-area: info;
      display: grid;
      grid-template-areas:
          "h3 description";
      gap: 50px;
      align-items: start;

      .description-right {
        grid-area: description;
        margin: 0 !important;
      }

      .h3 {
        grid-area: h3;
      }
    }
  }

}

.gallery-class-two-element {
  grid-template-columns: auto auto;

  .images {
    grid-template:
        "d mainPhoto m info";

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
  display: flex;
  justify-content: center;
  width: 100%;
  flex-direction: column;

  .images {
    display: grid;
    align-items: center;
    justify-content: left;
    gap: 50px;

    .information {
      grid-area: info;

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
        background: #c7c7c7;
        border-radius: 50px;
        color: #666;
        border: none;
        padding: 13px 55px;
        margin-top: 30px;
        font-family: var(--fontFamilyEditor);
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
  .images {
    grid-template:
        "d mainPhoto m"
        ". info ."
        ". description ."
        ". more .";

    .information {
      margin: 0 !important;
    }
  }
}

@media screen and (max-width: 1480px) {
  .images {
    grid-template-areas:
          "d mainPhoto m"
          ". info ."
          ". description .";

    .m, .d {
      width: 30px;
    }
  }
}

@media screen and (max-width: 1024px) {
  .images {
    grid-template-areas:
          "d mainPhoto m"
          ". info ."
          ". description .";
    gap: 20px !important;

    .information {
      grid-template:"h3"
        "description"
      !important;
    }

    .m, .d {
      width: 20px;
    }
  }
}

@media screen and (max-width: 768px) {
  .images {
    grid-template-areas:
          "d mainPhoto m"
          ". info ."
          ". description .";
    gap: 20px !important;

    .m, .d {
      display: none;
    }
  }
  .more {
    grid-area: more;
  }
}

</style>
