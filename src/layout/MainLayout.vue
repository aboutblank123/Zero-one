<template>
    <div class="container min-h-screen">
      <HeaderView />
      <main>
        <HelloWorld />
      </main>
      <FooterView />
    </div>
  </template>
  
  <script>
    import HeaderView from '@/layout/HeaderView.vue'
    import FooterView from '@/layout/FooterView.vue'
    import HelloWorld from '@/components/HelloWorld.vue'

    export default {
    name: 'MainLayout',
    components: {
        HeaderView,
        FooterView,
        HelloWorld,
    }
    }

    </script>

    <style>
    .container {
      min-height: 100vh;
    }
    </style>
