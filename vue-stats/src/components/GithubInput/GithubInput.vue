<template>
	<form v-on:submit.prevent="onSubmit"> 
	  <!-- v-on is how we bind to DOM events in Vue and call a function -->
	  <input type="text" v-model="username" placeholder="Enter a github username here" />
	  <!-- v-model creates a two-way data binding between a form input and a piece of
	    data. Behind the scenes, v-model is effectively listening for change events on
	    the form input and updating the data in the Vue component to match. -->
	  <button type="submit">Search</button>
	</form>
</template>

<script>
	import bus from '../../bus';

	export default {
	  name: 'GithubInput',
	  methods: {
	    onSubmit(event) {
	      if (this.username && this.username !== '') {
	        bus.$emit('new-username', this.username)
	        // emitting an event when the username changes:
	        console.log('input', event.target[0].value)
	      }
	    }
	  },
	  data() {
	    return {
	      username: '',
	    };
	  }
	}
</script>