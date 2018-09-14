const sendRequest = (url, method = 'GET', body = {})=>{
  // 处理url,添加时间戳，保证每次请求不会被缓存
  if (/\?/.test(url)){
      url += '&_='+(+new Date());
  }else{
      url += '?_='+(+new Date());
  }
  let params = {method};
  // 判断请求是否属于post请求
  if (method == 'POST'){
      params.body = JSON.stringify(body);
  }
  return fetch(url, params).then(res=>res.json());
}
// 获取品牌列表
export let getBrandList = ()=>{
  return sendRequest(`http://baojia-test.chelun.com/v2-car-getMasterBrandList.html`);
}

//获取车系列表
export let getMakeList = (id)=>{
  return sendRequest(`https://baojia.chelun.com/v2-car-getMakeListByMasterBrandId.html?MasterID=${id}`)
}

//获取车系详情
export let getList = (id)=>{
  return sendRequest(`https://baojia.chelun.com/v2-car-getInfoAndListById.html?SerialID=${id}`)
}

//获取车系图片分类列表
export let getImgList = (id, colorId, carId)=>{
  let search = `SerialID=${id}`;
  if (colorId){
      search += `&ColorID=${colorId}`;
  }
  if (carId){
      search += `&CarID=${carId}`;
  }
  return sendRequest(`https://baojia.chelun.com/v2-car-getImageList.html?${search}`)
}
/**
 * 获取短信验证码
 * @param phone     用户的手机号
 * @return promise  返回一个promise
 */
export let getCapture = (phone) => {
  return sendRequest(`http://123.206.55.50:8080/getCapture`, 'POST', { phone });
}
/**
 * 获取城市列表(如果传省份id返回城市列表，如果不传返回省份列表)
 * @param provinceId   省份id
 * @return promise 返回一个promise
 */
export let getCityList = (provinceId) => {
  let search = ``;
  if (provinceId) {
      search += `provinceid=${provinceId}`;
  }
  return sendRequest(`https://baojia.chelun.com/v1-city-alllist.html?${search}`)
}
