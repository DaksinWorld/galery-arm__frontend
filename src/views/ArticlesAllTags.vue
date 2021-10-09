<template>
  <div class="articles container">
    <div class="article" v-for="(article,i) in articles" :key="i">
      <h2 class="name">{{article.name}}</h2>
      <img class="image" :src="`https://strapi-postgres22.herokuapp.com${article.image.url}`" alt="">
      <h2 class="desc">{{article.description}}</h2>
    </div>
  </div>
</template>

<script>
import {useStore} from 'vuex'
import { ref, onMounted} from 'vue'

export default {
  setup() {
    const store = useStore()
    let articles = ref([])

    onMounted(async () => {
      await store.dispatch('getData')
      articles.value = store.getters['requests']
      console.log(articles.value)
    })


    return {
      articles
    }
  },
}
</script>

<style lang="scss" scoped>
.articles {
  display: grid;
  align-content: space-between;
  grid-template-columns: 1fr 1fr;
  .article {
    display: grid;
    grid-template-areas:
  'name name'
  'image description' ;
    img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      grid-area: image;
      margin-top: 25px;
      margin-right: 30px;
    }

    .name {
      grid-area: name;
      font-weight: 500;
    }

    .desc {
      margin-top: 25px;
      grid-area: description;
      align-self: center;
    }
  }
}
</style>
