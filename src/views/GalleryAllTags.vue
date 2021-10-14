<template>
  <div class="container gallery" v-if="requests">
    <div class="flexbin flexbin-margin">
      <a v-for="(gallery,i) in requests" :key="gallery.id">
        <router-link v-slot="{navigate}" custom :to="{name: 'GalleryAllTag', params: {id: i+1}}">
          <img :src="gallery.image.url" alt="image" @click="navigate">
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
