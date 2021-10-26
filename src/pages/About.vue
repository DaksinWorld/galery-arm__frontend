<template>
  <div v-if="str" v-html="str" class="ck-content">
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
    this.source = await axios.get('/about')
    this.str = this.source.data.test.replace(/src="/gm, 'src="https://quiet-basin-40455.herokuapp.com')
  },
}
</script>
