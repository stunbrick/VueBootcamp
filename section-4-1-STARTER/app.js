let vm = Vue.createApp({
  data() {
    return {
      message: "Hello world!"
    }
  },
  template: `{{ message }}`
}).mount('#appCompiled')

let vm2 = Vue.createApp({
  data() {
    return {
      message: "Hello world!"
    }
  },
  render() {
    return Vue.h(
        'h1',
        this.message
    )
  }
}).mount('#appRuntime')
