<template>
  <div v-if="source.data" v-html="source.data.workshop" class="ck-content">

  </div>
</template>

<script>
import axios from '../request/axios'

export default {
  data() {

    return{
      source: '',
      str: ''
    }
  },
  async mounted() {
    this.source = await axios.get('/workshop')
    this.str = this.source.data.workshop.replace(/src="/gm, 'src="https://quiet-basin-40455.herokuapp.com')
  }
}
</script>
