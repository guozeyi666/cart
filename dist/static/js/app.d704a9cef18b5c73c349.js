webpackJsonp([6],{NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("IvJb"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var r=n("C7Lr")({},i,!1,function(t){n("VzI8")},null,null).exports,o=n("zO6J");a.a.use(o.a);var s=new o.a({mode:"hash",routes:[{path:"/denglu",component:function(){return n.e(3).then(n.bind(null,"EtnE"))}},{path:"/index",name:"index",component:function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"dAjm"))}},{path:"/detail",component:function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"lFou"))}},{path:"/img",component:function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"3Cih"))}},{path:"*",redirect:"/index"}]});s.beforeEach(function(t,e,n){window.localStorage.getItem("denglu")||"/denglu"==t.path||n("/denglu"),n()}),s.afterEach(function(t,e){console.log("路由跳转...")});var u=s,c=n("9rMa"),l=n("6LYt"),m=n.n(l),h=n("3cXf"),d=n.n(h),f=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};/\?/.test(t)?t+="&_="+ +new Date:t+="?_="+ +new Date;var a={method:e};return"POST"==e&&(a.body=d()(n)),fetch(t,a).then(function(t){return t.json()})},p={state:{zm:[],list:{},isShow:!1,letter:"",brandId:"",makeList:"",isShowList:!1},mutations:{initState:function(t,e){var n=[],a={};e.forEach(function(t){var e=t.Spelling[0];-1!=n.indexOf(e)?a[e].push(t):(n.push(e),a[e]=[t])}),t.zm=n,t.list=a},showLetter:function(t,e){t.isShow=e},changeLetter:function(t,e){t.letter=e},changeMakeList:function(t,e){t.brandId=e.id,t.makeList=e.list,t.isShowList=!0},hideMakeList:function(t){t.isShowList=!1}},actions:{initState:function(t,e){var n=t.commit;f("http://baojia-test.chelun.com/v2-car-getMasterBrandList.html").then(function(t){console.log(t),1==t.code?n("initState",t.data):alert(t.msg)})},getMakeList:function(t,e){var n,a=t.commit,i=t.state;e!=i.brandId&&(console.log("id...",e),(n=e,f("https://baojia.chelun.com/v2-car-getMakeListByMasterBrandId.html?MasterID="+n)).then(function(t){console.log("makeList...",t),a("changeMakeList",{id:e,list:t.data})}))}}},g=n("IHPB"),_=n.n(g),v=n("zsLt"),L=n.n(v),b={state:{lists:{},currentYear:"全部"},actions:{getList:function(t,e){var n,a=t.commit;(n=e,f("https://baojia.chelun.com/v2-car-getInfoAndListById.html?SerialID="+n)).then(function(t){console.log("123",t),a("px",t.data)})}},mutations:{changeYear:function(t,e){t.currentYear=e},px:function(t,e){e.list.sort(function(t,e){return e.market_attribute.year!=t.market_attribute.year?e.market_attribute.year-t.market_attribute.year:e.exhaust_str>t.exhaust_str?-1:e.exhaust_str<t.exhaust_str?1:e.max_power_str>t.max_power_str?-1:e.max_power_str<t.max_power_str?1:e.market_attribute.dealer_price_min>t.market_attribute.dealer_price_min?-1:1}),console.log("456",e.list),t.lists=e}},getters:{year:function(t){if(!t.lists.list)return[];var e=t.lists.list.map(function(t){return t.market_attribute.year}),n=new L.a(e);return["全部"].concat(_()(n))},list:function(t){if(!t.lists.list)return[];function e(t){var e=[],n={};return t.forEach(function(t){var a=t.exhaust_str+"/"+t.max_power_str+" "+t.inhale_type;-1==e.indexOf(a)?(e.push(a),n[a]=[t]):n[a].push(t)}),n}return"全部"==t.currentYear?e(t.lists.list):e(t.lists.list.filter(function(e){return e.market_attribute.year==t.currentYear}))}}},w={state:{imgList:[]},getters:{},actions:{getImgList:function(t,e){var n,a,i,r,o=t.commit;(n=e,r="SerialID="+n,a&&(r+="&ColorID="+a),i&&(r+="&CarID="+i),f("https://baojia.chelun.com/v2-car-getImageList.html?"+r)).then(function(t){console.log("img...",t),o("imgData",t.data)})}},mutations:{imgData:function(t,e){var n=/(\{)([\d])(\})/g;e.map(function(t){t.List.map(function(t){t.Url=t.Url.replace(n,function(e,n,a){return t.LowSize})})}),t.imgList=e}}};a.a.use(c.a);var x=new c.a.Store({modules:{index:p,detail:b,img:w},plugins:[m()()]});a.a.config.productionTip=!1,new a.a({el:"#app",store:x,router:u,components:{App:r},template:"<App/>"})},VzI8:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.d704a9cef18b5c73c349.js.map