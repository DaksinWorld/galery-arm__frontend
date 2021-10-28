<template>
  <div class="container gallery" v-if="requests">
    <div class="flexbin flexbin-margin">
      <a v-for="(gallery,i) in requests" :key="gallery.id">
          <img v-lazy="`https://quiet-basin-40455.herokuapp.com${gallery.image.url}`" lazy="loaded" alt="image" @click="navigate(i)">
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['requests'],
  methods: {
    navigate(i) {
      this.$router.push(`/gallery-page/${i+1}`)
      setTimeout(() => {
        location.reload()
      },25)
    }
  }
}
</script>
<style lang="scss" scoped>
@import "~flexbin/flexbin.css";

</style>
