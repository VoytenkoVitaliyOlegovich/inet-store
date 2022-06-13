<template>
  <b-navbar type="dark" variant="dark"  >

    <b-navbar-nav class="flex justify-content-end  w-100">
      <div v-if="$auth.loggedIn" class="d-flex justify-content-end align-items-center">
        <b-avatar class="mr-3" src="https://placekitten.com/300/300"></b-avatar>
        <div class="text-white mr-2">
          name:{{ $auth.user.name }}
        </div>
        <div class="text-white">
          email:{{ $auth.user.email }}
        </div>
        <b-nav-item @click="logout($event)">Logout</b-nav-item>
      </div>
      <div v-else>
        <nuxt-link no-prefetch to="signup">
          Register
        </nuxt-link>
        <nuxt-link no-prefetch to="login">
          login
        </nuxt-link>
      </div>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  name: "HeaderMain",
  methods: {
    logout(e) {
      e.preventDefault()
      this.$auth.logout('local')
      this.$router.push('/dashboard')
    }
  }
}
</script>
