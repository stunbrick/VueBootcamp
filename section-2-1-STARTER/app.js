const vm = Vue.createApp({
    data() {
        return {
            firstName: 'Liam',
            middleName: '',
            lastName: 'Chimes',
            googleURL: 'https://google.com',
            rawGoogleURL: '<a href = "https://google.com" target = "_blank" > Google </a>',
            age: 28,
        };
    },
    methods: {
        updateMiddleName(event) {
           this.middleName = event.target.value;
        },
        updateLastName(msg, event) {
            console.log(msg);
            this.lastName = event.target.value
        },
        increment() {
            this.age++;
        },
    },
    computed: {
        fullName() {
            return `${this.firstName} ${this.middleName} ${this.lastName.toUpperCase()}`;
        }
    },
    watch: {
        age(newVal, oldVal) {
            setTimeout(() => {
                this.age = 20;
            }, 3000);
        }
    }
}).mount('#app');
