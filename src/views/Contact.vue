<template>
  <div class="container2">
    <div v-if="source" v-html="source.data.contact" class="ck-content">
    </div>
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
    this.str = this.source.data.contact.replace(/src="/gm, 'src="https://quiet-basin-40455.herokuapp.com')
  },
}
</script>
<style scoped>
* {
  font-family: "Libre Baskerville";
}

.container2 {
  width: 1200px;
  margin: 0 auto;
}
</style>

