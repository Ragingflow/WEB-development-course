<template>
    <modal name="order_modal" height="auto" :scrollable="true">
        <div class="container" id="modal">
            <div class="header text-center">
                <h4>Order form</h4>
                <button type="button" @click="$modal.hide('order_modal')" class="close">&times;</button>
                <div class="col-md-12"><hr></div>
            </div>
            <div class="row">
                <div class="col-lg-3">
                    <img class="img-thumbnail" :src="modal_data.img" :alt="modal_data.title">
                </div>
                <div class="col-lg-9">
                    <p>{{modal_data.desc}}</p>
                </div>
                <div class="col-md-12"><hr></div>
            </div>
            <div class="container">
                <form>
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="John Doe"
                               v-model="name"
                               >
                        <span class="error" v-if="errors.name.length" v-for="error in errors.name">{{ error }}</span>
                    </div>
                    <div class="form-group">
                        <input type="email" class="form-control" placeholder="example@email.com"
                               v-model="email"
                               >
                        <span class="error" v-if="errors.email.length" v-for="error in errors.email">{{ error }}</span>
                    </div>
                    <div class="form-group">
                        <input type="tel" class="form-control" placeholder="+380xxxxxxxxx"
                               v-model="tel"
                               >
                        <span class="error" v-if="errors.tel.length" v-for="error in errors.tel">{{ error }}</span>
                    </div>
                    <div class="form-group text-center">
                        <button type="button" class="btn btn-success"
                                @click="checkForm"
                                >
                            Add to cart
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </modal>
</template>

<script>
    export default {
        name: "order",
        props: ["modal_data"],
        data() {
            return{
                errors: {
                    name: [],
                    email: [],
                    tel: []
                },
                name: null,
                email: null,
                tel: null
            }
        },
        methods: {
            checkForm: function (e) {
                this.errors.name = [];
                this.errors.email = [];
                this.errors.tel = [];
                if (!this.name) {
                    this.errors.name.push("Name required!");
                } else if (this.name.length < 2) {
                    this.errors.name.push("Name must include minimum 2 character!");
                }
                if (!this.email) {
                    this.errors.email.push("Email required!");
                } else if (!this.validEmail(this.email)) {
                    this.errors.email.push("Valid email required!");
                }
                if (!this.tel) {
                    this.errors.tel.push("Telephone required!");
                } else if (!this.validTel(this.tel)) {
                    this.errors.tel.push("Valid telephone required!");
                }
                if (!this.errors.name.length &&
                        !this.errors.email.length &&
                        !this.errors.tel.length)
                    this.$emit("toCart", this.modal_data);
            },
            validEmail: function (email) {
                var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(email);
            },
            validTel: function (tel) {
                var re = /\+380\d{9}$/;
                return re.test(tel);
            }
        }
    }
</script>

<style scoped>
    .header{
        position: relative;
        padding: 20px;
    }
    .header button{
        position: absolute;
        top: 10px;
        right: 10px;
    }
    .error{
        color: #bd2130;
    }
</style>
