<template>
  <div class="container gallery" v-if="requests">
    <div class="flexbin flexbin-margin">
      <a v-for="(gallery) in requests" :key="gallery.id">
        <router-link v-slot="{navigate}" custom :to="{name: 'GalleryAllTag', params: {id: gallery.id}}">
          <img :src="`https://strapi-postgres22.herokuapp.com${gallery.image.url}`" alt="image" @click="navigate">
        </router-link>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['requests']
}
</script>
<style lang="scss" scoped>
@import "~flexbin/flexbin.css";

</style>
