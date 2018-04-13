<template>
  <div class="ed-channel">
    <div class="ed-titles">
      <p>通道监控点设备</p>
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
  width: 360px;
  height: 235px;
  margin: 0 auto;
  color: #ffffff;
  box-shadow: 0px 0px 20px 4px rgba(9, 74, 115, 0.4) inset;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","\5FAE\8F6F\96C5\9ED1",Arial,sans-serif;
}

.ed-titles{
  padding-left: 10px;
  font-size: 16px;
  display: flex;
  background: linear-gradient(to right, #142657, transparent);
  margin: 0 auto;
  height: 25px;
}

.ed-state{
  width: 240px;
  height: 150px;
  margin: 13px auto;
}

.ed-disk{
  width: 240px;
  height: 150px;
}

.ed-disk img{
  width: 100%;
  height: 100%;
}

.ed-disk-1{
  margin-top: -140px;
  margin-left: 182px;
  position: absolute;
}

.ed-infor{
  color: yellow;
  margin-right: 165px;
}
</style>
