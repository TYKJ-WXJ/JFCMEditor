<template>
<div>
  <!--一个图片-->
  <transition
    name="bounce"
    enter-active-class="bounceInLeft"
    leave-active-class="bounceOutRight"
  >
  <div v-show="show1" class="whole">
      <img id="img1" class="img-f" :src="imgSrc1" style="width: 85%;height: 100%;">
    </div>
  </transition>
<!--四宫格-->
  <transition
    name="bounce"
    enter-active-class="bounceInLeft"
    leave-active-class="bounceOutRight"
  >
    <div v-show="show2" class="whole">
      <img id="img2" class="img-f" @click="SwiTch5(2)" :src="imgSrc2" style="width: 49%;height: 49%;">
      <img id="img3" class="img-f" @click="SwiTch5(3)" :src="imgSrc3" style="width: 49%;height: 49%;">
      <img id="img4" class="img-f" @click="SwiTch5(4)" :src="imgSrc4" style="width: 49%;height: 49%;">
      <img id="img5" class="img-f" @click="SwiTch5(5)" :src="imgSrc5" style="width: 49%;height: 49%;">
    </div>
  </transition>
<!--九宫格-->
  <transition
    name="bounce"
    enter-active-class="bounceInLeft"
    leave-active-class="bounceOutRight"
  >
    <div v-show="show3" class="whole">
      <img id="img6" class="img-f" @click="SwiTch5(6)" :src="imgSrc6" style="width: 33%;height: 33%;">
      <img id="img7" class="img-f" @click="SwiTch5(7)" :src="imgSrc7" style="width: 33%;height: 33%;">
      <img id="img8" class="img-f" @click="SwiTch5(8)" :src="imgSrc8" style="width: 33%;height: 33%;">
      <img id="img9" class="img-f" @click="SwiTch5(9)" :src="imgSrc9" style="width: 33%;height: 33%;">
      <img id="img10" class="img-f" @click="SwiTch5(10)" :src="imgSrc10" style="width: 33%;height: 33%;">
      <img id="img11" class="img-f" @click="SwiTch5(11)" :src="imgSrc11" style="width: 33%;height: 33%;">
      <img id="img12" class="img-f" @click="SwiTch5(12)" :src="imgSrc12" style="width: 33%;height: 33%;">
      <img id="img13" class="img-f" @click="SwiTch5(13)" :src="imgSrc13" style="width: 33%;height: 33%;">
      <img id="img14" class="img-f" @click="SwiTch5(14)" :src="imgSrc14" style="width: 33%;height: 33%;">
    </div>
  </transition>

  <!--控制按钮-->
  <div class="btn">
    <button id="btn0" @click="SwiTch1" class="btn-interval"> 单页面</button>
    <button id="btn1" @click="SwiTch2" class="btn-interval"> 四宫格</button>
    <button id="btn2" @click="SwiTch3" class="btn-interval"> 九宫格</button>
    <!--<button id="btn3" @click="SwiTch4" class="btn-interval"> 轮播键</button>-->
    <button id="btn4" @click="SwiTch6" class="btn-interval"> 单页轮播键</button>
  </div>
</div>
</template>

<script>
  import $ from 'jquery'
