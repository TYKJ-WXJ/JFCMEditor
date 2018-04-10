<template>
  <div id="app">
    <router-link to="/">pageMain</router-link>
    <router-link to="/pageDetail">pageDetail</router-link>
    <router-link to="/pageThree">pageThree</router-link>
    <router-link to="/pageIframe">pageIframe</router-link>
    <router-link to="/pageCirculation">pageCirculation</router-link>
    <router-link to="/pageDetector">pageDetector</router-link>
    <router-link to="/eject">eject</router-link>
    <router-link to="/alert">alert</router-link>
    <router-link to="/data">data</router-link>
    <router-link to="/pageTest">pageTest</router-link>
    <router-link to="/pageTest2">pageTest2</router-link>
    <router-link to="/pageTest3">pageTest3</router-link>
    <router-link to="/pagedistriBution">pagedistriBution</router-link>
    <router-link to="/pageUps">pageUps</router-link>
    <router-link to="/pagePrecision">pagePrecision</router-link>
    <router-link to="/pageMonitor">pageMonitor</router-link>
    <router-link to="/pageCamera">pageCamera</router-link>
    <router-link to="/Entrance">Entrance</router-link>
    <router-link to="Channel">Channel</router-link>
    <router-link to="Noone">Noone</router-link>
    <router-link to="SolidState">SolidState</router-link>
    <router-link to="pageHost">pageHost</router-link>
    <router-link to="pageCabinet">pageCabinet</router-link>
    <router-link to="pageEngine">pageEngine</router-link>
    <router-link to="miniHost">miniHost</router-link>
    <router-link to="miniPrecision">miniPrecision</router-link>
    <router-link to="miniEngine">miniEngine</router-link>
    <router-link to="miniSupply">miniSupply</router-link>
    <router-link to="miniCabinet">miniCabinet</router-link>
    <router-link to="miniSersor">miniSersor</router-link>
    <router-link to="miniEntrance">miniEntrance</router-link>
    <router-link to="/pageJF">pageJF</router-link>
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
