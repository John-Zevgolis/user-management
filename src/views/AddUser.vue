<template>
	<section class="py-4">
	  <div class="container">
	  	<div class="row">
	  		<div class="col-12">
	  			<h1>Add User</h1>
	  			<div class="row">
					<div class="col-md-6">
			  			<form @submit.prevent="addUser" class="mb-3">
			  				<div class="mb-3">
			  					<label for="username" class="mb-2">Username</label>
			  					<input 
			  						class="form-control" 
			  						type="text" 
			  						id="username" 
			  						v-model.trim="user.username" 
			  						placeholder="Username">
			  				</div>
			  				<div class="mb-3">
			  					<label for="name" class="mb-2">Fullname</label>
			  					<input 
			  						class="form-control" 
			  						type="text" id="name" 
			  						v-model.trim="user.name" 
			  						placeholder="Fullname">
			  				</div>
			  				<div class="mb-3">
			  					<label for="phone" class="mb-2">Phone</label>
			  					<input 
			  						class="form-control" 
			  						type="tel" id="phone" 
			  						v-model.trim="user.phone" 
			  						placeholder="Phone" 
			  						minlength="10"
			  						maxlength="10"
			  						@keypress="onlyNumbers">
			  				</div>
			  				<div class="mb-3">
			  					<label for="email" class="mb-2">E-mail</label>
			  					<input 
			  						class="form-control" 
			  						type="email" id="email" 
			  						v-model.trim="user.email" 
			  						placeholder="E-mail">
			  				</div>
			  				<div class="mb-3">
			  					<label for="city" class="mb-2">City</label>
			  					<input 
			  						class="form-control" 
			  						type="text" 
			  						id="city" 
			  						v-model.trim="user.address.city" 
			  						placeholder="City">
			  				</div>
			  				<div class="mb-3">
			  					<label for="street" class="mb-2">Street</label>
			  					<input 
			  						class="form-control" 
			  						type="text" 
			  						id="street" 
			  						v-model.trim="user.address.street" 
			  						placeholder="Street">
			  				</div>
			  				<div class="mb-3">
			  					<label for="suite" class="mb-2">Suite</label>
			  					<input 
			  						class="form-control" 
			  						type="text" 
			  						id="suite" 
			  						v-model.trim="user.address.suite" 
			  						placeholder="Suite" >
			  				</div>
			  				<button class="btn btn-primary">Submit</button>
			  			</form>
			  			<alert v-show="!formIsValid" mode="alert-danger" message="Please fill out all fields and submit again." role="alert"></alert>
			  		</div>
			  	</div>
	  		</div>
	  	</div>
	  </div>
	</section>
</template>

<script>
import { mixins } from '../mixins.js';

export default {
	mixins: [mixins],
	data() {
		return {
			user: {
				username: '',
				name: '',
				phone: '',
				email: '',
				address: {
					city: '',
					street: '',
					suite: ''
				}
			}
		};
	},
	methods: {
		addUser() {
			this.validateForm();

			if(!this.formIsValid) {
				return;
			}
			
			const newUser = {
				username: this.user.username,
				name: this.user.name,
				phone: this.user.phone,
				email: this.user.email,
				address: {
					city: this.user.address.city,
					street: this.user.address.street,
					suite: this.user.address.suite
				}
			};
			this.$store.dispatch('addUser', newUser);
		}
	}
}
</script>