import Vue from 'vue'
import AppComponent from './components/App/App.vue'

const vm = new Vue({
  el: '#vue-app',
  components: {
    app: AppComponent,
  },
  render: h => h('app'), //h is a helper that creates elements, similar to React.createElement
})
