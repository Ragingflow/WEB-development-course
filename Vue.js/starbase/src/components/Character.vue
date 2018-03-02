<template>
    <div @click="switchCharacter" class="col-md-4">
        <!--<button class="btn btn-primary" @click="fetchCharacter">Test</button>-->
        <div class="character-card">
            <h4 class="card-title">{{character.name}}</h4>
            <p class="card-text">Height: {{character.height}}cm</p>
            <p class="card-text">Mass: {{character.mass}}kg</p>
            <p class="card-text">Hair Color: {{character.hair_color}}</p>
            <p class="card-text">Eye Color: {{character.eye_color}}</p>
        </div>
    </div>

</template>

<script>
    export default {
        name: 'Character',
        props: ['id'],
        data(){
            return {
               character: {}
            }
        },
        methods: {
            fetchCharacter(id) {
                /*
                  fetch('http://swapi.co/api/people', {
                      method: 'GET'
                  }).then(
                      response => console.log(response)
                  )
                  */
                let url = new URL('http://mediator.local'),
                    params = { apiUrl: `http://swapi.co/api/people/${id}` }
                Object.keys(params).forEach(key=> url.searchParams.append(key, params[key]))

                fetch(url, {
                    method: 'GET'
                }).then(
                    response => response.json())
                    //.then(json=>console.log(json))
                    .then(json=>this.character = json)
            },
            switchCharacter(){
                let random = Math.floor(Math.random() * 86) + 1;
                this.fetchCharacter(random);

            }
        },
        created(){
            this.fetchCharacter(this.id)
        }
    }


</script>