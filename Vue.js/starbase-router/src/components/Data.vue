<template>
    <div class="col-12">
       <Item
               v-for="(item, index) in items"
               :key="index"
               :passedItem="item"
               :type="type"

       />
    </div>
</template>

<script>

import Item from './Item.vue'

export default  {
    data() {
        return {
            type: this.$route.params.type,
            items: []
        }
    },
    watch: {
        '$route' : 'fetchItems'
    },
    methods: {

        fetchItems(){
            this.items = [];
            let initial_ids = [1, 13, 14];
            this.type = this.$route.params.type

            for(let i in initial_ids){
                let id = initial_ids[i];


                let url = new URL('http://mediator.local'),
                    params = { apiUrl: `http://swapi.co/api/${this.type}/${id}` }
                Object.keys(params).forEach(key=> url.searchParams.append(key, params[key]))

                fetch(url, {
                    method: 'GET'
                }).then(
                    response => response.json())
                // .then(json=>console.log(json))
                .then(json=>this.items.push(json))



            }
        }
    },
    created() {
        this.fetchItems();
    },
    components: {
        Item
    }
}
</script>