<template>
  <div class="page-container" id="app">

    <md-app >

      <md-app-toolbar class="md-large md-primary" md-elevation="1">

        <div class="md-toolbar-row">

          <div class="md-toolbar-section-start">
            <md-button class="md-icon-button" @click="toggleMenu" v-if="!menuVisible">
              <md-icon>menu</md-icon>
            </md-button>
          </div>

          <h2 class="md-title" id="router__title">
            <span>Home Work</span> <md-avatar class="md-avatar-icon md-small md-accent">12</md-avatar>
          </h2>

          <div class="md-toolbar-section-end">
            <md-menu>
              <md-button md-menu-trigger><md-icon>more_vert</md-icon></md-button>

              <md-menu-content>
                <md-menu-item v-if="!Object.keys($store.state.user).length" @click="showDialog = true">Log In</md-menu-item>
                <md-menu-item v-if="Object.keys($store.state.user).length" @click="signOut">Log Out</md-menu-item>
              </md-menu-content>
            </md-menu>


          </div>

        </div>
        <div class="md-toolbar-row">
          <div class="md-toolbar-section-start">
          </div>
          <md-autocomplete
                  class="search"
                  v-model="selectedBooks"
                  :md-options="books"
                  @md-changed="searchResult"
                  md-layout="box">
            <label>Search...</label>
          </md-autocomplete>
          <div class="md-toolbar-section-end">
          </div>
        </div>
      </md-app-toolbar>

      <md-app-drawer :md-fixed="true" :md-active.sync="menuVisible" md-persistent="mini">
        <md-toolbar class="md-transparent" md-elevation="0">

          <span>Navigation</span>

          <div class="md-toolbar-section-end">
            <md-button class="md-icon-button md-dense" @click="toggleMenu">
              <md-icon>keyboard_arrow_left</md-icon>
            </md-button>
          </div>
        </md-toolbar>

        <md-list>
          <md-list-item v-if="Object.keys($store.state.user).length ">
            <md-avatar class="md-avatar-icon md-small">
              <img src="https://t3.ftcdn.net/jpg/01/04/10/10/240_F_104101070_wbEDt3CmlzqnPbdmOlVCL7Q7yu9mCduz.jpg" alt="Avatar">
            </md-avatar>
            <span class="md-list-item-text">{{$store.state.user.email}}</span>
          </md-list-item>

          <md-list-item @click="$router.push('/')">
            <md-icon>move_to_inbox</md-icon>
            <span class="md-list-item-text">Dashboard</span>
          </md-list-item>

          <md-list-item v-if="Object.keys($store.state.user).length " @click="$router.push('/cart')" >
              <md-icon>delete</md-icon>
              <span class="md-list-item-text" >Cart</span>
            <md-avatar v-if="$store.state.cart.length" class="badge md-avatar-icon md-small md-primary">{{$store.state.cart.length}}</md-avatar>

          </md-list-item>

        </md-list>
      </md-app-drawer>

      <md-app-content>
        <router-view></router-view>
      </md-app-content>
    </md-app>

    <md-dialog :md-active.sync="showDialog" >
      <md-dialog-title>Log In</md-dialog-title>

      <md-tabs md-dynamic-height>
        <md-tab md-label="Sihn In">
          <SignIn @close="showDialog = false"></SignIn>
        </md-tab>

        <md-tab md-label="Sign Up">
          <SignUp @close="showDialog = false"></SignUp>
        </md-tab>

      </md-tabs>

      <md-dialog-actions>
        <md-button class="md-primary" @click="showDialog = false" >Close</md-button>
      </md-dialog-actions>
    </md-dialog>

    <md-snackbar :md-active.sync="userLogOut">The user was log out with success!</md-snackbar>
  </div>
</template>


<script>
    import { firebaseApp } from "./firebaseApp";

    import SignIn from "./components/SignIn";
    import SignUp from "./components/SignUp";

    import {mapActions} from 'vuex';

    export default {
        name: 'GoogleBooks',
        data: () => ({
            userLogOut: false,
            showDialog: false,
            menuVisible: false,
            selectedBooks: null,
            books: [
                'Java',
                'Meredith Palmer',
                'Star Wars'
            ],
            results: [],
            resultsBooks: []
        }),
        methods: {
            ...mapActions(['searchResult']),
            signOut(){
                this.$store.dispatch('signOut')
                firebaseApp.auth().signOut();
                this.userLogOut = true;
            },
            toggleMenu () {
                this.menuVisible = !this.menuVisible
            },
        },
        components: {
	        SignIn,
	        SignUp,
        },
	    mounted() {
            this.$store.dispatch('setCart');
	    }

    }


</script>

<style lang="scss" scoped>

  .badge {
    position: absolute;
    margin: auto;
    left: 38px;
    top: 0;
  }

  .search {
    max-width: 500px;
  }

  .page-container {
    min-height: 100vh;
  }

  .md-app {
    min-height: 100vh;
    border: 1px solid rgba(#000, .12);
  }


  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }


</style>