<template>

  <modal name="modalOrder"
         :draggable="true"
         :adaptive="true"
         :width="900"
         height="auto"
         :scrollable="true"
  >
    <div class="modal-container" id="modal-popup">
      <div class="modal-body">
        <button type="button" class="close" @click="$modal.hide('modalOrder')">&times;</button>
        <div class="header text-center">
          <h4>Order</h4>
        </div>
        <div class="col-md-12"><hr></div>
       <div class="row">
         <div class="col-md-3">
              <img v-bind:src="imageLink"/>
         </div>
         <div class="col-md-9">
              <p>{{ description }}</p>
         </div>
         <div class="col-md-12"><hr></div>
       </div>
        <div class="container">
          <div class="row justify-content-md-center">
            <div class="col-12 col-md-auto">
              <form v-on:submit="setOrder">
                <div class="form-group" v-bind:class="{ 'form-group--error': $v.nameCustomer.$error }">
                  <label for="text-input" class="col-md-auto">Name *</label>
                  <input type="text" id="text-input"
                         v-on:input="$v.nameCustomer.$touch"
                         v-bind:class="{error: $v.nameCustomer.$error, valid: $v.nameCustomer.$dirty && !$v.nameCustomer.$invalid}"
                         v-model="nameCustomer" placeholder="John Doe">
                </div>
                <!--<span class="form-group__message" v-if="!$v.nameCustomer.required">The name field is required!</span><span class="form-group__message" v-if="!$v.nameCustomer.minLength">Name must have at least {{$v.nameCustomer.$params.minLength.min}} letters.</span>-->
                <div class="form-group">
                  <label for="email-input" class="col-md-auto">Email *</label>
                  <input type="email" id="email-input"
                         v-on:input="$v.emailCustomer.$touch"
                         v-bind:class="{error: $v.emailCustomer.$error, valid: $v.emailCustomer.$dirty && !$v.emailCustomer.$invalid}"
                         v-model="emailCustomer" placeholder="example@email.com">
                </div>
                  <!--<span class="form-group__message" v-if="!$v.emailCustomer.required">The email field is required!</span><span class="form-group__message" v-if="!$v.emailCustomer.email">The input must be a proper email!</span>-->
                <div class="form-group">
                  <label for="tel-input" class="col-md-auto">Phone *</label>
                  <input type="tel" id="tel-input"
                         v-on:input="$v.phoneCustomer.$touch"
                         v-bind:class="{error: $v.phoneCustomer.$error, valid: $v.phoneCustomer.$dirty && !$v.phoneCustomer.$invalid}"
                         v-model="phoneCustomer" placeholder="+380xxxxxxxxx">
                </div>
                <!--<span class="form-group__message" v-if="!$v.phoneCustomer.required">The phone field is required!</span><span class="form-group__message" v-if="!$v.phoneCustomer.phone"></span>-->
                <div class="form-group text-center">
                  <button type="submit" class="btn btn-success">Add to cart</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

  </modal>
</template>

<script>
  import { required, minLength, email } from 'vuelidate/lib/validators'
  const phoneValid = (value) => /\+380\d{9}/.test(value);

    export default {
      name: "modal-popup",
      props: ['imageLink','description'],
      data(){
          return{
            nameCustomer: '',
            emailCustomer: '',
            phoneCustomer: ''
          }
      },
      validations: {
        nameCustomer: {
          required,
          minLength: minLength(4)
        },
        emailCustomer:{
          required,
          email
        },
        phoneCustomer:{
          required,
          phone: phoneValid
        }
      },

      methods:{
        setOrder(event){
          if(this.$v.nameCustomer.$invalid || this.$v.emailCustomer.$invalid || this.$v.phoneCustomer.$invalid){
            event.preventDefault();
          }
          else {
            event.preventDefault()
            this.$store.state.orderList.push({book: this.imageLink, name: this.nameCustomer, email: this.emailCustomer,phone: this.phoneCustomer, });
            this.$modal.hide('modalOrder');
            this.nameCustomer = '';
            this.emailCustomer = '';
            this.phoneCustomer = '';
          }


        }
      }

    }
</script>

<style scoped>

</style>
