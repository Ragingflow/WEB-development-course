<template>
    <md-dialog :md-click-outside-to-close="false" :md-active.sync="showDialog">

            <md-dialog-title>{{ book.title }}</md-dialog-title>

            <md-tabs md-dynamic-height>

                <md-tab md-label="Description">{{book.description}}</md-tab>

                <md-tab md-label="Order">
                    <div v-if="!Object.keys($store.state.user).length">
                        <h3>You are not registered User. Please login</h3>
                        <md-steppers >
                            <md-step id="first" md-label="Sign In" >
                                <SignIn/>
                            </md-step>

                            <md-step id="second" md-label="Sign Up">
                                <SignUp/>
                            </md-step>
                        </md-steppers>
                    </div>

                    <form v-if="Object.keys($store.state.user).length" novalidate class="md-layout" @submit.prevent="validateUser">
                        <md-progress-bar md-mode="indeterminate" v-if="sending" />
                        <div class="md-layout-item">

                            <div>
                                <div class="md-layout md-gutter">
                                    <div class="md-layout-item md-small-size-100">
                                        <md-field :class="getValidationClass('firstName')">
                                            <label for="first-name">First Name</label>
                                            <md-input name="first-name" id="first-name" autocomplete="given-name" v-model="form.firstName" :disabled="sending" />
                                            <span class="md-error" v-if="!$v.form.firstName.required">The first name is required</span>
                                            <span class="md-error" v-else-if="!$v.form.firstName.minlength">Invalid first name</span>
                                        </md-field>
                                    </div>

                                    <div class="md-layout-item md-small-size-100">
                                        <md-field :class="getValidationClass('lastName')">
                                            <label for="last-name">Last Name</label>
                                            <md-input name="last-name" id="last-name" autocomplete="family-name" v-model="form.lastName" :disabled="sending" />
                                            <span class="md-error" v-if="!$v.form.lastName.required">The last name is required</span>
                                            <span class="md-error" v-else-if="!$v.form.lastName.minlength">Invalid last name</span>
                                        </md-field>
                                    </div>
                                </div>

                                <div class="md-layout md-gutter">
                                    <div class="md-layout-item md-small-size-100">
                                        <md-field :class="getValidationClass('email')">
                                            <label for="email">Email</label>
                                            <md-input type="email" name="email" id="email" autocomplete="email" v-model="form.email" :disabled="sending" />
                                            <span class="md-error" v-if="!$v.form.email.required">The email is required</span>
                                            <span class="md-error" v-else-if="!$v.form.email.email">Invalid email</span>
                                        </md-field>
                                    </div>

                                    <div class="md-layout-item md-small-size-100">
                                        <md-field :class="getValidationClass('phone')">
                                            <label for="phone">Phone</label>
                                            <md-input data-inputmask-clearincomplete="true" v-inputmask="'+38 (999) 999-99-99'" type="tel" name="phone" id="phone" autocomplete="phone"  :disabled="sending" v-model="form.phone" />
                                            <span class="md-error" v-if="!$v.form.phone.required">The phone is required</span>
                                            <span class="md-error" v-else-if="!$v.form.phone.isPhone">Invalid phone</span>
                                        </md-field>
                                    </div>
                                </div>


                            </div>



                            <div>
                                <md-button type="submit" class="md-primary" :disabled="sending">Add to Cart</md-button>
                            </div>
                        </div>

                    </form>
                </md-tab>


            </md-tabs>

            <md-dialog-actions>
                <md-button class="md-primary" @click="$emit('close')">Close</md-button>
            </md-dialog-actions>
        </md-dialog>
</template>

<script>
	import {booksRef} from '../../firebaseApp';

	import SignIn from "../SignIn";
	import SignUp from "../SignUp";

    import { validationMixin } from 'vuelidate';
    import {
        required,
        email,
        minLength,
        maxLength
    } from 'vuelidate/lib/validators';
    import isPhone from '../../customValidators/isphone';

    import {mapActions} from 'vuex';



    export default {
        name: 'Card_popup',
        mixins: [validationMixin],
        props: ['book', 'showDialog'],
        data: () => ({
            form: {
                firstName: null,
                lastName: null,
                phone: null,
                email: null,
            },
            sending: false,
        }),
        validations: {
            form: {
                firstName: {
                    required,
                    minLength: minLength(3)
                },
                lastName: {
                    required,
                    minLength: minLength(3)
                },
                phone: {
                    required,
                    isPhone
                },
                email: {
                    required,
                    email
                }
            }
        },
        methods: {
            getValidationClass (fieldName) {
                const field = this.$v.form[fieldName]

                if (field) {
                    return {
                        'md-invalid': field.$invalid && field.$dirty
                    }
                }
            },
            clearForm () {
                this.$v.$reset()
                this.form.firstName = null
                this.form.lastName = null
                this.form.phone = null
                this.form.email = null
            },
            add () {
                this.sending = true

                // Instead of this timeout, here you can call your API
                window.setTimeout(() => {
                    this.sending = false;
                    this.clearForm();
	                this.$emit('close');

	                //to firebase
                    booksRef.push( this.book );
                }, 1500)
            },
            validateUser () {
                this.$v.$touch()

                if (!this.$v.$invalid) {
                    this.add()
                }
            }
        },
        components: {
	        SignIn,
	        SignUp
        },

    }
</script>