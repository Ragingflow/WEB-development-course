<template>
 <div class="container body" id="book-list">
   <div class="row">
       <div class="col-md-12" v-for="(book, index) in $store.state.books.items">
         <div class="card-book">
           <span><img class="imgList" v-bind:src="book.volumeInfo.imageLinks.thumbnail"/></span>
           <span>{{ book.volumeInfo.title }} /</span>
           <span v-for="authors in book.volumeInfo.authors">{{ authors }} /</span>
           <span>{{ conversionDate(book.volumeInfo.publishedDate) }}</span>
           <span><button type="button" class="btn btn-primary" @click="showModalOrder(index)">Buy</button></span>
         </div>
       </div>
   </div>

   <modal-popup
     v-bind:imageLink="imageLink"
     v-bind:description="description"

   >
   </modal-popup>

 </div>

</template>

<script>

  import ModalPopup from './ModalPopup'

    export default {
       name: "book-list",
       data(){
          return{
            imageLink: '',
            description: ''

          }
       },
       methods:{
         conversionDate(date){
           let newDate = new Date(date);
           if(date==undefined) return '';
           return ('0' + newDate.getDate()).slice(-2) + '.' + ('0' + (newDate.getMonth() + 1)).slice(-2) + '.' + newDate.getFullYear()
         },
         showModalOrder(index){
           this.$modal.show('modalOrder');
           this.imageLink = this.$store.state.books.items[index].volumeInfo.imageLinks.thumbnail;
           this.description = this.$store.state.books.items[index].volumeInfo.description;
         }
       },
      components:{
         ModalPopup
      }
    }
</script>

<style scoped>

</style>
