import Vue from 'vue';
import Router from 'vue-router';
import eject from '../components/eject.vue';
import alert from '../components/alert.vue';
import data from '../components/data.vue';
import module1 from '@/components/module-one.vue';
import module2 from '@/components/module-two.vue';
import module3 from '@/components/module-three.vue';
Vue.use(Router);
Vue.component('one', module1);
Vue.component('two', module2);
Vue.component('three', module3);
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
    },
    {
      path: '/pageTest2',
      name: 'pageTest2',
      component (resolve) {
        require(['@/views/pageTest2'], resolve);
      }
    },
    {
      path: '/pageTest3',
      name: 'pageTest3',
      component (resolve) {
        require(['@/views/pageTest3'], resolve);
      }
    },
    {
      path: '/pageDetector',
      name: 'pageDetector',
      component (resolve) {
        require(['@/views/pageDetector'], resolve);
      }
    },
    {
      path: '/pagedistriBution',
      name: 'pagedistriBution',
      component (resolve) {
        require(['@/views/pagedistriBution'], resolve);
      }
    },
    {
      path: '/pageUps',
      name: 'pageUps',
      component (resolve) {
        require(['@/views/pageUps'], resolve);
      }
    },
    {
      path: '/pageJF',
      name: 'pageJF',
      component (resolve) {
        require(['@/views/pageJF'], resolve);
      }
    },
    {
      path: '/pagePrecision',
      name: 'pagePrecision',
      component (resolve) {
        require(['@/views/pagePrecision'], resolve);
      }
    },
    {
      path: '/pageMonitor',
      name: 'pageMonitor',
      component (resolve) {
        require(['@/views/pageMonitor'], resolve);
      }
    },
    {
      path: '/pageCamera',
      name: 'pageCamera',
      component (resolve) {
        require(['@/views/pageCamera'], resolve);
      }
    },
    {
      path: '/Entrance',
      name: 'Entrance',
      component (resolve) {
        require(['@/views/Entrance'], resolve);
      }
    },
    {
      path: '/Channel',
      name: 'Channel',
      component (resolve) {
        require(['@/views/Channel'], resolve);
      }
    },
    {
      path: '/Noone',
      name: 'Noone',
      component (resolve) {
        require(['@/views/Noone'], resolve);
      }
    },
    {
      path: '/SolidState',
      name: 'SolidState',
      component (resolve) {
        require(['@/views/SolidState'], resolve);
      }
    },
    {
      path: '/pageHost',
      name: 'pageHost',
      component (resolve) {
        require(['@/views/pageHost'], resolve);
      }
    },
    {
      path: '/pageCabinet',
      name: 'pageCabinet',
      component (resolve) {
        require(['@/views/pageCabinet'], resolve);
      }
    },
    {
      path: '/pageEngine',
      name: 'pageEngine',
      component (resolve) {
        require(['@/views/pageEngine'], resolve);
      }
    },
    {
      path: '/miniHost',
      name: 'miniHost',
      component (resolve) {
        require(['@/views/miniHost'], resolve);
      }
    },
    {
      path: '/miniPrecision',
      name: 'miniPrecision',
      component (resolve) {
        require(['@/views/miniPrecision'], resolve);
      }
    },
    {
      path: '/miniEngine',
      name: 'miniEngine',
      component (resolve) {
        require(['@/views/miniEngine'], resolve);
      }
    },
    {
      path: '/miniSupply',
      name: 'miniSupply',
      component (resolve) {
        require(['@/views/miniSupply'], resolve);
      }
    },
    {
      path: '/miniCabinet',
      name: 'miniCabinet',
      component (resolve) {
        require(['@/views/miniCabinet'], resolve);
      }
    },
    {
      path: '/miniSersor',
      name: 'miniSersor',
      component (resolve) {
        require(['@/views/miniSersor'], resolve);
      }
    },
    {
      path: '/miniEntrance',
      name: 'miniEntrance',
      component (resolve) {
        require(['@/views/miniEntrance'], resolve);
      }
    },
    {
      path: '/miniUps',
      name: 'miniUps',
      component (resolve) {
        require(['@/views/miniUps'], resolve);
      }
    },
    {
      path: '/miniCamera',
      name: 'miniCamera',
      component (resolve) {
        require(['@/views/miniCamera'], resolve);
      }
    },
    {
      path: '/miniChannel',
      name: 'miniChannel',
      component (resolve) {
        require(['@/views/miniChannel'], resolve);
      }
    },
    {
      path: '/miniNoone',
      name: 'miniNoone',
      component (resolve) {
        require(['@/views/miniNoone'], resolve);
      }
    }
  ]
});
