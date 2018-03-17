/**
 * Created by tengteng on 17/12/27.
 */

import axios from '../services/axios';

/**
 * 统一处理所有接口请求
 * 参数对象将会替换axios中默认参数中的键值对，其中可包含：
 * method
 * timeout
 * data
 * headers
 * dataType
 */
const server = {
  getTopics() {
    return axios('api/v1/topics', {
      method: 'get'
    });
  },
  getTopicDetail() {
    return axios('api/v1/topic/5433d5e4e737cbe96dcef312', {
      method: 'get'
    });
  },
  getJSON() {
    return axios('http://localhost:8890/dist/static/JSON/svgData.json', {
      method: 'get'
    });
  },
  getTest() {
    return axios('http://localhost:8890/src/views/test.json', {
      method: 'get'
    });
  }
};

export default server;
