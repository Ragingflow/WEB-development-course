<template>
  <div id="app">

    <h3>Got jokes?</h3>
    <button name="button" class="btn btn-primary" @click="initJokes">Add Ten Random Jokes</button>
    <button name="button" class="btn btn-primary" @click="addJoke">Add a Joke</button>

    <br>
    <span v-for="type in types">
      <input type="checkbox" :value="type" v-model="checkedTypes" checked>
      <label>{{type}}</label>
    </span>
    <div class="col-md-6" v-for="(joke, index) in $store.state.jokes">

    <Joke
      :joke = "joke"
      key="index"
      :index ="index"
      v-show="checkedTypes.includes(joke.type)"
    />

    </div>


  </div>
</template>

<script>

import {mapActions} from 'vuex'
import Joke from './components/Joke.vue'

export default {
  name: 'app',
  data () {
    return {
        types: ['general', 'knock-knock', 'programming'],
        checkedTypes: ['general', 'knock-knock', 'programming']

    }
  },
/*  methods: mapActions([
      'initJokes',
      'addJoke'
  ]),*/

/*    methods: {
        ...mapActions([
            'initJokes',
            'addJoke'
        ]),

        toggle() {
            this.show = !this.show;
        },
    },
}*/


    methods: Object.assign({},
        mapActions([
            'initJokes',
            'addJoke'
        ]),
        {
            toggle() {
                this.show = !this.show;
            }
        }
    ),



  components: {
      Joke
  }
}
</script>
