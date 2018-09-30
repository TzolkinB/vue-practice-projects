<template>
	<div>
	  <p v-if="currentUsername == null">
	  	<!-- We use double equals rather than triple equals here because we want the conditional
	 to be true not only if currentUsername is null but also if it’s undefined, and null == undefined is true. -->
	    Enter a username above to see their Github data
	  </p>
	  <p v-else>
	    Below are the results for {{ currentUsername }}
	    <github-user-data v-bind:data="githubData[currentUsername]"></github-user-data>
	    <!-- data property passed down to the component with v-bind:data
	    The colon at the start of that attribute is crucial; it tells Vue that the attribute we’re passing down
	     is dynamic and that the component should be updated every time the data changes.
	    v-bind can also be shortened and written as :data= -->
	  </p>
	</div>
</template>

<script>
	import bus from '../../bus';
	import Vue from 'vue';
	import GithubUserData from '../GithubUserData/GithubUserData.vue';

	export default {
	  name: 'GithubOutput',
	  components: {
	    'github-user-data': GithubUserData,
	  }, 
	  created() {
	    bus.$on('new-username', this.onUsernameChange)
	  },
	  destroyed() {
	    bus.$off('new-username', this.onUsernameChange)
	  },
	  methods: {
	    onUsernameChange(name) {
	      this.currentUsername = name
	      this.fetchGithubData(name)
	    },
	    fetchGithubData(name) {
	      if (this.githubData.hasOwnProperty(name)) return

	      const url = `https://api.github.com/users/${name}`
	      fetch(url)
	        .then(r => r.json())
	        .then(data => {
	          console.log('data', data)
	          Vue.set(this.githubData, name, data)
	          // Vue.set method, which explicitly tells Vue that we’ve added a key
	      })
	    }
	  },
	  data() {
	    return {
	      currentUsername: null,
	      githubData: {}
	    };
	  }
	}

// "created" and "destroyed" are Vue lifecycle hooks: https://vuejs.org/v2/api/#Options-Lifecycle-Hooks

//All lifecycle hooks automatically have their this context bound to the instance, so that you can access data,
//computed properties, and methods. This means you should not use an arrow function to define a lifecycle method
//(e.g. created: () => this.fetchTodos()). The reason is arrow functions bind the parent context, so this will not
// be the Vue instance as you expect and this.fetchTodos will be undefined.

</script>
