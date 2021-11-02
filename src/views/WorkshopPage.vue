<template>
  <div v-if="data" class="container2">
    <div>
      <h1 class="title">{{data.name}}</h1>
      <img :src="`https://quiet-basin-40455.herokuapp.com${data.image.url}`" alt="image">
      <div v-html="data.description"></div>
    </div>
  </div>
</template>

<script>
import {useStore} from "vuex";
import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";

export default {
  setup() {
    const route = useRoute()
    const store = useStore()
    const data = ref()

    onMounted(async () => {
      await store.dispatch('getCurrentWorkshop',route.params.id)
      data.value = store.getters['requests']
    })

    return {
      data
    }
  }
}
</script>

<style scoped>
.title{font-weight: 600;font-family: var(--fontFamilyEditor);}.container2 {display: flex;justify-content: center;}
</style>
