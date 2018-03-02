<template>
    <div class="col-md-4">
        <div class="event-card">
            <h4 class="card-title">{{event.title}}</h4>
            <div class="card-text">{{ event.description }}</div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Date: {{ event.date}}</li>
                <li class="list-group-item">Location: {{ event.location}}</li>
                <li class="list-group-item">Host: {{ event.email}}</li>
            </ul>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'EventItem',
        props: ['event'],
        data () {
            return {

            }
        },
    }
</script>