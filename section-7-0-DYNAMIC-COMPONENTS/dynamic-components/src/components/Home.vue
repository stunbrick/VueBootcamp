<template>
  <h1>Home page</h1>
</template>

<script>
  export default {
    unmounted() {
      console.log('home was unmounted');
    },
    activated() {
      console.log('home was activated');
    },
    deactivated() {
      console.log('home was deactivated');
    },
  }
</script>