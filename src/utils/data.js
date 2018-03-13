/**
 * Created by 吴旭健 on 2018/3/11.
 */

function dataFunc (param) {
  let data = {
    id: 1
  };
  if (!param) {
    return data
  } else {
    data = {
      id: param
    };
    return data;
  }
}
export default dataFunc;
;
