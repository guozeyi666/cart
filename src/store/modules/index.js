import {
  getBrandList,
  getMakeList,
  getList
} from "../../data/data"

let state = {
  zm: [],
  list: {},
  isShow: false,
  letter: '',
  brandId: '', // 品牌id
  makeList: '', // 车系列表
  isShowList: false //是否显示车系
}

let mutations = {
  initState: (state, payload) => {
    let zm = [];
    let list = {};
    payload.forEach((item) => {
      let spell = item.Spelling[0];
      if (zm.indexOf(spell) != -1) {
        list[spell].push(item)
      } else {
        zm.push(spell);
        list[spell] = [item]
      }
    })
    state.zm = zm;
    state.list = list;
  },
  showLetter: (state, payload) => {
    state.isShow = payload;
  },
  changeLetter: (state, payload) => {
    state.letter = payload;
  },
  changeMakeList: (state, payload) => {
    state.brandId = payload.id;
    state.makeList = payload.list;
    state.isShowList = true;
  },
  hideMakeList: (state) => {
    state.isShowList = false;
  }
}

let actions = {
  initState: ({
    commit
  }, payload) => {
    getBrandList().then(body => {
      console.log(body)
      if (body.code == 1) {
        commit('initState', body.data);
      } else {
        alert(body.msg);
      }
    })
  },
  getMakeList: ({
    commit,
    state
  }, payload) => {
    if (payload != state.brandId) {
      console.log('id...', payload);
      getMakeList(payload).then(body => {
        console.log('makeList...', body);
        commit('changeMakeList', {
          id: payload,
          list: body.data
        })
      })
    }
  }
}

export default {
  state,
  mutations,
  actions
}
