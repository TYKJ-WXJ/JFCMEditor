import Vue from 'vue';
import Router from 'vue-router';
import eject from '../components/eject.vue';
import alert from '../components/alert.vue';
import data from '../components/data.vue';
import module1 from '@/components/module-one.vue';
import module2 from '@/components/module-two.vue';
import module3 from '@/components/module-three.vue';

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
    },
    {
      path: '/eject',
      name: 'eject',
      component: eject
    },
    {
      path: '/alert',
      name: 'alert',
      component: alert
    },
    {
      path: '/data',
      name: 'data',
      component: data
    },
    {
      path: '/pageTest',
      name: 'pageTest',
      component (resolve) {
        require(['@/views/pageTest'], resolve);
      },
      children: [
        { path: '/pageTest',
          components: {
            a: module1,
            b: module2,
            c: module3
          }
        }
      ]
    }
  ]
});
