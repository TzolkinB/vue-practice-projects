<template>
	<div class="container-fluid mt-3">
	  <p>{{ header }}</p>
	  <input type="text" v-model="newItem" v-on:keyup.enter="addItem(newItem)"placeholder="Enter a todo item here" />
	  <button v-on:click="addItem(newItem)">Add</button>
	  <!-- v-on can be shortened to @ -->
	  <!-- example: @click="onAdd(newItem)" -->
    <ul>
      <li v-for="todo in todos">{{ todo }}</li>
    </ul>
	</div>
</template>

<script>
	export default {
	  name: 'ToDo',
	  methods: {
	    addItem(newItem) {
	      if (newItem && newItem !== '') {
	        console.log('input', newItem);
	        return(
	        	this.todos = [ ...this.todos, newItem],
	        	//return (this.todos.push(newItem));
	        	this.newItem = '' // clears input on enter
	        );
	      }
	      return console.log('oops no new item');
	    }
	  },
	  data() {
	  	return {
		  	header: "Vue To Do List",
		  	newItem: '',
		    todos: [
		      "Thing 1",
		      "Thing 2",
		      "Thing 3",
		      "Thing 4",
		    ],
	  	};
	  }
	};
</script>
