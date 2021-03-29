<template>
<div class="container">
  <div class="wrapper">
  <the-app-header></the-app-header>
  <router-view></router-view>
  </div>
</div>
</template>

<script>
import TheAppHeader from './components/TheAppHeader'
export default {
  components: {
    TheAppHeader
  }
}
</script>
