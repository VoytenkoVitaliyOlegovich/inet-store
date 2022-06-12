<template>
  <div>
    <div class="container col-4">
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
          ></b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary">Submit</b-button>

      </b-form>

      <b-alert
        class="mt-3"
        :show="dismissCountDown"
        dismissible
        variant="danger"
        @dismissed="dismissCountDown=0"
        @dismiss-count-down="countDownChanged"
      >
        <p>{{responseText}}</p>
        <b-progress
          variant="danger"
          :max="dismissSecs"
          :value="dismissCountDown"
          height="4px"
        ></b-progress>
      </b-alert>

      <b-card class="mt-3" header="Form Data Result">
        <pre class="m-0">{{ form }}</pre>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddUser",
  data() {
    return {
      form: {
        email: '',
        password: '',
        name: ''
      },
      show: true,
      dismissSecs: 4,
      dismissCountDown: 0,
      showDismissibleAlert: false,
      responseText: ''
    }
  },
  methods: {
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    onAlert(){
      this.showDismissibleAlert = true
      this.dismissCountDown = this.dismissSecs
    },
    onSubmit(event) {
      event.preventDefault()
      this.$axios.$post('/users', this.form
      ).then((response) => {

      }).catch((e)=> {
        // this.responseText = JSON.parse(e.request.response).massage
        this.responseText = 'error'
        this.onAlert()
      })
    },
  }
}
</script>
