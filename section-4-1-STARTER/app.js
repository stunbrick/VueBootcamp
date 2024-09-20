let vm = Vue.createApp({
  data() {
    return {
      message: "Hello world!"
    }
  },
  beforeCreate() {
    console.log('beforeCreate called', this.message);
  },
  created() {
    console.log('created called', this.message);
  },
  beforeMount() {
    console.log('beforeMount called', this.$el);
  },
  mounted() {
    console.log('mounted called', this.$el);
  },
  beforeUpdate() {
    console.log('beforeUpdate called');
  },
  updated() {
    console.log('updated called');
  },
})

setTimeout(mountApp, 3)

function mountApp() {
  vm.mount('#app')
}