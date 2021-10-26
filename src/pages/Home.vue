<template>
  <div class="container gallery" v-if="data">
    <div class="flexbin flexbin-margin">
      <a v-for="(gallery) in data" :key="gallery.id">
        <img :src="`https://quiet-basin-40455.herokuapp.com${gallery.image.url}`" alt="image" @click="navigate(gallery.second_id,gallery.tags)" :requests="requests">
      </a>
    </div>
  </div>
</template>

<script>
import {computed} from "vue";
import {useRoute} from "vue-router";
import {useRouter} from "vue-router";

export default {
  props: ['requests'],
  setup(props) {
    const route = useRoute()
    const router = useRouter()

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

    const navigate = (id, tags) => {
      router.push(`/gallery/${tags+'_'+id}`)
      setTimeout(() => {
        location.reload()
      },25)
    }

    return{
      data,
      navigate
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
      margin:0 !important;
    }
  }
}

@media screen and (max-width: 860px) {
  .element, img {

  }
}


</style>
