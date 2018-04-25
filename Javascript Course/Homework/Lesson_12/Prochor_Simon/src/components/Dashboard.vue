<template>
    <div>

        <div class="md-layout md-gutter" v-if="$store.state.searchResult.items.length">
            <div class="md-layout-item md-layout-item md-small-size-50 md-medium-size-30 md-size-30" v-for="(element) in $store.state.searchResult.items">
                <Card :book="element"></Card>
            </div>

        </div>


        <md-progress-bar v-if="$store.state.searchResult.status" md-mode="indeterminate"></md-progress-bar>

        <md-empty-state
                v-if="!$store.state.searchResult.status && !$store.state.searchResult.items.length"
                md-rounded
                md-icon="youtube_searched_for"
                md-label="Nothing found">
        </md-empty-state>
    </div>
</template>

<script>
    import Card from './books/Card.vue'
    import {mapActions} from 'vuex';

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
        }
    }
</script>

<style lang="scss" scoped>

</style>