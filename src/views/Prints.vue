<template>
  <div class="container gallery" v-if="data">
    <div class="flexbin flexbin-margin">
      <a v-for="(gallery, i) in data" :key="gallery.id">
        <router-link v-slot="{navigate}" custom :to="{name: 'GalleryAllTag', params: {id: i+1}}">
          <img class="el" :src="`https://quiet-basin-40455.herokuapp.com${gallery.image.url}`" alt="image" @click="navigate" :requests="requests">
        </router-link>
      </a>
    </div>
  </div>
</template>

<script>
import {computed, ref} from "vue";

export default {
  props: ['requests'],
  setup(props) {
    let request = ref(props.requests)

    const data = computed(() => request.value
          .filter(data => {
            if(data) {
              return data.Prints === true
            }
            return data
          })
    )


    return {
      request,
      data
    }
  }
}
</script>

<style scoped>
.flexbin > * {
  height: 400px !important;
}

.el {
  height: 400px !important;
  cursor: pointer;
}
</style>
