<template>
  <component :is="layout + '-layout'" v-if="layout" />
</template>

<script>
import {computed} from 'vue'
import {useRoute} from 'vue-router'
import MainLayout from './layout/MainLayout'
import TagsLayout from './layout/TagsLayout'
import VoidLayout from './layout/VoidLayout'

export default {
  setup() {
    const route = useRoute()

    return {
      layout: computed(() => route.meta.layout)
    }
  },
  components: {MainLayout, TagsLayout,VoidLayout}
}
</script>
