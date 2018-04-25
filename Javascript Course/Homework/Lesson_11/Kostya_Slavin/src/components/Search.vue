<template>
    <v-flex xs4>
      <v-card-text>
        <v-container fluid>
          <v-layout row>
            <v-flex xs8>
              <v-text-field
                name="search"
                label="Search book"
                v-model.trim="search"
              ></v-text-field>
            </v-flex>
            <v-flex xs2>
              <v-btn 
                      flat
                      color="primary"
                      @click="searchBooks(search)"
              >Search</v-btn>
            </v-flex>

          </v-layout>
        </v-container>
      </v-card-text>
  </v-flex>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions([
      'searchBooks'
    ])
  },
  computed: {
    search: {
      get() {
        return this.$store.getters.searchValue
      },
      set(value) {
        this.$store.commit('setSearchQ', value)
      }
    }
  }
}
</script>
