/**
 * Created by tengteng on 17/12/27.
 */

const getters = {
  getUserInfo(state) {
    return state.userInfo;
  },
  getWebs(state) {
    return state.webs;
  },
  getJsonD(state) {
    return state.JsonData;
  },
  getDatas(state) {
    return state.datas;
  }
};

export default getters;