//  import VideoPlayer from 'vue-video-player';
//  var jieshu = null;
  var danyejieshu = null;
  export default{
    data() {
      return {
        show1: false,
        show2: false,
        show3: false,
//        show4: false,
        show5: false,
        show6: false,
        imgSrc1: '../../src/assets/img/lunbo.jpg',
        imgSrc2: '../../src/assets/img/lunbo.jpg',
        imgSrc3: '../../src/assets/img/lunbo.jpg',
        imgSrc4: '../../src/assets/img/lunbo.jpg',
        imgSrc5: '../../src/assets/img/lunbo.jpg',
        imgSrc6: '../../src/assets/img/lunbo.jpg',
        imgSrc7: '../../src/assets/img/lunbo.jpg',
        imgSrc8: '../../src/assets/img/lunbo.jpg',
        imgSrc9: '../../src/assets/img/lunbo.jpg',
        imgSrc10: '../../src/assets/img/lunbo.jpg',
        imgSrc11: '../../src/assets/img/lunbo.jpg',
        imgSrc12: '../../src/assets/img/lunbo.jpg',
        imgSrc13: '../../src/assets/img/lunbo.jpg',
        imgSrc14: '../../src/assets/img/lunbo.jpg'
      }
    },
    methods: {
      SwiTch1: function () { // 显示一个图片
        this.show1 = true;
        this.show2 = false;
        this.show3 = false;
      },
      SwiTch2: function () { // 显示四宫格
        this.show1 = false;
        this.show2 = true;
        this.show3 = false;
      },
      SwiTch3: function () { // 显示九宫格
        this.show1 = false;
        this.show2 = false;
        this.show3 = true;
      },
//      SwiTch4: function () { // 控制轮播
//        this.show4 = !this.show4;
//        console.log(this.show4);
//        let index = 0;
//        // 3秒轮播一次
//        if (this.show4 === true) {
//          jieshu = setInterval(function () { // 开启定时器
//            let oDiv = document.getElementById('btn' + index + '');   // 获取元素div
//            index = (index === 2) ? 0 : index + 1;
//            oDiv.click();  // 执行点击事件
//          }, 3000);
//        }
//        if (this.show4 === false) {
//          console.log(jieshu);
//          clearInterval(jieshu); // 关闭定时器
//        }
//      },
      SwiTch5: function (id) { // 控制图片点击缩放
        if (this.show5 === false) { // 点击放大
          document.getElementById('img' + id + '').style.width = '100%'; // 控制图片放大多少
          document.getElementById('img' + id + '').style.height = '100%';
          $('.img-f').hide();
          $('#img' + id + '').show();
          if (this.show4 === true) { // 暂停各个页面更换
            $('#btn3').click();
          }
          if (this.show6 === true) { // 暂停图片更换
            $('#btn4').click();
          }
          this.show5 = !this.show5;
        } else if (this.show5 === true) {
          if (id < 6) { // 四宫格恢复原本大小
            document.getElementById('img' + id + '').style.width = '49%';
            document.getElementById('img' + id + '').style.height = '49%';
            $('.img-f').show();
            this.show5 = !this.show5;
          } else if (id > 5) { // 九宫格恢复原本大小
            document.getElementById('img' + id + '').style.width = '33%';
            document.getElementById('img' + id + '').style.height = '33%';
            $('.img-f').show();
            this.show5 = !this.show5;
          }
        }
      },
      SwiTch6: function () {
        this.show6 = !this.show6;
        console.log(this.show6);
        let imgArr1 = []; // 图片数组，替换图片时修改
        let imgArr2 = []; // 四宫格图片组1
        let imgArr3 = []; // 四宫格图片组2
        let imgArr4 = []; // 四宫格图片组3
        let imgArr5 = []; // 四宫格图片组4
        let indexOne = 0; // 单宫格循环参数
        let indexFour = 0; // 四宫格循环参数
        let indexNine = 0; // 九宫格循环参数
        for (let i = 0; i < 18; i++) { // 个人建议，将图片的名字统一格式，以便放入数组
          imgArr1[i] = '../../src/assets/tubiao/' + (i + 1) + '.png'; // ../../src/assets/tubiao/1.png
        }
        for (let i = 0; i < 4; i++) { // 这里我将九宫格图片也借用了四宫格的数组
          imgArr2[i] = '../../src/assets/tubiao/' + (i + 1) + '.png';
          imgArr3[i] = '../../src/assets/tubiao/' + (i + 5) + '.png';
          imgArr4[i] = '../../src/assets/tubiao/' + (i + 9) + '.png';
          imgArr5[i] = '../../src/assets/tubiao/' + (i + 13) + '.png';
        }
        // 3秒轮播一次
        if (this.show6 === true) {
          danyejieshu = setInterval(function () { // 开启定时器
            $('#img1').attr('src', imgArr1[indexOne]); // 实现替换单页画面图片
            $('#img2').attr('src', imgArr2[indexFour]); // 实现替换四宫格画面图片
            $('#img3').attr('src', imgArr3[indexFour]); // 实现替换四宫格画面图片
            $('#img4').attr('src', imgArr4[indexFour]); // 实现替换四宫格画面图片
            $('#img5').attr('src', imgArr5[indexFour]); // 实现替换四宫格画面图片
            $('#img6').attr('src', imgArr3[indexNine]); // 实现替换九宫格画面图片
            $('#img7').attr('src', imgArr3[indexNine]); // 实现替换九宫格画面图片
            $('#img8').attr('src', imgArr3[indexNine]); // 实现替换九宫格画面图片
            $('#img9').attr('src', imgArr4[indexNine]); // 实现替换九宫格画面图片
            $('#img10').attr('src', imgArr4[indexNine]); // 实现替换九宫格画面图片
            $('#img11').attr('src', imgArr4[indexNine]); // 实现替换九宫格画面图片
            $('#img12').attr('src', imgArr5[indexNine]); // 实现替换九宫格画面图片
            $('#img13').attr('src', imgArr5[indexNine]); // 实现替换九宫格画面图片
            $('#img14').attr('src', imgArr5[indexNine]); // 实现替换九宫格画面图片
//            console.log(this.imgSrc1);
            indexOne = (indexOne === 17) ? 0 : indexOne + 1;
            indexFour = (indexFour === 4) ? 0 : indexFour + 1;
            indexNine = (indexNine === 4) ? 0 : indexNine + 1;
          }, 3000); // 循环时间
        }
        if (this.show6 === false) {
          console.log(danyejieshu);
          clearInterval(danyejieshu); // 关闭定时器
        }
      }
    }
  }
</script>

<style>
  .whole{ // 整体显示的定位
    width: 900px;
    height: 700px;
    position: fixed;
    left: 150px;
  }
  .btn{ // 按钮的整体位置
    width: 60px;
    height: 50px;
    position: fixed;
    right: 40px;
    bottom: 70px;
  }
  .btn-interval{ // 控制按钮间距
    margin-top: 5px;
  }
  .img-f{ // 给图片添加样式
    float:left;
    cursor: pointer;
  }


</style>
