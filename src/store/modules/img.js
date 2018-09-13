import {
  getImgList
} from "../../data/data"


let state = {
  imgList : []
}

let getters = {

}

let mutations = {
  imgData (state, payload) {
    let reg = /(\{)([\d])(\})/g
    payload.map(item => {
      item.List.map(val => {
        val.Url = val.Url.replace(reg,(a,b,c) => {
          return val.LowSize
        })
      })
    })
    state.imgList = payload
  }
}
let actions = {
  getImgList({
    commit
  },payload) {
    getImgList(payload).then(body => {
      console.log("img...", body)
      commit("imgData",body.data)
    })
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
