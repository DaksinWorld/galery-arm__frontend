<template>
  <div v-if="source.data" v-html="source.data.workshop" class="ck-content">

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
    this.source = await axios.get('/workshop')
  }
}
</script>
