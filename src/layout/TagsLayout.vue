<template>
  <div>
    <div class="container">
      <Nav class="nav"/>
      <div class="layout">
        <tags-sidebar/>
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
import Nav from '../components/Nav'
import TagsSidebar from "@/components/TagsSidebar";

export default {
  components: {
    Nav,
    TagsSidebar
  },
}
</script>
