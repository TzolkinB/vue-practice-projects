<template>
	<div class="container-fluid mt-3">
	  <p>{{ header }}</p>
	  <button v-if="state === 'default'" class="btn btn-raised btn-danger" 
	  v-on:click="changeState('edit')">Add Item</button>
	  <span v-else></span>
	  <div v-if="state === 'edit'">
	  	<input type="text" v-model="newItem" v-on:keyup.enter="addItem(newItem)"placeholder="Enter an item here" />
	  	<button v-on:click="addItem(newItem)" v-bind:disabled="newItem.length === 0" class="btn btn-raised btn-success">Add Item</button>
	  	<!-- v-on can be shortened to @ -->
	  	<!-- example: @click="onAdd(newItem)" -->
	  </div>
    <ul>
      <li v-for="item in items">{{ item }}</li>
    </ul>
    <p v-if="items.length === 0">What? Nothing to do!?</p>
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
	        	this.items = [ ...this.items, newItem],
	        	//return (this.items.push(newItem));
	        	this.newItem = '' // clears input on enter
	        );
	      }
	      return console.log('oops no new item');
	    },
	    changeState(newState) {
	    	this.state = newState;
	    	this.newItem = '';
	    },
	  },
	  data() {
	  	return {
	  		state: 'default',
		  	header: "Vue To Do List",
		  	newItem: '',
		    items: [
		      
		    ],
	  	};
	  }
	};
</script>
