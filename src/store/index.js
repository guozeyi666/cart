import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';

// 引入modules
import index from './modules/index';
import detail from "./modules/data";
import img from "./modules/img"
import xunjia from "./modules/xunjia"
import city from "./modules/city"

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        index,
        detail,
        img,
        xunjia,
        city
    },
    plugins: [createLogger()]
})
