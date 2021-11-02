<template>
  <div v-if="workshop" class="workshop container2">
    <div class="workshops" v-for="(w,i) in workshop" :key="i" @click="navigate(w._id)">
      <h2 class="name">{{w.name}}</h2>
      <img class="image" :src="`https://quiet-basin-40455.herokuapp.com${w.image.url}`" alt="">
      <div class="desc" v-html="w.about">
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
    let workshop = ref([])
    const router = useRouter()

    onMounted(async () => {
      await store.dispatch('getWorkshop')
      workshop.value = store.getters['requests']
    })

    const navigate = (id) => {
      router.push(`/workshop-page/${id}`)
    }


    return {
      workshop,
      navigate
    }
  },
}
</script>
<style scoped lang="scss">
@import "gallery";
</style>

