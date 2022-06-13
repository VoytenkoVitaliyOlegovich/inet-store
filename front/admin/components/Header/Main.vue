<template>
  <div>
    <b-navbar type="dark" variant="dark">

      <b-navbar-nav class="flex justify-content-between  w-100">
        <div class="col-6">
          <nuxt-link v-if="$auth.loggedIn" no-prefetch to="/" class="">
            Home
          </nuxt-link>
        </div>
        <div class="col-6 text-right">
          <div v-if="!$auth.loggedIn">
            <nuxt-link no-prefetch to="signup">
              Register
            </nuxt-link>
            <nuxt-link no-prefetch to="login">
              login
            </nuxt-link>
          </div>
        </div>


      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "HeaderMain"
}
</script>
