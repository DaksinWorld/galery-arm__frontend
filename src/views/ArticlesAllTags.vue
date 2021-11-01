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
  padding-left: 6vw;
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

    margin-left: 15px;

    .name {
      grid-area: name;
      font-weight: 500;
      font-family: var(--fontFamilyEditor);
    }

    .desc {
      margin-top: 25px;
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
