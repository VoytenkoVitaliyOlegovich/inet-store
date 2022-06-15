<template>
  <div class="">
    <h1>Edit user</h1>
    <h2>User name: {{user.name}}</h2>
    <h3>email: {{user.email}}</h3>

    <b-form  @submit="editUser($event)">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-3" label="Your Name:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.name"
          type="text"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="Your password:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.password"
          type="password"
          placeholder="Enter password"
          required
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button @click="deleteUser(user.email)" type="text" variant="primary">Delete</b-button>
    </b-form>




    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>

  </div>
</template>

<script>
export default {
  name: "EditUser",
  data() {
    return {
      form: {
        email: '',
        password: '',
        name: ''
      },
      user: {}
    }
  },
  activated() {
    this.$fetch()
  },
  async fetch() {
    await this.$axios.$get(`/users/${this.$route.params.id}`)
      .then((response) => {
      this.user = response.user
      this.form.name = response.user.name
      this.form.email = response.user.email
      this.form.id = response.user.id
    })
      .catch((e) => {
      console.log(e);
    })
  },

  methods: {
    async editUser(e) {
      e.preventDefault()
      console.log(this.form);
      await this.$axios.$put(`/users/${this.$route.params.id}`, this.form)
        .then((response) => {
          console.log(response);
          this.$fetch()
        })
        .catch((e) => {
          console.log(e);
        })
    },
    deleteUser(id) {

      this.$axios.$delete(`/users/${this.$route.params.id}`)
        .then((response) => {
          console.log(response)
          this.$router.push('/users')
        })
        .catch((e) => {
          console.log(e);
        })
    }
  }
}
</script>
