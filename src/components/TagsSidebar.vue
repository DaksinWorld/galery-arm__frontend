<template>
  <div class="sidebar">
    <router-link to="/article">All tags</router-link>
    <router-link to="/articles/AboutAss">About ass</router-link>
    <router-link to="/articles/AboutAssAndShit">About ass and shit</router-link>
    <router-link to="/articles/AmoutLive">Amout live</router-link>
    <router-link to="/articles/CompactHole">Compact hole</router-link>
    <router-link to="/articles/Jellyfish">Jellyfish in water</router-link>
    <router-link to="/articles/Skins">Skins of clash</router-link>
    <router-link to="/articles/Series">Series three hundred bucks</router-link>
    <router-link to="/articles/Single">My Single </router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.sidebar {
  width: 234px;
  display: flex;
  flex-direction: column;
  a {
    font-size: 15px;
    color: #666;
    margin-bottom: 40px;
  }
}
</style>
