<template>
  <div>
    <HeaderMain />
    <div class="container-fluid">
      <div class="row flex-xl-nowrap2">
        <DashboardSideBar v-if="$auth.loggedIn"/>
        <Nuxt keep-alive/>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  // eslint-disable-next-line
  name: 'default',
}
</script>
