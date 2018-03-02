<template>
  <v-app  id="inspire">
    <app-header />
    <v-content>
      <router-view/>
    </v-content>
    <app-footer/>
  </v-app>
</template>

<script>
import Header from './components/shared/Header'
import Footer from './components/shared/Footer'

export default {
  name: 'App',
  components: {
  	'app-header': Header,
    'app-footer': Footer
  }
}
</script>
