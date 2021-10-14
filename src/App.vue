<template>
  <div id="app">
    <LoadingLayout v-if="isLoading">
      <BaseLoading/>
    </LoadingLayout>
    <MainLayout v-else />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import MainLayout from './layouts/MainLayout.vue'
import LoadingLayout from './layouts/LoadingLayout.vue'
import BaseLoading from './components/BaseLoading.vue'
export default {
  name: 'App',
  components: {
    MainLayout,
    LoadingLayout,
    BaseLoading
  },
  computed: {
    ...mapState('loading', ['isLoading'])
  }
}
</script>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #ffffff //le ponemos un color blanco
  background-color: #15202b // cambiamos el color de fondo por azul
  width 100%
</style>
