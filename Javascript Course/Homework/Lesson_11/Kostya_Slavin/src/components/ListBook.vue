<template>
<v-flex xs6 md2 >
  <v-card d-inline-flex style="margin: 10px;">
    <v-card-media
        class="white--text"
        height="200px"
        contain
        :src="book.volumeInfo.imageLinks.smallThumbnail"
    >
      <v-container>
      </v-container>
    </v-card-media>
    <v-card-title primary-title>
      <div>
        <h4 class="mb-3">{{ book.volumeInfo.title }}</h4>
        <div>
          <span
                v-for="author in book.volumeInfo.authors"
                :key="author.id">{{ author }}
          </span>
        </div>
        <div>
          <p style="font-style: italic;">{{ getDate(book.volumeInfo.publishedDate) }}</p>
        </div>
      </div>
    </v-card-title>
      <div class="text-xs-right">
      <v-btn
              flat
              color="blue"
              @click="buyBook(book)"
              slot="activator"
      >Order</v-btn>
      </div>
  </v-card>
</v-flex>
</template>


<script>
import * as moment from 'moment'

export default {
  props: ['book'],
  methods: {
    buyBook(book) {
      this.$store.commit('selectBook', book)
      this.$store.commit('changeDialogStatus')
    },
    getDate(date) {
      return moment(date, 'YYYY-MM-DD').format('DD.MM.YYYY')
    }
  }
}
</script>
