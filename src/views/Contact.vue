<template>
  <div v-if="source">
    <Markdown class="markdown" :source="source.data.contact"/>
  </div>
</template>

<script>
import Markdown from 'vue3-markdown-it';
import axios from 'axios'

export default {
  data() {

    return{
      source: ''
    }
  },
  async mounted() {
    this.source = await axios.get('http://localhost:1337/contact')
  },
  components: {
    Markdown
  }
}
</script>
