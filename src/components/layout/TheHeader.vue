<template>
	<header>
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
		    <div class="container">
				<router-link class="navbar-brand" to="/">Users Management</router-link>
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav me-auto mb-2 mb-lg-0">
					  <li class="nav-item">
					    <router-link to="/" custom v-slot="{ href, isActive }"> 
					      <a class="nav-link" :class="{active: isActive}" :href="href">Home</a>
					    </router-link>
					  </li>
					  <li class="nav-item">
					    <router-link to="/about" custom v-slot="{ href, isActive }"> 
					      <a class="nav-link" :class="{active: isActive}" :href="href">About</a>
					    </router-link>
					  </li>
					</ul>
				</div>
				<ul class="navbar-nav ms-auto mb-2 mb-lg-0">
					<li class="nav-item">
					    <router-link to="/add" custom v-slot="{ href, isActive }"> 
					      <a class="nav-link" :class="{active: isActive}" :href="href">Add User</a>
					    </router-link>
					</li>
				</ul>
			</div>
		</nav>
	</header>
</template>