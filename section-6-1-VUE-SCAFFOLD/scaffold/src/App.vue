
<template>
  <h3>Hey Text</h3>

  <GREETS :age="age"></GREETS>
  <user :age="age" @age-change="updateAge"></user>
</template>

<script>
import Greeting from "@/components/Greeting.vue"
import User from "@/components/User.vue"
export default {
  name: 'App',
  components: {
    GREETS: Greeting,
    User,
  },
  data() {
    return {
      age: 20,
    }
  },
  methods: {
    updateAge(delta) {
      this.age += delta
    }
  }
}
</script>
