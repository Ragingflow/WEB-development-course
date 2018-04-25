<template>
    <div id="app" class="container text-center">
        <h1>{{title}}</h1>
        <div class="row alert alert-primary">
            <div class="col-sm-5">
                <form class="text-center" @submit="fetchBook">
                    <div class="form-group">
                        <input type="text" class="form-control" autofocus v-model="search_query"/>
                        <span class="error" v-if="empty_query">{{msg}}</span>
                    </div>
                    <button type="submit" class="btn btn-primary">Find</button>
                </form>
            </div>
            <div class="col-sm-7">
                <cart
                    :cart_data="to_cart"
                    />
            </div>
        </div>
        <result :res="to_res"
            @onOrder="onOrder"
            />
        <modal :modal_data="to_modal"
            @toCart="toCart"
            />
    </div>
</template>

<script>
    import result from "./components/Result.vue";
    import cart from "./components/Cart.vue";
    import modal from "./components/Modal.vue";
    export default {
        name: "app",
        data() {
            return {
                title: "Search in GoogleBooks",
                search_query: "",
                empty_query: false,
                msg: "Request can not be empty",
                to_res: {
                    state: "no_search",
                    books: {}
                },
                to_modal: {
                    title: "",
                    desc: "",
                    img: ""
                },
                to_cart: []
            }
        },
        components: {
            result,
            cart,
            modal
        },
        methods: {
            fetchBook: function (e) {
                e.preventDefault();
                if (this.search_query != "") {
                    this.empty_query = false;
                    let apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${this.search_query}`;
                    fetch(apiUrl, {
                        method: "GET"
                    })
                            .then(response => response.json())
                            .then(json => this.to_res.books = json)
                            .then(this.to_res.state = "success");
                } else {
                    this.empty_query = true;
                }
            },
            show() {
                this.$modal.show("order_modal");
            },
            hide() {
                this.$modal.hide("order_modal");
            },
            onOrder(item) {
                this.to_modal.title = item.volumeInfo.title;
                this.to_modal.authors = item.volumeInfo.authors;
                this.to_modal.desc = item.volumeInfo.description;
                this.to_modal.img = item.volumeInfo.imageLinks.smallThumbnail;
                this.show();
            },
            toCart(item_to_cart) {
                this.hide();
                this.to_cart.push({
                    title: item_to_cart.title,
                    authors: item_to_cart.authors,
                    img: item_to_cart.img
                });
                console.log(item_to_cart);
            }

        }
    }
</script>

<style scoped>
    #app{
        margin-top: 20px;
    }
    .row{
        margin-bottom: 20px;
    }
    .error{
        color: #bd2130;
    }
</style>
