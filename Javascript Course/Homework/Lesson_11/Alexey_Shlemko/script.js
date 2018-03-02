$(document).ready(function(){
  var vm = new Vue({
    el: '#app',
    data: {
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
    },
    methods: {
      getRequest: function(){
        var requestLink = this.requestLink,
        searchRequest = "volumes?q="+this.searchRequest;
        $.getJSON(requestLink+searchRequest)
        .done(function(data){
          vm.books = data.items;
          console.log(vm.books);
        });
      },
      formatDate(date){
        var dateForFormat = new Date(date);
        return  ('0' + dateForFormat.getDate()).slice(-2) + "." + ('0' + (dateForFormat.getMonth() + 1)).slice(-2) + "." + dateForFormat.getFullYear();
      },
      setOrder(index){
        this.orderInfo.imageLink = this.books[index].volumeInfo.imageLinks.thumbnail;
        this.orderInfo.description = this.books[index].volumeInfo.description;
      },
      makeOrder(){
        var emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var phoneRegExp = /\+380\d{9}/;

        if(this.orderInfo.name.length >= 2){
          this.isNameValid = true;
        }else{
          this.isNameValid = false;
        }

        if (emailRegExp.test(this.orderInfo.email)) {
          this.isEmailValid = true;
        }else{
          this.isEmailValid = false;
        }

        if (phoneRegExp.test(this.orderInfo.phone)) {
          this.isPhoneValid = true;
        }else{
          this.isPhoneValid = false;
        }

        if(this.isNameValid&&this.isEmailValid&&this.isPhoneValid){
          this.ordersDone.push(this.orderInfo);
          jQuery('#myModal').modal('hide');
        }
      }
    }
  });
});
