<template>
    <div class="row mb-4">
        <div class="col-4">
            <img
            :src="order.volumeInfo.imageLinks.smallThumbnail"
            class="img-thumbnail mr-2">
        </div>
        <div class="col-8">
            <p>
                <strong>{{ order.volumeInfo.title }}</strong></br>
                <small>{{ order.user.name }}</small></br>
                <small>${ order.user.email }</small></br>
                <small>${ order.user.phone }</small>
            </p>
        </div>
    </div>
</template>

<script>
  export default {
    props: ['order'],
    name: 'Cart',
  }
</script>