<template>
	<section class="py-4" v-if="user">
	  <div class="container">
	  	<div class="row">
	  		<div class="col-12">
	  			<router-link to="/users">Back</router-link>
	  			<h1 class="d-flex align-items-center mb-3">
	  				<span>{{user.name}}</span>
	  				<router-link class="btn btn-dark ms-auto me-2" :to="`/edit/${this.$route.params.id}`">Edit</router-link>
	  				<button class="btn btn-danger" @click="deleteUser">Delete</button>
	  			</h1>
	  			<ul class="list-group">
				    <li class="list-group-item">
				  		<i class="bi bi-telephone me-2"></i>
						<span>{{user.phone}}</span>
					</li>
					<li class="list-group-item">
				  		<i class="bi bi-envelope me-2"></i>
						<span>{{user.email}}</span>
					</li>
				</ul>
				<h3 class="my-3">Address</h3>
	  			<ul class="list-group">
				  <li class="list-group-item">{{user.address.city}}</li>
				  <li class="list-group-item">{{user.address.street}}</li>
				  <li class="list-group-item">{{user.address.suite}}</li>
				</ul>
	  		</div>
	  	</div>
	  </div>
	</section>
</template>

<script>
export default {
	methods: {
		loadUser() {
			this.$store.dispatch('fetchUser', this.$route.params.id);
		},
		deleteUser() {
			this.$store.dispatch('deleteUser', this.$route.params.id);
		}
	},
	created() {
		this.loadUser();
	},
	computed: {
		user() {
			return this.$store.getters.user;
		}
	}
}
</script>