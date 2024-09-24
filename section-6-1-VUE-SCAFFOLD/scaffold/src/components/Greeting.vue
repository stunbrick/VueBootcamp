<template>
  <p>{{ msg }}</p>
  <p v-if="age >= 25">secret message for age 25+! :)</p>
  <p v-else>Hello children</p>
</template>

<script>

export default {
  name: 'Greeting',
  data() {
    return {
      msg: "Hello World!"
    }
  },
  props: [
      "age",
  ],

}
</script>
<style scoped lang="scss">
p:hover {
  color: darken(#CC4444, 15%);
}
</style>