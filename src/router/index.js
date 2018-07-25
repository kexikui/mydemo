
import Home from '../components/Home'
import Login from '../components/Login.vue'
import NotFound from '../components/404.vue'

let routes = [
  {
    path: '/login',
    component: Login,
    name: '',
    hidden: true
  },
  {
    path: '/404',
    component: NotFound,
    name: '',
    hidden: true
  },
  {
    path: '/',
    component: Home,
    name: '系统管理',
    iconCls: 'el-icon-message',//图标样式class
    children: [
      // { path: '/main', component: Main, name: '角色管理', hidden: true },
      // { path: '/table', component: Table, name: '用户管理' },
      // { path: '/form', component: Form, name: '权限管理' },
      // { path: '/user', component: user, name: '分组管理' },
    ]
  },
  {
    path: '*',
    hidden: true,
    redirect: { path: '/404' }
  }
];

export default routes;
