<template>
  <div class="container body" id="card-orders">
    <div class="row">
      <div class="col-md-12" v-for="(order, index) in $store.state.orderList">
        <div class="card-book ">
          <button class="close" @click="removeOrder(index)">&times;</button>
          <span><img class="imgList" v-bind:src="order.book"/></span>
          <span>{{ order.name }} /</span>
          <span>{{ order.email }} /</span>
          <span>{{ order. phone }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "card-orders",
        data(){
          return {

          };
        },
        methods:{
          removeOrder(index){
           this.$store.state.orderList.splice(index, 1)
          }
        }
    }
</script>

<style scoped>

</style>
