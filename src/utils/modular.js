/**
 * Created by 吴旭健 on 2018/3/11.
 */
// 分离动静数据
let dynamicArr = [];
let mok;
const separateData = {
  // 定义分离逻辑data为传入数据，st为this.$store
  separate(data, st) {
    console.log(data, st);
    for (let i = 0; i < data.svg.length; i++) {
      // 获取设备个数
      let equipments = data.svg[i].equipments;
      for (let j = 0; j < equipments.length; j++) {
        // 获取属性个数
        let propertyList = equipments[j].propertyList;
        for (let k = 0; k < propertyList.length; k++) {
          let dataType = propertyList[k].dataType;
          let shuId = propertyList[k].id;
          let shuValue = propertyList[k].value;
          let sockId = st.socks.getters.getWebs.web.attrId;
          let sockValue = st.socks.getters.getWebs.web.attrValue;
          // 判断与外部模块对应数据
          if (dataType === 'DYNAMIC') {
            // 添加到数组当中
            dynamicArr.push({
              id: propertyList[k].id,
              value: propertyList[k].value
            });
            // 将变化数据传输到外部模块
            mok = sockValue;
          } else if (shuId === sockId) {
            // 判断ID是否相同
            shuValue = sockValue;
            // 修改vuex内的数据
            st.socks.commit('changeJsonD', {
              'JsonD': st.socks.getters.getJsonD.JsonD
            });
          }
        }
      }
    }
  },
  module() {
    return mok;
  }
}

export default separateData;
