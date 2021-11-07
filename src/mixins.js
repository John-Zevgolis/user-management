export const mixins = {
	data() {
		return {
			formIsValid: true
		}
	},
	methods: {
		onlyNumbers(evt) {
		  var theEvent = evt || window.event;

		  // Handle paste
		  if (theEvent.type === 'paste') {
		      key = event.clipboardData.getData('text/plain');
		  } else {
		  // Handle key press
		      var key = theEvent.keyCode || theEvent.which;
		      key = String.fromCharCode(key);
		  }
		  var regex = /[0-9]|\./;
		  if( !regex.test(key) ) {
		    theEvent.returnValue = false;
		    if(theEvent.preventDefault) theEvent.preventDefault();
		  }
		},
		validateForm() {
			this.formIsValid = true;
			if(this.user.username === '' 
				|| this.user.name === ''
				|| this.user.phone === '' || this.user.phone.length < 10
				|| this.user.email === '' || !this.user.email.includes('@')
				|| this.user.address.city === ''
				|| this.user.address.street === ''
				|| this.user.address.suite === '') {
				this.formIsValid = false;
			}
		},
	}
};