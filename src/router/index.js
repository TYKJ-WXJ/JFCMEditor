import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'pageMain',
      component (resolve) {
        require(['@/views/pageMain'], resolve);
      }
    },
    {
      path: '/pageDetail',
      name: 'pageDetail',
      component (resolve) {
        require(['@/views/pageDetail'], resolve);
      }
    },
    {
      path: '/pageThree',
      name: 'pageThree',
      component (resolve) {
        require(['@/views/pageThree'], resolve);
      }
    },
    {
      path: '/pageIframe',
      name: 'pageIframe',
      component (resolve) {
        require(['@/views/pageIframe'], resolve);
      }
    },
    {
      path: '/pageCirculation',
      name: 'pageCirculation',
      component (resolve) {
        require(['@/views/pageCirculation'], resolve);
      }
    }
  ]
});
