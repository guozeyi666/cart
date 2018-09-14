import Vue from 'vue'
import Router from 'vue-router'
const Index = () => import('../components/index')
const Detail = () => import ('../components/detail')
const Img = () => import('../components/img')
const Denglu = () => import("../components/denglu")
const Xunjia = () => import("../components/xunjia")

Vue.use(Router)

let router = new Router({
  mode:"hash",
  routes: [
    {
      path:'/denglu',
      component:Denglu
    },{
      path: '/index',
      name: 'index',
      component: Index
    },{
      path:'/detail',
      component:Detail
    },{
      path:'/img',
      component:Img
    },{
      path:'/xunjia',
      component:Xunjia
    },{
      path:'*',
      redirect:'/index'
    }
  ]
})

router.beforeEach ((to,from,next) => {
  let login = window.localStorage.getItem('denglu');
  if(!login && to.path != '/denglu') {
    next('/denglu');
  }
  next()
})

router.afterEach((to,from) => {
  console.log('路由跳转...')
})
export default router;
