<template>
  <div class="container gallery" v-if="requests">
    <div class="flexbin flexbin-margin">
      <a v-for="(gallery,i) in requests" :key="gallery.id">
          <img class="el" v-if="gallery.image.formats.medium" height="400" v-lazy="{src: `https://quiet-basin-40455.herokuapp.com/files/${gallery.image.formats.medium.name}`}" lazy="loaded" alt="image" @click="navigate(i)">
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
      },300)
    }
  }
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
</style>
