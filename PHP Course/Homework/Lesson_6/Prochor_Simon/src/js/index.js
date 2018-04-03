import $ from 'jquery';
import 'jquery-validation';



class ByTicketForm {
    constructor( $node) {
        this.$form = $node;
        this.validInput = this.$form.find('input[name=validation]');
        this.validator = '';
        this.root = '/ajax.php';

        this.action();
    }



    action () {
        let rules = {
                firstname: "required",
                lastname: "required",
                type: "required",
                email: {
                    required: true,
                    email: true
                }
            };

        let params = {
            errorClass: "is-invalid",
            errorElement: "div",
            errorPlacement: function(error, element) {
                error.addClass('invalid-feedback').insertAfter(element);
            },
            submitHandler: (form)=> {
                let formData  = new FormData( form);

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

        params.rules = rules;
        this.validator = this.$form.validate(params);


        this.validInput.change((e)=> {
            this.validator.destroy();

            if (e.target.value == '0') {
                params.rules = null;
                this.validator = this.$form.validate(params);
            }
            else if (e.target.value == '1') {
                params.rules = rules;
                this.validator = this.$form.validate(params);
            }
        });

    }

}

$( document ).ready(function() {
    new ByTicketForm( $('#ticketby') );
});

