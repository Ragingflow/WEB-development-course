<template>
    <div class="joke-card">
        <div class="card-block">
            <button class="close" @click="removeJoke(index)">x</button>
            <p>
                <u>{{ joke.setup }}</u>
            </p>
            <p>
                <em>{{ joke.punchline }}</em>
            </p>
        </div>
    </div>
</template>


<script>
    import {mapActions} from 'vuex'

    export default {
        props: ['joke', 'index'],
        methods: mapActions([
            'removeJoke'
        ])

    }
</script>