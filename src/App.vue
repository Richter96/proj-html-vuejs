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
  <AppHeader />
  <AppMain />
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
