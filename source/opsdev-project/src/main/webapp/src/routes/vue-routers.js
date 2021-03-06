import VueRouter from 'vue-router'
import project from './project'

const routes = [
  {path: '/', redirect: '/project/list/1', name:'首页'},
  {path: '/project', redirect: '/project/list/1'},
  project
];

export default function (Vue) {
  Vue.use(VueRouter);
  return new VueRouter({routes});
}
