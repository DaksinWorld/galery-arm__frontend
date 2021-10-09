<template>
  <div class="container gallery" v-if="data">
    <div class="flexbin flexbin-margin">
      <a v-for="(gallery) in data" :key="gallery.id">
        <router-link v-slot="{navigate}" custom :to="{name: 'GalleryPage', params: {id: gallery.tags + '_' + gallery.second_id}}">
          <img :src="`https://strapi-postgres22.herokuapp.com${gallery.image.url}`" alt="image" @click="navigate" :requests="requests">
        </router-link>
      </a>
    </div>
  </div>
</template>

<script>
import {computed} from "vue";
import {useRoute} from "vue-router";

export default {
  props: ['requests'],
  setup(props) {
    const route = useRoute()

    const data = computed(() => props.requests
        .filter(data => {
          if(route.params.id) {
            let dataTag = data.tags
            let result = dataTag.toLowerCase().includes(route.params.id.toLowerCase())
            return result
          }
          return data
        })
    )

    return{
      data
    }
  },
}
</script>
<style lang="scss" scoped>
@import "~flexbin/flexbin.css";

.gallery {
  display: flex;
  flex-direction: row;
  .elements {
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    .element, img {
      height: 400px;
      object-fit: cover;
      background: #566666;
      border: 1px solid black;
    }
  }
}

@media screen and (max-width: 860px) {
  .element, img {

  }
}


</style>
