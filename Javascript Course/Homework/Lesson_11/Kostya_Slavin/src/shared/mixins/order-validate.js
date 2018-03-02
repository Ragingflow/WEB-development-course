import { required, minLength, email, alpha, numeric } from 'vuelidate/lib/validators'
import { phoneValidator } from '../validators/phone'

export const orderValidate = {
    data() {
        return {
            name: '',
            email: '',
            phone: '',
            checkbox: false,
            terms: false
        }
    },
    computed: {
        nameErrors() {
            const errors = []
            if (!this.$v.name.$dirty) return errors
            !this.$v.name.required && errors.push('Name is required.')
            !this.$v.name.minLength && errors.push('Name must be at most 3 characters long')
            !this.$v.name.alpha && errors.push('Name must be only in characters')
            return errors
        },
        emailErrors() {
            const errors = []
            if (!this.$v.email.$dirty) return errors
            !this.$v.email.required && errors.push('E-mail is required')
            !this.$v.email.email && errors.push('Must be valid e-mail')
            return errors
        },
        phoneErrors() {
            const errors = []
            if (!this.$v.phone.$dirty) return errors
            !this.$v.phone.required && errors.push('Number is required')
            return errors
        },
        checkboxErrors () {
            const errors = []
            if (!this.$v.checkbox.$dirty) return errors
            !this.$v.checkbox.required && errors.push('You must agree with terms and conditions')
            return errors
        }
    },
    methods: {
        submit() {
            this.$v.$touch()
            if (this.$v.$invalid === false) {
                const order = {
                    "name": this.name,
                    "email": this.email,
                    "phone": this.phone,
                    "book": this.book
                }
                this.$store.dispatch('setOrder', order)
                this.clear()
            }
        },
        clear() {
            this.$v.$reset()
            this.name = ''
            this.email = ''
            this.phone = ''
            this.checkbox = false
            this.$store.commit('changeDialogStatus')
        },
        showTerms() {
            this.terms = !this.terms
        }
    },
    validations: {
        name: {
            required,
            alpha,
            minLength: minLength(3)
        },
        email: {
            required,
            email,
        },
        phone: {
            required,
        },
        checkbox: {
            required
        }
    },
}