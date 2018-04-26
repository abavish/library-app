import Controller from '@ember/controller';
import { match, not, empty, and, notEmpty, gte } from '@ember/object/computed';

export default Controller.extend({
	contactEmail: '',
	message: '',
	isValid: match('contactEmail', /^.+@.+\..+$/),
	unEmpty: notEmpty('contactEmail'),
	unEmptyMsg: notEmpty('message'),
	responseMessage: '',
	isLongEnough: gte("message.length", 5),


	isNotDisabled: and('isValid', 'unEmpty', 'unEmptyMsg', 'isLongEnough'),
	isDisabled: not('isNotDisabled'),

	actions: {
		sendMessage(){
			alert(`Email address: ${this.get('contactEmail')} and the message sent: ${this.get('message')}`);
			this.set('contactEmail','');
			this.set('message','');
			this.set('responseMessage',`We got your message and we'll get back to you soon`);
		}
	}
});
