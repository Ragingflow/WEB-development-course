import $ from 'jquery';
import 'jquery-validation';



class ByTicketForm {
    constructor( $node) {
        this.$form = $node;
        this.$captcha = this.$form.find('.captcha');
        this.validator = '';
        this.root = '/ajax.php';

        this.action();
    }

    getCaptcha () {
        $.ajax({
            url: this.root,
            data: {
                'action' : 'captcha'
            },
            type: 'POST',
        }).done(( response )=> {
            if(response) {
                this.$captcha.attr('src', `data:image/png;base64, ${response}`);
            }
        });
    }

    captcha () {
        if ( this.$captcha.length) {

            this.getCaptcha();

            $('.captcha_reload').on('click', (e)=>{
                e.preventDefault();
                this.getCaptcha();
            })


        };
    }



    action () {
        this.captcha();

        let params = {
            errorClass: "is-invalid",
            errorElement: "div",
            rules: null,
            errorPlacement: function(error, element) {
                error.addClass('invalid-feedback').appendTo(element.parent());
            },
            submitHandler: (form)=> {
                let formData  = new FormData( form);

                formData.append('action' , 'form');

                $.ajax({
                    url: this.root,
                    data: formData,
                    processData: false,  // tell jQuery not to process the data
                    contentType: false,   // tell jQuery not to set contentType
                    type: 'POST',
                    success:  ( json )=> {
                        if( json.errors ) {
                            this.validator.showErrors(json.errors);
                        }
                        if( json.sucsess ) {
                            this.$form[0].innerHTML = `<h2><span class="badge badge-success">${json.sucsess}</span></h2>`;
                        }
                    }
                });
            }
        };

        this.validator = this.$form.validate(params);

    }

}

$( document ).ready(function() {
    new ByTicketForm( $('#ticketby') );
});

