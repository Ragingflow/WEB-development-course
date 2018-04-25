<template>
    <div class="container alert alert-success text-center">
        <h3>Cart</h3>
        <div class="container text-info" v-if="cart_data.length == 0">{{msg}}</div>
        <div class="row"
             v-else
             v-for="(cart_item, index) in cart_data"
             >
            <div class="col-sm-1">{{index+1}}).</div>
            <div class="col-sm-3">
                <img class="img-thumbnail" :src="cart_item.img" :alt="cart_item.title">
            </div>
            <div class="col-sm-8">
                <p class="lead">{{cart_item.title}}.</p>
                <span v-for="author in cart_item.authors">{{author}}</span>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "cart",
        props: ["cart_data"],
        data() {
            return {
                msg: "You have nothing ordered"
            }
        }
    }
</script>

<style scoped>
    .row{
        margin-bottom: 8px;
    }
</style>
