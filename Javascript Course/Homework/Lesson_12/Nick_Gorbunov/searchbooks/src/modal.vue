<template>
    <div>
        <div class="modal">
            <div id="modal_form">
                <div id="description">
                    <img :src="books.items[id].volumeInfo.imageLinks.thumbnail" />
                    <p v-if="books.items[id].volumeInfo.description">{{books.items[id].volumeInfo.description}}</p>
                </div>
                <form id="form" onsubmit=" return false ">
                    <input class="order" type="text" name="name" v-model="$parent.name" placeholder="Имя" /><br>
                    <div class="error" v-show="$parent.name && !isNameValid">
                        <span>Используйте не менее двух символов</span></div>
                    <input class="order" type="email" name="email" v-model="$parent.email" placeholder="Email"/><br>
                    <div class="error" v-show="$parent.email && !isEmailValid">
                        <span>Используйте правильный формат email</span></div>
                    <input class="order" type="tel" name="phone" v-model="$parent.phone" placeholder="Телефон"/><br>
                    <div class="error" v-show="$parent.phone && !isPhoneValid">
                        <span>Используйте правильный формат телефона</span></div>
                    <button v-if="isNameValid && isEmailValid && isPhoneValid "
                            @click="showOrder = true"
                            >Отправить</button>
                    <button v-else disabled>Отправить</button>
                </form>
            </div>

        </div>
        <div id="overlay"></div>
        <div v-if="showOrder">
            <div class="modal">
                <div id="order">
                    <p class="title">Ваш заказ принят!</p>
                    <img :src="books.items[id].volumeInfo.imageLinks.thumbnail" />
                    <p class="title">{{books.items[id].volumeInfo.title}}</p>
                    <p class="info">Имя: {{$parent.name}}</p>
                    <p class="info">Email: {{$parent.email}}</p>
                    <p class="info">Телефон: {{$parent.phone}}</p>
                    <div>
                        <button @click="$emit('close')" style="padding: 5px 20px; margin: 5px">OK</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

     <script>
         import bookslist from './bookslist'
         import books from './books'

         export default {
             name: 'modal',
             props: ['books', 'id'],
             data(){
                 return{
                     modal: {},

                     initial_ids: [],
                     showOrder: false
                 }
             },
             computed: {
                 isEmailValid() {
                     return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.$parent.email);
                 },
                 isNameValid() {
                     return /[A-Za-z_-]{2,32}/.test(this.$parent.name);
                 },
                 isPhoneValid() {
                     return /^\+380\d{2}\d{3}\d{2}\d{2}$/.test(this.$parent.phone);
                 }
             },
             components: {
                 bookslist,
                 books
             }
         }

     </script>