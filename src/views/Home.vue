<template>
  <div class="container gallery" v-if="data">
    <div class="flexbin flexbin-margin">
      <a v-for="(gallery) in data" :key="gallery.id">
        <img v-if="gallery.image.formats.medium" class="el" v-lazy="{src: `https://quiet-basin-40455.herokuapp.com/files/${gallery.image.formats.medium.name}`}" alt="image" @click="navigate(gallery.second_id,gallery.tags)" :requests="requests">
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
      },300)
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

.flexbin > * {
  height: 400px !important;
}

.el {
  height: 400px !important;
  cursor: pointer;
}

.gallery {
  display: flex;
  flex-direction: row;
}
</style>
