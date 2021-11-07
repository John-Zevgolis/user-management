<template>
	<div class="alert alert-dismissible fade show" role="alert" :class="mode">
	  {{message}}
	  <button v-if="hasBtn" type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
	</div>
</template>

<script>
export default {
	props: {
		message: {
			type: String,
			required: true
		},
		mode: {
			type: String,
			required: true
		},
		hasBtn: {
			type: Boolean,
			default: false
		}
	}
}
</script>