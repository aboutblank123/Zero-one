<template>
  <div class="header">
    <button class="menu-toggle" @click="toggleMenu">Menu</button>
    <MenuView :collapsed="menuCollapsed" />
    <LogoView />
  </div>
</template>

<script>
import MenuView from "./MenuView.vue";
import LogoView from "./LogoView.vue";

export default {
  name: "HeaderView",
  components: {
    MenuView,
    LogoView
  },
  data() {
    return {
      menuCollapsed: false
    };
  },
  methods: {
    toggleMenu() {
      this.menuCollapsed = !this.menuCollapsed;
    }
  }
};
</script>

<style>
  .header {
    height: 50px;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
  }
  .header {
    position: fixed;
    width: 100%;
    height: 60px;
    left: 0px;
    top: 0px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background: #ffffff;
    box-shadow: 0px 4px 20px 5px rgba(184, 184, 184, 0.2);
    z-index: 1;
   }
</style>