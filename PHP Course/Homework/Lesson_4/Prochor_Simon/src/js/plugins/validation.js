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

export {Validation};