<template>
    <div>
        <div class="md-layout md-gutter" v-if="$store.state.cart.length">
            <div class="md-layout-item md-layout-item md-small-size-50 md-medium-size-30 md-size-30" v-for="(element, index) in $store.state.cart">
                <Card :book="element"
                      :incart="true"
                      :index="index"
                >
                </Card>
            </div>

        </div>

        <md-empty-state
                v-if="!$store.state.cart.length"
                md-rounded
                md-icon="delete"
                md-label="Cart is empty">
        </md-empty-state>
    </div>
</template>

<script>
    import Card from './books/Card.vue'

    import {firebaseApp} from '../firebaseApp';

    export default {
        name: 'Dashboard',
        data () {
            return {

            }
        },
        methods: {
            signOut(){
                this.$store.dispatch('signOut');
                firebaseApp.auth().signOut();
            }
        },

        components: {
            Card,
        },

    }
</script>

