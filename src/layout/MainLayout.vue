<template>
  <div>
    <div class="container">
      <Nav class="nav"/>
      <div class="layout">
        <Sidebar v-model="filter"/>
        <router-view v-if="requests" :requests="requests"/>
      </div>
    </div>
    <to-top/>
  </div>
</template>
<script>
import Nav from '../components/Nav'
import Sidebar from "@/components/Sidebar";
import ToTop from "@/components/ToTop";
import {useStore} from "vuex";
import {computed, onMounted, ref} from "vue";

export default {
  components: {
    Nav,
    Sidebar,
    ToTop
  },
  setup() {
    const store = useStore()
    const data = ref()
    const filter = ref({})

    onMounted(async () => {
      await store.dispatch('getGallery')
    })

    const requests = computed(() => store.getters['requests']
        .filter(request => {
          if (filter.value) {
            if (filter.value.data) {
              return filter.value.data === request.color
            }
          }
          return request
        })
        .sort((a,b) => {
          return a.id - b.id
        })
    )

    return {
      data,
      requests,
      filter
    }
  }
}
</script>
