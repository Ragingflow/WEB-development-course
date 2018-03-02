<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container clearfix">
          <div><img class = "modal-img" :src='this.book.volumeInfo.imageLinks.thumbnail'></div>
          <div>{{this.book.volumeInfo.description}}</div>
          <Order />
          <button class="modal-default-button" @click="$emit('close')">
            x
          </button>

        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import Order from './Order.vue'
export default{
  name: 'Modal',
  props: ['book'],
  
  components: {
    Order
  }
}
</script>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 700px;
  margin: 0px auto;
  padding: 10px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  position: relative;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  position: absolute;
  top: 0px;
  right: 0px;
  background: none;
  outline: none;
  cursor: pointer;
  border: none;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
.modal-img {
 float: left;
 margin: 5px 10px 10px 0px;
}
.clearfix::after {
  content: "";
  display: table;
  clear: both;
}
</style>