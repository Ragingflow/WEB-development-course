<template>
    <div id="app">
        <h3>{{ title }}</h3>
        <Character
                v-for="(id, index) in initial_ids"
                :id="id"
                :key="index"
        />
    </div>
</template>


<script>
import Character from './components/Character.vue'


export default {
    name: 'app',
    data(){
        return {
            title: 'Generate your team',
            initial_ids: [1, 13, 4, 25, 23]
        }
    },
    methods: {

    },
    components: {
        Character
    }
}

</script>