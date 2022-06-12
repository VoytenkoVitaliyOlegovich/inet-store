<template>
  <main>
    <div class="errorPage">
      <div class="container">
        <div class="errorPage__code">Помилка {{ error.statusCode }}</div>
      </div>
    </div>
  </main>
</template>

<script>
// import NewsButton from "../components/Buttons/NewsButton";

export default {
  // eslint-disable-next-line
  name: 'error',
  components: {
    // NewsButton
  },
  // eslint-disable-next-line
  props: ['error'],
  // eslint-disable-next-line
  layout: 'error', // you can set a custom layout for the error page
}
</script>
