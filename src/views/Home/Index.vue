<template>
  <div class="home-view">
    <HomeTitle />
    <MainForm />
  </div>
</template>

<script>
import HomeTitle from './HomeTitle'
import MainForm from './MainForm'
export default {
  name: 'Home',
  components: {
    HomeTitle,
    MainForm
  }
}
</script>
