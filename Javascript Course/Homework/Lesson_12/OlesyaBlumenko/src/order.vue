<template>
  <div>
    <img :src= "item.image"/>
    <p>{{item.name}}</p>
    <p>{{item.email}}</p>
    <p>{{item.phone}}</p>
  </div>
</template>

<script>
export default{
  name: 'Order',
  props:['item'],
  data(){
    return{

    }
  }
}

</script>
