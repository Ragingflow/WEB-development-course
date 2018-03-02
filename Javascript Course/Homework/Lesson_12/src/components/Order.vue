<template>
	<div>
		<div class = "form">
			<form id="order-form" @submit="checkForm" novalidate="true">
				<div v-if="errors.length">
				    <b>Пожалуйста введите коректные данные:</b>
				    <ul>
				    	<li v-for="error in errors">{{ error }}</li>
				    </ul>
				</div>
				<div><input type="text" name="name" id="name" v-model="name" placeholder="Ваше имя"></div>
				<div><input type="email" name="email" id="email" v-model="email" placeholder="Ваш email"></div>
				<div class = "phone"><input type="tel" name="phone" id="phone" v-model="phone" placeholder="Ваш телефон"></div>
				<div><button id = "make-order">Оформить заказ</button></div>
			</form>
		</div>
	</div>
</template>

<script>

export default{
	name: 'Order',
	data(){
		return{
			errors:[],
		    name:null,
		    email:null,
		    phone:null
	    }
	},
	methods:{
    checkForm:function(e) {
		this.errors = [];
		if(!this.name) {
		    this.errors.push("Поле 'Имя' обязательно");
		} else if(!this.validName(this.name)) {
		    this.errors.push("Введите настоящее имя");
		}
		if(!this.phone) {
		    this.errors.push("Поле 'телефон' обязательно");
		} else if(!this.validPhone(this.phone)) {
		    this.errors.push("Введите корректный телефон");
		}
		if(!this.email) {
		    this.errors.push("Поле 'email' обязательно");
		} else if(!this.validEmail(this.email)) {
		    this.errors.push("Введите корректный email");
		}
		if(!this.errors.length) return true;
		e.preventDefault();
		},
		validEmail:function(email) {
			let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			return re.test(email);
		},
		validPhone:function(phone) {
			let re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3}$/i;
			return re.test(phone);
		},
		validName:function(name) {
			let re = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u;
			return re.test(name);
		}
  	}
}
</script>

<style>
input {
	margin: 2px 0px;
	border: 1px solid grey;
	width: 200px;
	height: 30px;
	text-align: center;
	color: black;
}
.phone {
	position: relative;
	width: fit-content;
	margin: 0 auto;
}
.phone:before {
	position: absolute;
	content: "+380";
	left: -40px;
	top: 50%;
	transform: translateY(-50%);
}
#make-order {
	width: 200px;
	height: 40px;
	background: green;
	font-size: 20px;
	color: white;
	border: none;
	cursor: pointer;
	outline: none;
}
</style>