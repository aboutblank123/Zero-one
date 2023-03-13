<template>
  <div>
    <Header />
  </div>
</template>

<script>
import Header from "@/layout/HeaderView.vue";

export default {
  provide: {
    menuStyle: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      padding: '0px',
      gap: '20px',
      position: 'absolute',
      width: '645px',
      height: '42px',
      left: '595px',
      top: '26px',
    },
  },
  name: "App",
  components: {
    Header,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
