<template>
  <div v-if="source" v-html="source.data.test" class="ck-content">
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
    this.source = await axios.get('/about')
    document.baseURI = 'https://quiet-basin-40455.herokuapp.com'
  },
}
</script>
