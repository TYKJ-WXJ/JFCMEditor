// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import 'vue2-animate/dist/vue2-animate.min.css';
// 导入iview的css样式和文件   之前安装npm install iview --save
import 'iview/dist/styles/iview.css';
import iView from 'iview';
Vue.use(iView);

// 关闭生产模式下的提示
Vue.config.productionTip = false;

// 错误信息打印
Vue.config.errorHandler = (err) => {
  console.error(err);
};

window.vm = new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
