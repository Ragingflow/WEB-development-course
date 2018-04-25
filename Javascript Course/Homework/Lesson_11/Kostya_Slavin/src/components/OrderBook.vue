<template>

  <div v-if="book">
    <v-dialog v-model="dialog" persistent max-width="500px">
      <v-form>
      <v-card v-if="book.volumeInfo">
        <v-card-title>
          <v-flex xs3 align-left flexbox style="margin-right: 20px;">
            <v-card-media
                height="200px"
                :src="book.volumeInfo.imageLinks.smallThumbnail"
            >
              <v-container></v-container>
            </v-card-media>
          </v-flex>
          <v-flex xs8 align-end flexbox>
            <p>{{ book.volumeInfo.description }}</p>
          </v-flex>
        </v-card-title>
        <v-card-title>
          <span class="headline">Form order</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field 
                              label="Name"
                              type="text"
                              required
                              v-model.trim="name"
                              :error-messages="nameErrors"
                              @input="$v.name.$touch()"
                              @blur="$v.name.$touch()"
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field 
                              label="Email" 
                              type="email" 
                              hint="not published" 
                              required
                              v-model.trim="email"
                              :error-messages="emailErrors"
                              @input="$v.email.$touch()"
                              @blur="$v.email.$touch()"
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field 
                              label="Phone"
                              type="phone"
                              hint="format +380671234567"
                              required
                              v-model.trim="phone"
                              :error-messages="phoneErrors"
                              @keypress="inputRow($event)"
                              @input="$v.phone.$touch()"
                              @blur="$v.phone.$touch()"
                ></v-text-field>
              </v-flex>
              <v-flex xs9>
                <v-checkbox
                        label="Agree with terms and conditions"
                        v-model="checkbox"
                        :error-messages="checkboxErrors"
                        @change="$v.checkbox.$touch()"
                        @blur="$v.checkbox.$touch()"
                        required
                ></v-checkbox>
              </v-flex>
              <v-flex xs3 style="margin-top: 5px;">
                <a @click="showTerms">View Terms</a>
              </v-flex>
            </v-layout>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="grey darken-1" flat @click="clear">Close</v-btn>
          <v-btn
                  color="blue darken-1"
                  flat
                  @click="submit"
                  :disabled="$v.$invalid"
          >Send</v-btn>

        </v-card-actions>
      </v-card>
      </v-form>
    </v-dialog>

    <v-dialog v-model="terms" max-width="290">
      <v-card>
        <v-card-title class="headline">Want to use Google's books API?</v-card-title>
        <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text>
          <v-btn color="grey darken-1" flat="flat" @click.native="terms = false">Close</v-btn>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { validationMixin } from 'vuelidate'
import { orderValidate } from '../shared/mixins/order-validate'

  export default {
    mixins: [
        validationMixin,
        orderValidate
    ],
    computed: {
      ...mapGetters({
        book: 'getSelectedBook'
      }),
      dialog: {
        get() {
          return this.$store.getters.getDialogStatus
        },
        set(value) {
          this.$store.commit('changeDialogStatus')
        }
      }
    },
    methods: {
      inputRow(event) {
        let txt = String.fromCharCode(event.which);
        if (!txt.match(/[0-9.]/)) {
            this._snackBar.message({ message: 'Only digits' });
          return false;
        } else {
          var x = event.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,3})(\d{0,2})(\d{0,1})/);
          event.target.value = !x[2] ? x[1] : '+380(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '') + (x[4] ? '-' + x[4] : '');
        }
      }
    }
  }
</script>
