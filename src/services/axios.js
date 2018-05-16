/**
 * Created by tengteng on 17/12/27.
 */

import axios from 'axios';
import Qs from 'qs';
import baseUrl from '../config';

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 预处理请求信息（config）
  if (config.method === 'post' || config.method === 'put' || config.method === 'delete') {
    // POST传参序列化
    config.data = Qs.stringify(config.data);
  }
  return config;
}, function (error) {
  // 预处理请求错误（error）
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 预处理响应数据（response）
  return response;
}, function (error) {
  // 预处理响应错误（error）
  return Promise.reject(error);
});

/**
 * 返回axios方法
 * @param url（如果传绝对地址则baseURL不会追加到url之前）
 * @param method
 * @param timeout
 * @param data
 * @param headers
 * @param dataType
 * @returns {AxiosPromise}
 */
export default function(url, {
  method = 'post',
  timeout = 100000,
  data = {},
  headers = {'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8;'},
  dataType = 'json'
}) {
  const config = {
    method: method,
    timeout: timeout,
    url: url,
    baseURL: baseUrl.URL_CNODEJS,
    data: data,
    headers: headers,
    dataType: dataType
  };
  return axios(config);
}
