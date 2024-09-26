<template>
  <h1>About page</h1>
</template>

<script>
export default {
  unmounted() {
    console.log('about was unmounted');
  },
  activated() {
    console.log('about was activated');
  },
  deactivated() {
    console.log('about was deactivated');
  },
}
</script>
