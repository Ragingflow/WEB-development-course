//mixin
export const toggle = {
    methods: {
        sayHello: function() {
            console.log('hello from mixin!')
        }
    },
    mounted() {
        this.sayHello()
    }
}