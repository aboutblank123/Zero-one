<template>
    <div class="container">
      <HeaderView />
      <main>
        <slot name="main" />
      </main>
      <FooterView />
    </div>
  </template>
  
  <script>
    import HeaderView from '@/layout/HeaderView.vue'
    import FooterView from '@/layout/FooterView.vue'

    export default {
    name: 'MainLayout',
    components: {
        HeaderView,
        FooterView,
    }
    }

    </script>
