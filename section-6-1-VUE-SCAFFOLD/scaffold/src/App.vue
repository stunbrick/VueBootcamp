
<template>
  <p>Hey Text</p>
  <GREETS></GREETS>
</template>

<script>
import Greeting from "@/components/Greeting.vue"
export default {
  name: 'App',
  components: {
    GREETS: Greeting
  }
}
</script>
