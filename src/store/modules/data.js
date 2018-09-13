import {
  getList
} from "../../data/data";
let state = {
  lists: {},
  currentYear: '全部'
}

let getters = {
  year(state) {
    if (!state.lists.list) {
      return [];
    }
    let arr = state.lists.list.map(item => {
      return item.market_attribute.year;
    })
    let set = new Set(arr);
    return ['全部', ...set];
  },
  list(state) {
    if (!state.lists.list) {
      return [];
    }
    // 把排量和吸气类型相同的数据做个合并
    function merge(arr) {
      let types = [];
      let obj = {};
      arr.forEach(item => {
        let type = item.exhaust_str + '/' + item.max_power_str + ' ' + item.inhale_type
        if (types.indexOf(type) == -1) {
          types.push(type)
          obj[type] = [item]
        } else {
          obj[type].push(item)
        }
      })
      return obj
    }
    if (state.currentYear == '全部') {
      return merge(state.lists.list)
    } else {
      return merge(state.lists.list.filter(item => {
        return item.market_attribute.year == state.currentYear;
      }))
    }
  }
}

let mutations = {
  // 改变年份
  changeYear(state, payload) {
    state.currentYear = payload;
  },
  px(state, payload) {
    //车型数据排序
    payload.list.sort((a, b) => {
      //先按照年份排倒序
      if (b.market_attribute.year != a.market_attribute.year) {
        return b.market_attribute.year - a.market_attribute.year
      } else {
        //按照排量排序 升序
        if (b.exhaust_str > a.exhaust_str) {
          return -1
        } else if (b.exhaust_str < a.exhaust_str) {
          return 1
        } else {
          //按照功率排序 圣序
          if (b.max_power_str > a.max_power_str) {
            return -1
          } else if (b.max_power_str < a.max_power_str) {
            return 1
          } else {
            // 按照指导价格排序 升序
            if (b.market_attribute.dealer_price_min > a.market_attribute.dealer_price_min) {
              return -1
            } else {
              return 1
            }
          }
        }
      }
    })
    console.log('456', payload.list)
    state.lists = payload;
  }
}

let actions = {
  getList({
    commit
  }, payload) {
    getList(payload).then(body => {
      console.log('123', body)
      commit('px', body.data)
    })
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
