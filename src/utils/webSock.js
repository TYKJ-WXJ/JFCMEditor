/**
 * Created by 吴旭健 on 2018/1/3.
 */
// 引入使用npm下载的依赖
// import SockJS from 'sockjs-client';// 'sockjs-client' 必须与package.json文件当中dependencies 当中的一模一样
import SockJS from 'reconnectingwebsocket';
import Stomp from '@stomp/stompjs';
import SeparateData from '@/utils/modular';
// var SockJS = require('../../node_modules/sockjs-client/dist/sockjs.min');
// var Stomp = require('../../node_modules/@stomp/stompjs/lib/stomp.min');
// let stompClient = null;
let stompClient;
let sju;
const webSock = {
  connectZDY(st) {
    // let socket = new SockJS('http://192.168.1.149:8080/test-info1'); // 这里是sockjs-client
    let socket = new SockJS('ws://192.168.1.149:8080/test-sockJs'); // 这里是reconnectingwebsocket
    // console.log(socket.onerror);
    stompClient = Stomp.over(socket);
    stompClient.connect({}, function (frame) {
      // console.log('Connected: ' + frame);
      stompClient.subscribe('/stock/price', function (greeting) {
        // console.log(greeting);
        sju = greeting.body;
        // 修改vuex当中的参数
        st.socks.commit('changeWebs', {
          'web': JSON.parse(sju),
          'sx': {}
        });
        console.log(st);
        console.log(st.socks.getters.getJsonD.JsonD.dynamic[0].id);
        console.log(st.socks.getters.getWebs.web.attrId);
        // 进行数据修改
        SeparateData.separate(st.socks.getters.getJsonD.JsonD, st);
        // if (st.socks.getters.getJsonD.JsonD.dynamic[0].id === st.socks.getters.getWebs.web.attrId) {
        //   // 修改vuex当中的参数
        //   // st.socks.getters.getJsonD.JsonD.dynamic[0].value = st.socks.getters.getWebs.web.attrValue;
        //   st.socks.getters.getJsonD.JsonD.dynamic[0] = {
        //     id: st.socks.getters.getWebs.web.attrId,
        //     value: st.socks.getters.getWebs.web.attrValue
        //   };
        //   st.socks.commit('changeJsonD', {
        //     'JsonD': st.socks.getters.getJsonD.JsonD
        //   });
        // }
        // 直接修改
      });
      stompClient.subscribe('/app/price', function (greeting) {
        console.log(greeting);
      });
      // stompClient.send('/app/hello', {}, JSON.stringify({'svg': [['svgid1', 'true', '属性ID1', '1'], ['svgid2', 'true', '属性ID2', '2']]})); // svgid 连接状态true or flaes 属性ID
    });
  },
  Send(obj) {
    stompClient.send('/app/hello', {}, JSON.stringify(obj)); // svgid 连接状态true or flaes 属性ID
  },
  Close() {
    stompClient.disconnect();
  },
  SendCS() {
    stompClient.send('/app/hello1', {}, JSON.stringify({'svg': [['svgid1', 'true', '属性ID1', '1'], ['svgid2', 'true', '属性ID2', '2']]}));
  }
}

export default webSock;
