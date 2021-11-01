<template>
    <nav>
      <img @click="$router.push('/i/AllPhoto')" class="logo" src="../assets/logo.svg" alt="Logo">
      <div class="nav-text">
        <span class="nav-item">
          <router-link to="/info/about">about</router-link>
        </span>
        <span class="nav-item">
          <router-link to="/i/allPhoto">Gallery</router-link>
        </span>
        <span class="nav-item">
          <router-link to="/info/prints">PRINTS</router-link>
        </span>
        <span class="nav-item">
          <router-link to="/info/workshop">WORKSHOP</router-link>
        </span>
        <span class="nav-item">
          <router-link to="/article">ARTICLES</router-link>
        </span>
        <span class="nav-item">
          <router-link to="/info/contact">CONTACT</router-link>
        </span>
      </div>
    </nav>
</template>

<script>
export default {
name: "Nav"
}
</script>

<style lang="scss" scoped>
.logo {
  height: 43px;
}

nav {
  background: #e7e7e7;
  width: 100%;
  padding: 5px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  .nav-text {
    display: flex;
    flex-direction: row;
    text-transform: uppercase;
    justify-self: right;
    align-items: center;
    .nav-item {
      margin-right: var(--MenuGap);
      font-size: var(--fontSize-Menu);
      font-weight: var(--fontWeight-Menu-Normal);
    }
    .nav-item:last-child {
      margin-right: 0;
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

@media screen and (max-width: 420px){
  .logo {
    width: 300px;
  }
}

</style>
