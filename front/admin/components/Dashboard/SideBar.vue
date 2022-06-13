<template>

  <div class="bg-dark vh-100 border-bottom-0 col-md-3 col-xl-2 col-12 pt-2 sticky-top">

    <nav class="d-md-block ">
      <ul class="nav nav-pills flex-column mb-auto">
        <li class="nav-item">
          <nuxt-link to="/" class="nav-link" aria-current="page">
            Dashboard
          </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="/users" class="nav-link" aria-current="page">
            Users
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </div>

</template>

<script>
export default {
  name: "SideBar"
}
</script>


