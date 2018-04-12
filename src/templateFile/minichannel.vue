<template>
  <div class="ed-channel">
    <div class="ed-titles">
      <p>通道监控点设备</p>
    </div>
    <div class="ed-state">
      <img src="" alt="">
    </div>
    <div class="ed-infor">
      <p>监控实时信息</p>
      <p id="time1"></p>
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
    mytime1: function () {
      let dateObj = new Date();
      let year = dateObj.getFullYear();
      let month = dateObj.getMonth() + 1;
      let date = dateObj.getDate();
      let day = dateObj.getDay();
      let hours = dateObj.getHours();
      let minutes = dateObj.getMinutes();
      let seconds = dateObj.getSeconds();
      let newDate = year + "-" + month + "-" + date + "" + hours + ":" + minutes + ":" + seconds;
      document.getElementById("time1").innerHTML = newDate;
    }
  }
}

</script>

<style scoped>
.ed-channel{
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

.ed-state img{
  width: 100%;
  height: 100%;
}

.ed-infor{
  color: yellow;
  margin-right: 130px;
}

</style>
