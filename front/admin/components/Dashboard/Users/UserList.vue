<template>
  <div class="">
    <h1>Users list</h1>
    <b-list-group v-for="(item, index) in users" :key="index">
      <nuxt-link class="list-group-item list-group-item-action" :to="`/users/${item.id}`">
        {{item.name}}<br>
        {{item.email}}
      </nuxt-link>
    </b-list-group>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  name: "UserList",
  activated() {
    this.getList()
  },
  computed: {
    ...mapGetters({
      users: 'users/users'
    })
  },
  mounted() {
    this.getList()
  },
  methods: {
    ...mapActions('users', ['getList'])
  }
}
</script>

