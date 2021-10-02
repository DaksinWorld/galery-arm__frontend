<template>
    <nav>
      <img src="../assets/logo.svg" alt="Logo">
      <div class="nav-text">
        <h2>
          <router-link to="/info/about">about</router-link>
        </h2>
        <h2>
          <router-link to="/i/allPhoto">Gallery</router-link>
        </h2>
        <h2>
          <router-link to="/info/prints">PRINTS</router-link>
        </h2>
        <h2>
          <router-link to="/info/workshop">WORKSHOP</router-link>
        </h2>
        <h2>
          <router-link to="/article">ARTICLES</router-link>
        </h2>
        <h2>
          <router-link to="/info/contact">CONTACT</router-link>
        </h2>
      </div>
    </nav>
</template>

<script>
export default {
name: "Nav"
}
</script>

<style lang="scss" scoped>
nav {
  padding-top: 5px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  .nav-text {
    display: flex;
    flex-direction: row;
    text-transform: uppercase;
    justify-self: right;
    align-items: center;
    h2 {
      margin-right: 30px;
    }
    h2:last-child {
      margin-right: 0px;
    }
  }
}

@media screen and (max-width: 1465px) {
  h2 {
    font-size: 15px;
  }
  img {
    width: 400px;
  }
}

@media screen and (max-width: 1110px) {
  nav {
    grid-template-columns: 1fr;
    justify-items: center;
    .nav-text {
      padding-top: 30px;
      justify-self: center;
    }
  }
}

@media screen and (max-width: 768px) {
  nav {
    padding-top: 20px;
    .nav-text{
      display: none;
    }
  }
}

</style>
