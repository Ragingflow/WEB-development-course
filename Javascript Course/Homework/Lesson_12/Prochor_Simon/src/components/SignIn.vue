<template>


        <form novalidate class="md-layout" @submit.prevent="signIn">
            <md-progress-bar md-mode="indeterminate" v-if="sending" />
            <md-field :class="getValidationClass('email')">
                <label>Email</label>
                <md-input type="email" name="email" v-model="form.email" required></md-input>
                <span class="md-error" v-if="!$v.form.email.required">The email is required</span>
                <span class="md-error" v-else-if="!$v.form.email.email">Invalid email</span>
                <span class="md-error" v-else-if="error.message">{{ error.message }}</span>
            </md-field>

            <md-field :class="getValidationClass('password')">
                <label>Password</label>
                <md-input type="password" name="password" v-model="form.password" required></md-input>
                <span class="md-error" v-if="!$v.form.password.required">The password is required</span>
                <span class="md-error" v-else-if="!$v.form.password.minLength">Min coun symbol 6</span>
            </md-field>


            <div class="md-layout md-gutter md-alignment-top-center">
                <md-button class="md-raised md-primary" type="submit">Sign In</md-button>

            </div>


        </form>

</template>

<script>
	import { validationMixin } from 'vuelidate';
	import {
		required,
		email,
		minLength,
		maxLength
	} from 'vuelidate/lib/validators';

    import {firebaseApp  } from "../firebaseApp";

    export default {
        name: 'SignIn',
	    mixins: [validationMixin],
        data(){
            return {
	            sending: false,
	            form: {
		            email: 'admin@admin.com',
		            password: '123456',
	            },

                error: {
                    message: ''
                },
            }
        },
	    validations: {
		    form: {
			    password: {
				    required,
				    minLength: minLength(6)
			    },
			    email: {
				    required,
				    email
			    }
		    }
	    },
        methods: {
	        getValidationClass (fieldName) {
		        const field = this.$v.form[fieldName];

		        if (field ) {
		        	if( field.$invalid && field.$dirty ) {
				        return {
					        'md-invalid': true
				        }
                    } else if(this.error.message != ''){
				        return {
					        'md-invalid': true
				        }
                    }

		        }
	        },
            signIn( ){
	            this.$v.$touch()
	            this.sending = true;
	            if (!this.$v.$invalid) {

		            firebaseApp.auth().signInWithEmailAndPassword(this.form.email, this.form.password).then( response=>{
			            this.$emit('close');
			            this.sending = false;
			            this.error = '';

                        this.$store.dispatch('setCart');

		            })
			            .catch(error => {
				            this.sending = false;
				            this.error = error
			            })
	            }


            }
        }
    }
</script>

<style>
    .md-progress-bar {
        width: 90%;
    }
</style>