<template>

  <button type="button" @click="ageIncrement">Update Age</button>
  <p>The guy is {{ age }} years old</p>
  <p>if he was twice as old he'd be {{ age * 2 }} today</p>
</template>
<script>
export default {
  name: "User",
  props: [
      "age",
  ],
  computed: {
    doubleAge() {
      return this.age * 2
    },
  },
  emits: [
      'age-change',
  ],
  methods: {
    ageIncrement() {
      this.$emit('age-change', 3)
    }
  }

}
</script>