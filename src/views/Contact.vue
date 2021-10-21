<template>
  <div v-if="source" v-html="source.data.contact" class="ck-content">
  </div>
</template>

<script>
import axios from '../request/axios'

export default {
  data() {

    return{
      source: ''
    }
  },
  async mounted() {
    this.source = await axios.get('/contact')
  },
}
</script>
