// import { computed, observer } from '@ember/object';
import Controller from '@ember/controller';
import { match, not } from '@ember/object/computed';

export default Controller.extend({
	
	headerMessage:'Coming Soon!',
	responseMessage: '',
	emailAddress: '',

	// isDisabled: computed('emailAddress', function() {
 //    	return this.get('emailAddress') === '';
 //  	}),

	// isDisabled: empty('emailAddress'),
	isValid: match('emailAddress', /^.+@.+\..+$/),
  	isDisabled: not('isValid'),

	actions: {

    saveInvitation() {
      alert(`Saving of the following email address is in progress: ${this.get('emailAddress')}`);
      this.set('responseMessage', `Thank you! We've just saved your email address: ${this.get('emailAddress')}`);
      this.set('emailAddress', '');
    }
  }

});
