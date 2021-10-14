<template>
  <div class="articles container" v-if="requests">
    <div class="article" v-for="(article,i) in requests" :key="i">
      <h2 class="name">{{article.name}}</h2>
      <img class="image" :src="article.image.url" alt="">
      <h2 class="desc">{{article.description}}</h2>
    </div>
  </div>
</template>

<script>
import {useRoute} from 'vue-router'
import {useStore} from 'vuex'
import { computed,ref, onMounted} from 'vue'

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
