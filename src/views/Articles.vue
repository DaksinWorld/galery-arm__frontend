<template>
  <div class="articles container2" v-if="requests">
    <div class="article" v-for="(article,i) in requests" :key="i">
      <h2 class="name">{{ article.name }}</h2>
      <img class="image" :src="`https://quiet-basin-40455.herokuapp.com${article.image.url}`" :width="article.image.width" :height="article.image.height" alt="image">
      <div class="desc" v-html="article.about"></div>
    </div>
  </div>
</template>

<script>
import {useRoute} from 'vue-router'
import {useStore} from 'vuex'
import {computed, onMounted, ref} from 'vue'

export default {
  setup() {
    const route = useRoute()
    const store = useStore()
    let articles = ref([])

    onMounted(async () => {
      await store.dispatch('getData')
      articles.value = store.getters['requests']
    })

    const requests = computed(() => store.getters['requests']
        .filter(data => {
          let dataTag = data.tags
          return dataTag.toLowerCase().includes(route.params.id.toLowerCase())
        })
    )

    return {
      articles,
      requests
    }
  },
}
</script>

<style lang="scss" scoped>
@import "gallery";
</style>
