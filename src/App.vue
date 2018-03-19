<template>
  <div id="app">
    <router-link to="/">pageMain</router-link>
    <router-link to="/pageDetail">pageDetail</router-link>
    <router-link to="/pageThree">pageThree</router-link>
    <router-link to="/pageIframe">pageIframe</router-link>
    <router-link to="/pageCirculation">pageCirculation</router-link>
    <router-link to="/eject">eject</router-link>
    <router-link to="/alert">alert</router-link>
    <router-link to="/data">data</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
