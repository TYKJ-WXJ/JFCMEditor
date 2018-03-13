/**
 * Created by tengteng on 17/12/27.
 */

const mutations = {
  changeUserInfo(state, payload) {
    state.userInfo = payload.userInfo;
  },
  changeWebs(state, payload) {
    state.webs = payload;// 这里不能.webs,否则无法显示
  },
  changeJsonD(state, payload) {
    state.JsonData = payload;// 这里不能.webs,否则无法显示
  }
};

export default mutations;
