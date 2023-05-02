<script>
import AppHeader from "./components/AppHeader.vue"
import AppMain from "./components/AppMain.vue"
import AppFooter from "./components/AppFooter.vue"

export default {

  components: {
    AppHeader,
    AppMain,
    AppFooter,
  },
}

</script>

<template>
  <!-- header with logo, nav bar menu, serch and button get started -->
  <AppHeader />

  <!-- hearth of the site, different section of site -->
  <AppMain />

  <!-- footer with contact with teams -->
  <AppFooter />
</template>

<style lang="scss">
@use './assets/scss/partials/variables' as *;

body {
  font-family: 'Outfit', sans-serif;
}

button {
  &:hover {
    background-color: $bgHooverBtn !important;
  }
}

.container_md {
  width: 1178px;
  margin: auto;
}
</style>
