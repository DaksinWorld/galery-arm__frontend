<template>
  <div>
    <div class="container">
      <Nav class="nav"/>
      <div class="layout">
        <Sidebar v-model="filter"/>
        <router-view v-if="requests" :requests="requests"/>
      </div>
    </div>
    <footer-bar class="footer-bar"/>
  </div>
</template>
<script>
import Nav from '../components/Nav'
import FooterBar from "@/components/FooterBar";
import Sidebar from "@/components/Sidebar";
import {useStore} from "vuex";
import {computed, onMounted, ref} from "vue";

export default {
  components: {
    Nav,
    FooterBar,
    Sidebar
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
<style lang="scss">
.layout {
  margin-top: 50px;
  display: flex;
  flex-direction: row;
}

.footer-bar {
  display: none;
}

@media screen and (max-width: 1110px) {
  .layout {
    margin-top: 30px;
  }
}

@media (max-width: 768px) {
  .sidebar {
    display: none !important;
  }
  .footer-bar {
    display: block;
  }
}
</style>
