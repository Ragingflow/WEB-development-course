<template>
  <div class="row mb-4" v-if="order.item.volumeInfo">
    <div class="col-4">
      <img
      :src="order.item.volumeInfo.imageLinks.smallThumbnail"
      class="img-thumbnail mr-2">
    </div>
    <div class="col-8">
      <p>
        <strong>{{ order.item.volumeInfo.title }}</strong><br>
        <small>{{ order.name }}</small><br>
        <small>{{ order.email }}</small><br>
        <small>{{ order.phone }}</small>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'order',
    'name',
    'email',
    'phone',
  ],
  name: 'Item',
};
</script>
