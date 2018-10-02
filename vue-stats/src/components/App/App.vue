<template>
	<div class="container-fluid mt-3">
	  <p>Hello World</p>
	  <github-input></github-input>
	  <github-output></github-output>
	</div>
</template>

<script>
	import GithubInput from '../GithubInput/GithubInput.vue';
	import GithubOutput from '../GithubOutput/GithubOutput.vue';


	export default {
	  name: 'App',
	  components: {
	    'github-input': GithubInput,
	    'github-output': GithubOutput
	  },
	  data() {
	    return {}
	  },
	}
</script>