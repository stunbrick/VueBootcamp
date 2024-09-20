let vm = Vue.createApp({
    data() {
        return {
            isPurple: false,
            selectedColor: '',
            size: 150,
        }
    },
    computed: {
        circle_colors() {
            return { purple: this.isPurple }
        },
        circle_sizes() {
            return { width: this.size + 'px', height: this.size + 'px', lineHeight: this.size + 'px' };
        }
    }
}).mount('#app')