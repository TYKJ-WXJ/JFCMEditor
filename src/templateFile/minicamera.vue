<template>
  <div class="ed-camera">
    <div class="ed-titles">
      <p>摄像头设备</p>
    </div>
    <div class="ed-state">
      <div class="ed-disk">
        <img src="" alt="">
      </div>
      <div class="ed-disk-1">
        <img src="../assets/img/jkd.png" alt="">
      </div>
    </div>
    <div class="ed-infor">
      <p>监控实时信息</p>
      <p id="time"></p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    mytime: function () {
      setInterval(function () {
        let dateObj = new Date();
        let year = dateObj.getFullYear();
        let month = dateObj.getMonth() + 1;
        let date = dateObj.getDate();
        let hours = dateObj.getHours();
        let minutes = dateObj.getMinutes();
        let seconds = dateObj.getSeconds();
        document.getElementById("time").innerHTML = year + "-" + month + "-" + date + "" + hours + ":" + minutes + ":" + seconds;
      }, 1000)
    }
  }
}

</script>

<style scoped>
.ed-camera{
  width: 284px;
  height: 297px;
  background-color: #29ABE2;
  /* opacity: 0.2; */
  margin: 0 auto;
  color: #ffffff;
  font-family: 黑体;
  font-size: 14pt;
}

.ed-titles{
  padding-left: 10px;
  font-size: 14pt;
  display: flex;
  background-color: #187FC3;
  margin: 0 auto;
}

.ed-titles p{
  padding-top: 7px;
}

.ed-state{
  width: 240px;
  height: 170px;
  margin: 13px auto;
}

.ed-disk{
  width: 240px;
  height: 170px;
}

.ed-disk img{
  width: 100%;
  height: 100%;
}

.ed-disk-1{
  margin-top: -163px;
  margin-left: 182px;
}

.ed-infor{
  color: yellow;
  margin-right: 130px;
}
</style>
