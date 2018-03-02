<template>
    <div class="form-inline">
        <h3>Sign Up</h3>

        <div class="form-group">
            <input
                    type="text"
                    placeholder="email"
                    class="form-control"
                    v-model="email"
            >
        </div>

        <div class="form-group">
            <input
                    type="text"
                    placeholder="password"
                    class="form-control"
                    v-model="password"
            >
        </div>

        <br>

        <button class="btn btn-primary" @click="signUp">Sign Up</button>


        <br>

        <router-link to="/signin">Already a user ? Sign In</router-link>


        {{ error.message }}
    </div>
</template>

<script>
    import {firebaseApp} from "../firebaseApp";

    export default {
        name: 'SignUp',
        data () {
            return {
                email: '',
                password: '',
                error: {
                    message: ''
                }
            }
        },
        methods: {
            signUp(){
                firebaseApp.auth().createUserWithEmailAndPassword(this.email, this.password)
                    .catch(error => {
                        this.error = error
                    })
            }
        }
    }
</script>