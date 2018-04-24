$(document).ready(function () {
	$('#form').validate({
		rules: {
			name: {
				required:true,
				minlength: 2
			},
			lastname: {
				required:true,
				minlength: 2
			},
			email: {
				required:true,
				email:true
			}
		},
		messages: {
			name: {
				required:"Введите Ваше Имя",
				minlength: "Используйте не менее двух символов"
			},
			lastname: {
				required:"Введите Вашу Фамилию",
				minlength: "Используйте не менее двух символов"
			},
			email: {
				required:"Введите Ваш email",
				email:"Используйте правильный формат email"
			}
		},
		submitHandler: function(){
			$.ajax({
				type: "POST",
				url: "configReg.php",
				data: $('#form').serialize(),
				success: function(data) {
					$('.messages').html(data);
					$('.user_data').val('');
					$('#captcha').attr('src', 'configCaptcha.php?r=' + Math.random());
					$('#captchainput').val('');
				}
			})
		}
	});
});