/**
 * Created by tengteng on 17/12/27.
 */

const actions = {
  changeUserInfo(store, payload) {
    store.commit({
      type: 'changeUserInfo',
      userInfo: payload
    })
  },
  changeWebs(store, payload) {
    store.commit({
      type: 'changeWebs',
      webs: payload
    })
  }
};

export default actions;
