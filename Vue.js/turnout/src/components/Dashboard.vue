<template>
    <div>
        <h3>Dashboard</h3>
        <button class="btn btn-danger btn-sm signout-btn" @click="signOut">Sign Out</button>

        <hr>

        <AddEvent />

        <div class="col-md-12">
            <EventItem
                v-for="(event, index) in $store.state.events"
                :event="event"
                :key="index"

            />

        </div>


    </div>
</template>

<script>
    import { firebaseApp, eventsRef } from "../firebaseApp";

    import AddEvent from './AddEvent.vue'
    import EventItem from './EventItem.vue'

    export default {
        name: 'Dashboard',
        data () {
            return {

            }
        },
        methods: {
            signOut(){
                this.$store.dispatch('signOut')
                firebaseApp.auth().signOut();
            }
        },
        components: {
            AddEvent,
            EventItem
        },
        mounted() {
            eventsRef.on('value', snap => {
                let events = [];
                snap.forEach(
                    event => {
                        events.push(event.val())
                    }
                );
                this.$store.dispatch('setEvents', events);
            })
        }

    }
</script>