<template>
  <div class="articles container2" v-if="requests">
    <div class="article" v-for="(article,i) in requests" :key="i">
      <h2 class="name">{{ article.name }}</h2>
      <img class="image" :src="`https://quiet-basin-40455.herokuapp.com${article.image.url}`" alt="image">
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
.container2 {
  width: 1200px;
}

.articles {
  display: grid;
  align-content: space-between;
  grid-template-columns: 1fr 1fr;
  margin: 0 auto;

  .article {
    display: grid;
    grid-template:
    'name name'
    'image description' / auto 1fr;

    img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      grid-area: image;

    }

    cursor: pointer;
    margin-left: 15px;

    .name {
      grid-area: name;
      font-weight: 500;
    }

    .desc {
      margin-left: 15px;
      grid-area: description;
      align-self: center;
      overflow: hidden;
    }
  }
}

@media screen and (max-width: 1400px) {
  .articles {
    grid-template-columns: auto;
  }
}
</style>
