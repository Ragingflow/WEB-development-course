import * as tingle from 'tingle.js/src/tingle';
import { Validation, ValidationConfig, ValidationUI } from 'bunnyjs/src/Validation';

ValidationConfig.classInputGroupError = 'is-invalid';
ValidationConfig.classError = 'invalid-feedback';

ValidationUI.toggleErrorClass = function(inputGroup) {
    inputGroup.getElementsByTagName('input')[0].classList.toggle(this.config.classInputGroupError);
};

Validation.init = function(form, inline = false, calback = false) {
	// disable browser built-in validation
	form.setAttribute('novalidate', '');

	form.addEventListener('submit', e => {
		e.preventDefault();
		const submitBtns = form.querySelectorAll('[type="submit"]');
		[].forEach.call(submitBtns, submitBtn => {
			submitBtn.disabled = true;
		});
		this.validateSection(form).then(result => {
			[].forEach.call(submitBtns, submitBtn => {
				submitBtn.disabled = false;
			});
			if (result === true) {
			    if( calback ) {
				    calback(e);
                } else {
				    form.submit();
                }
			} else {
				this.focusInput(result[0]);
			}
		})
	});

	if (inline) {
		this.initInline(form);
	}
};


let popup = new tingle.modal({
    footer: true,
    stickyFooter: true,
    closeMethods: ['overlay', 'button', 'escape'],
    closeLabel: "Close",
});



class ByTicketForm {
    constructor(node) {
        this.form = node;

        this.action();
    }

    action () {
	    Validation.init(this.form, true, function(e){
	        console.log(e);
        });
    }

}

new ByTicketForm( document.getElementById('ticketby') );

