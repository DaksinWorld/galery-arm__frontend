<template>
  <div class="articles container2">
    <div class="article" v-for="(article,i) in articles" :key="i" @click="navigate(article._id)">
        <h2 class="name">{{article.name}}</h2>
        <img class="image" :src="`https://quiet-basin-40455.herokuapp.com${article.image.url}`" :width="article.image.width" :height="article.image.height" alt="">
        <div class="desc" v-html="article.about">
        </div>
    </div>
  </div>
</template>

<script>
import {useStore} from 'vuex'
import { ref, onMounted} from 'vue'
import {useRouter} from "vue-router";

export default {
  setup() {
    const store = useStore()
    let articles = ref([])
    const router = useRouter()

    onMounted(async () => {
      await store.dispatch('getData')
      articles.value = store.getters['requests']
    })

    const navigate = (id) => {
      router.push(`/article-page/${id}`)
    }


    return {
      articles,
      navigate
    }
  },
}
</script>

<style lang="scss" scoped>
@import "gallery";
</style>
