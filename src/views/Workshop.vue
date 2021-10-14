<template>
  <div v-if="source.data">
    <div v-html="source.data.workshop">
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {

    return{
      source: ''
    }
  },
  async mounted() {
    this.source = await axios.get('http://localhost:1337/workshop')
  }
}
</script>
