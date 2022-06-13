<template>
  <div class="">
    <h2>Users list</h2>
    <b-list-group v-for="(item, index) in users" :key="index">
      <nuxt-link class="list-group-item list-group-item-action" :to="`/users/${item.id}`">
        {{item.name}}<br>
        {{item.email}}
      </nuxt-link>
    </b-list-group>
  </div>
</template>

<script>
export default {
  name: "UserList",
  data() {
    return {
      users: []
    }
  },
  activated() {
    this.$fetch()
  },
  async fetch() {
    await this.$axios.$get('/users', {
      params: {
        limit: 50,
        offset: 0
      }
    }).then((response) => {
      this.users = response
    }).catch((e) => {
      console.log(e);
    })

  },
}
</script>

