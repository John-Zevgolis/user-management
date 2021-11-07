<template>
	<section class="py-4">
	  <div class="container">
	  	<div class="row">
	  		<div class="col-12">
  				<alert v-if="alert" mode="alert-warning" :message="message" :hasBtn="true"></alert>
	  			<h1>Manage Users</h1>
	  			<hr>
	  			<input type="text" class="form-control" v-model="filterInput" placeholder="Search by Name">
	  			<table class="table table-striped mt-1">
				  <thead>
				    <tr>
				      <th scope="col">Username</th>
				      <th scope="col">Name</th>
				      <th scope="col">Email</th>
				      <th scope="col"></th>
				    </tr>
				  </thead>
				  <tbody>
				    <tr v-for="user in filteredUsers" :key="user.id">
				    	<td>{{user.username}}</td>
				    	<td>{{user.name}}</td>
				    	<td>{{user.email}}</td>
				    	<td>
				    		<router-link class="btn btn-outline-secondary" :to="`/users/${user.key}`">View</router-link>
				    	</td>
				    </tr>
				  </tbody>
				</table>
	  		</div>
	  	</div>
	  </div>
	</section>
</template>

<script>
export default {
	data() {
		return {
			message: '',
			alert: false,
			filterInput: '',
			timeout: null
		}
	},
	created() {
		if(this.$route.query.alert) {
			this.alert = true;
			this.message = this.$route.query.alert;
		}
		this.loadUsers();
	},
	methods: {
		loadUsers() {
			this.$store.dispatch('fetchUsers');
		}
	},	
	computed: {
		filteredUsers() {
			const users = this.$store.state.users;
			const value = this.filterInput.charAt(0).toUpperCase() + this.filterInput.slice(1);
			return users.filter(user => {
				return user.name.indexOf(value) > -1;
			});
		}
	}
}
</script>
