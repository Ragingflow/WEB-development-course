<template>
  <div v-if="order">
    <v-flex xs12 md12 style="margin-bottom: 20px; margin-left: 10px;">
    <v-card>
      <v-list>
        <v-list-tile>
          <v-list-tile-avatar>
            <img :src="order.book.volumeInfo.imageLinks.smallThumbnail"/>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>{{ order.book.volumeInfo.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile >
          <v-list-tile-action>
            <v-icon color="indigo">account_circle</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ order.name }}</v-list-tile-title>
            <v-list-tile-sub-title>Contact person</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile >
          <v-list-tile-action>
            <v-icon color="indigo">mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ order.email }}</v-list-tile-title>
            <v-list-tile-sub-title>Personal email</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile >
          <v-list-tile-action>
            <v-icon color="indigo">phone</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ order.phone }}</v-list-tile-title>
            <v-list-tile-sub-title>Phone number</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-card-actions>
        <v-btn
                color="red darken-1"
                flat
                @click="deleteOrder(order.id)"
        >Delete order</v-btn>
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
    </v-flex>
  </div>
</template>

<script>

export default {
    props:['order'],
    methods: {
        deleteOrder(id) {
            this.$store.dispatch('deleteOrder', id)
        }
    }
}
</script>
