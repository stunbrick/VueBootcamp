<template>

  <button type="button" @click="ageIncrement">Update Age by 3</button>
  <button type="button" @click="ageChangeFn(4)">Update Age by 4</button>
  <p>The guy is {{ age }} years old</p>
  <p>if he was twice as old he'd be {{ age * 2 }} today</p>
</template>
<script>
export default {
  name: "User",
  props: {
    age: {
      type: Number,
      //required: true,
      //default: 20,
      validator(value) {
        return value < 130
      }

    },
    ageChangeFn: Function,

  },
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