<template>
  <div>
    <b-navbar type="dark" variant="dark" class="container">
      <b-navbar-nav>
        <b-nav-item href="#">
          <nuxt-link no-prefetch to="/">
            Home
          </nuxt-link>
          </b-nav-item>
        <b-nav-item href="#">
          <nuxt-link no-prefetch to="signup">
            Register
          </nuxt-link>
        </b-nav-item>
        <b-nav-item href="#">
          <nuxt-link no-prefetch to="login">
            login
          </nuxt-link>
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "HeaderMain"
}
</script>
