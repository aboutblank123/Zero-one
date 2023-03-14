<template>
  <div :class="{ 'menu-container': true, 'collapsed': isCollapse }">
    <div :class="{ 'menu': true, 'collapsed': isCollapse }">
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
  },
  computed: {
    isCollapse() {
      return this.collapsed;
    },
    isMobile() {
      return window.matchMedia("(max-width: 768px)").matches;
    }
  },
  methods: {
    toggleCollapse() {
      this.$emit("toggle-collapse");
    }
  }
};
</script>

<style scoped>
.menu-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.menu {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0px;
  gap: 20px;

  position: absolute;
  width: 645px;
  height: 42px;
  left: 50%;
  transform: translateX(-50%);
}

.menu.collapsed {
  position: fixed;
  top: 0;
  right: 0;
  width: 266px;
  height: 100%;
  z-index: 999;
  background-color: white;
  transition: transform 0.3s ease-in-out;
  transform: translateX(100%);
}

.menu.collapsed .menu-item {
  display: block;
}

.collapse-icon {
  display: none;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}

.collapse-icon img {
  width: 24px;
  height: 24px;
}

@media only screen and (max-width: 768px) {
  .menu {
    display: none;
  }

  .collapse-icon {
    display: block;
  }

  .menu.collapsed {
    display: flex;
  }

  .menu.collapsed .menu-item {
    display: block;
    margin: 20px;
  }

  .menu.collapsed .menu-item:first-child {
    margin-top: 40px;
  }
}
</style>
