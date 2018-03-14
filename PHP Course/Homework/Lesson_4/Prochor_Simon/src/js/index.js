import * as tingle from 'tingle.js/src/tingle';
import { Validation } from './plugins/validation';


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

