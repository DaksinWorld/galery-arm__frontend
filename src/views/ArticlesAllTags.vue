<template>
  <div class="articles container2">
    <div class="article" v-for="(article,i) in articles" :key="i" @click="navigate(article._id)">
        <h2 class="name">{{article.name}}</h2>
        <img class="image" :src="`https://quiet-basin-40455.herokuapp.com${article.image.url}`" alt="">
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

    margin-left: 15px;

    cursor: pointer;

    .name {
      grid-area: name;
      font-weight: 500;
      font-family: var(--fontFamilyEditor);
    }

    .desc {
      margin-left: 15px;
      grid-area: description;
      align-self: center;
      overflow: hidden;
    }
  }
}

@media screen and (max-width: 1400px ) {
  .articles {
    grid-template-columns: auto;
  }
}
</style>
