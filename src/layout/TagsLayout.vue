<template>
  <div>
    <div class="container">
      <Nav class="nav"/>
      <div class="layout">
        <tags-sidebar/>
        <router-view />
      </div>
    </div>
    <footer-bar class="footer-bar"/>
  </div>
</template>
<script>
import Nav from '../components/Nav'
import FooterBar from "@/components/FooterBar";
import TagsSidebar from "@/components/TagsSidebar";

export default {
  components: {
    Nav,
    FooterBar,
    TagsSidebar
  },
}
</script>
<style lang="scss">
.layout {
  margin-top: 100px;
  display: flex;
  flex-direction: row;
}

.footer-bar {
  display: none;
}

@media screen and (max-width: 1110px) {
  .layout {
    margin-top: 30px;
  }
}

@media (max-width: 768px) {
  .sidebar {
    display: none !important;
  }
  .footer-bar {
    display: block;
  }
}
</style>
