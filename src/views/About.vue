<template>
  <div v-if="source">
    <Markdown class="markdown" :source="source.data.test"/>
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
    this.source = await axios.get('https://strapi-postgres22.herokuapp.com/about')
  },
  components: {
    Markdown
  }
}
</script>
