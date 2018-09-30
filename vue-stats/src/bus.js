import Vue from 'vue'
const bus = new Vue()

export default bus

// For larger projects you'll want to use Vuex, but for now a message bus is sufficient.

//If the username is not empty, we want to let other components know that the data has changed.
//For this, we’ll use a message bus. These are objects that components can emit events on and listen
//to other events.
//The great news is that we can use an empty Vue instance as a message bus, as recommended in the Vue docs. 
//https://vuejs.org/v2/guide/state-management.html
//We’ll create src/bus.js which simply creates a Vue instance and exports it: