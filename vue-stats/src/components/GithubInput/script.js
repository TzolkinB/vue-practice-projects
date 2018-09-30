import bus from '../../bus';

export default {
  name: 'GithubInput',
  methods: {
    onSubmit(event) {
      if (this.username && this.username !== '') {
        bus.$emit('new-username', this.username)
        // emitting an event when the username changes:
        console.log(event.target[0].value)
      }
    }
  },
  data() {
    return {
      username: '',
    };
  }
}
