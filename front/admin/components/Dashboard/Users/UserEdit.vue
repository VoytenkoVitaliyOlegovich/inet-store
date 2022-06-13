<template>
  <div class="">
    <h1>Edit user</h1>
    <h2>User name: {{user.name}}</h2>
    <h3>email: {{user.email}}</h3>

  </div>
</template>

<script>
export default {
  name: "EditUser",
  data() {
    return {
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
    })
      .catch((e) => {
      console.log(e);
    })
  },
}
</script>
