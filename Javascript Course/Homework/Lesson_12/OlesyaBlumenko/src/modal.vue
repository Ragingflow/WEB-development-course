<template>
  <div>

<form @submit.prevent="submit" style="margin: -250px 25%  ; position: absolute; z-index: 1000; border: 1px solid black; padding: 10px; background-color: white;"
class="" action="#">
<span style="float: right;" @click="$emit('close')">X</span>
  <img :src="src" />
  <p>Описание: {{description}}</p>
      <p>Имя:</p>
      <input type="text" name="name" v-model="order.name"
      v-validate =" 'required|min:2' ">

      <span v-show= "errors.has('name')">{{errors.first('name')}}</span>
      <p>Email:</p>
      <input type="email" name="email"  v-model="order.email"
       v-validate="'required|email'">


       <span v-show="errors.has('email')">{{ errors.first('email') }}</span>
      <p>Телефон</p>
      <input type="text" name = "phone" v-model="order.phone"
      v-validate =" 'required|min:10|max:13' " >

      <span v-show="errors.has('phone')">{{ errors.first('phone') }}</span>
      <input type="submit" @click = "createOrder" value="Отправить">

</form>

</div>
</template>

<script>


import {mapActions} from 'vuex'


export default {

  name: "Modal",
  props: ['src', 'description'],
  data () {
    return {
      order:{
        name:'',
        email: '',
        phone:'',
        image: ''
      }
    }
  },
  methods:{
  ...mapActions([
  'initOrder'
  ]),
    submit(){
      this.$validator.validateAll().then((res)=>{
        if(res){
          this.order.image = this.src;
          // this.$store.state.orders.push(this.order);
            this.initOrder($order);
          this.$emit('close');
        }

      })
    },
      createOrder(){
        this.initOrder($order);
      }
  }

}
</script>
