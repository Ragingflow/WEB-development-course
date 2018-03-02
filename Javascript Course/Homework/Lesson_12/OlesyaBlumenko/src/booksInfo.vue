<template>
  <div >
    <img :src= "book.volumeInfo.imageLinks.smallThumbnail"/>
    <h3>{{book.volumeInfo.title}}</h3>
    <p  v-for="authors in book.volumeInfo.authors">Автор: {{authors}}</p>
    <p>Год выпуска: {{book.volumeInfo.publishedDate}}</p>
    <button type="button" :modal = "modal" name="button" @click = "modal = true">Заказать</button>



    <Modal v-if="modal" @close="modal = false"
           :src = "book.volumeInfo.imageLinks.smallThumbnail"
           :description = "book.volumeInfo.description" />

  </div>



</template>

<script>
import Modal from "./modal.vue"

export default {
  name:"BooksInfo",
  props: ['book'],
  data () {
    return {
    modal: false
    }
  },
  components:{
   Modal
  }
}
</script>
