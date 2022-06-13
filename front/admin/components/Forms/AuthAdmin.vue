<template>
  <div>
    <div class="container col-3">
      <b-form  v-if="show" @submit="onSubmit">
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

        <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.password"
            type="password"

            placeholder="Enter password"
            required
          ></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary">Submit</b-button>

      </b-form>
      <b-card class="mt-3" header="Form Data Result">
        <pre class="m-0">{{ form }}</pre>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "AuthAdmin",
  data() {
    return {
      form: {
        email: 'test@test.test',
        password: 'test',
      },
      show: true,
    }
  },
  methods: {
    async onSubmit(event) {
      event.preventDefault()
      // this.$axios.$post('/signin',  {
      //   params: this.form
      // }).then((response) => {
      //   console.log(response);
      //   this.$auth.$storage.setLocalStorage('token', response.token)
      // })
      try {
        await this.$auth.loginWith('local', { data: this.form })
      } catch (err) {
        console.log(err)
      }
    },
  }
}

</script>

