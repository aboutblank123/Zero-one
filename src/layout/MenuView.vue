<template>
  <div class="menu-container">
    <div :class="{ 'menu-collapse': isCollapse }" class="menu">
      <div class="menu-item">Home</div>
      <div class="menu-item">Blog</div>
      <div class="menu-item">Stack</div>
      <div class="menu-item">About</div>
    </div>
    <div v-if="isCollapse" class="collapse-icon" @click="toggleCollapse">
      <img src="mingcute:align-left-fill" alt="menu">
    </div>
  </div>
</template>


<script>
export default {
  name: "MenuView",
  props: {
    collapsed: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style>
  .menu {
    position: fixed;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0px;
    gap: 20px;

    position: absolute;
    width: 645px;
    height: 42px;
    left: 595px;
    top: 26px;
  }

</style>



