<template>
    <div class="container" id="app">
        <div class="row" style="padding-bottom:20px; margin-bottom:20px; border-bottom: 2px solid gray">
            <div class="col-md-9">
                <input class="form-control" v-model="searchRequest">
            </div>
            <div class="col-md-3">
                <button class="btn btn-block btn-primary" @click="getRequest">Search</button>
            </div>
        </div>
        <div class="row" v-if="ordersDone.length > 0">
            <div class="col-md-3"  v-for="order in ordersDone">
                <div class="card">
                    <img :src="order.imageLink">
                    <div><b>Name:</b> {{ order.name }}</div>
                    <div><b>Email:</b> {{ order.email }} </div>
                    <div><b>Phone:</b> {{ order.phone }}</div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-3"  v-for="(book, index) in books">
                <div class="card">
                    <img :src="book.volumeInfo.imageLinks.thumbnail" width="auto">
                    <div><b>Title:</b>  {{ book.volumeInfo.title }}</div>
                    <div><b>Authors:</b> <span v-for="author in book.volumeInfo.authors"> {{author}}<br> </span> </div>
                    <div><b>PublishedDate:</b> {{ formatDate(book.volumeInfo.publishedDate) }}</div>
                    <button class="btn btn-block btn-secondary btn-buy" data-toggle="modal" data-target=".bd-example-modal-sm" @click="setOrder(index)">BUY</button>
                </div>
            </div>
        </div>
        <div class="modal fade bd-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true" id="myModal">
            <div class="modal-dialog modal-sm">
                <div class="modal-content">
                    <h4>Order</h4>
                    <img :src="orderInfo.imageLink">
                    <div>{{ orderInfo.description }}</div>
                    <input class="form-control"  placeholder="Name" id="name" v-model="orderInfo.name">
                    <div v-if="!isNameValid" style="color:#ff0000">Name is not valid</div>
                    <input class="form-control"  placeholder="E-mail" id="email" v-model="orderInfo.email">
                    <div v-if="!isEmailValid" style="color:red">Email is not valid</div>
                    <input class="form-control"  placeholder="Phone (+380...)" id="phone" v-model="orderInfo.phone">
                    <div v-if="!isPhoneValid" style="color:red">Phone is not valid</div>
                    <button class="btn btn-block btn-primary" @click="makeOrder">BUY</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import jQuery from "jquery";

export default {
  name: 'app',
  data () {
    return {
        requestLink: "https://www.googleapis.com/books/v1/",
        searchRequest: "",
        books: null,
        orderInfo: {
            name: "",
            email: "",
            phone: "",
            imageLink: "",
            description: ""
        },
        ordersDone: [],
        isNameValid : true,
        isPhoneValid : true,
        isEmailValid : true
    }
  },
    methods:{
        getRequest: function(){
            let requestLink = this.requestLink,
                searchRequest = "volumes?q="+this.searchRequest,
                _this = this;
            jQuery.getJSON(requestLink+searchRequest)
                .done(function(data){
                    _this.books = data.items;
                    console.log(_this.books);
                });
        },
        formatDate(date){
            let dateForFormat = new Date(date);
            return  ('0' + dateForFormat.getDate()).slice(-2) + "." + ('0' + (dateForFormat.getMonth() + 1)).slice(-2) + "." + dateForFormat.getFullYear();
        },
        setOrder(index){
            this.orderInfo.imageLink = this.books[index].volumeInfo.imageLinks.thumbnail;
            this.orderInfo.description = this.books[index].volumeInfo.description;
        },
        makeOrder(){
            let emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            let phoneRegExp = /\+380\d{9}/;

            this.isNameValid = this.orderInfo.name.length >= 2;
            this.isEmailValid = emailRegExp.test(this.orderInfo.email);
            this.isPhoneValid = phoneRegExp.test(this.orderInfo.phone);

            if(this.isNameValid&&this.isEmailValid&&this.isPhoneValid){
                this.ordersDone.push(this.orderInfo);
                jQuery('#myModal').modal('hide');
            }
        }
    }
}
</script>