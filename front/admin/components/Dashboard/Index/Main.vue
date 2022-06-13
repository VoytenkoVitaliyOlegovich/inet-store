<template>
  <div class="col-9">
    <h1>Dashboard</h1>
    <div class="col-6">
      Количество юзеров: {{users.length}}
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "MainIndex",
  computed: {
    ...mapGetters({
      users: "users/users"
    })
  }
}
</script>
