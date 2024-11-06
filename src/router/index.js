import { createRouter, createWebHistory } from 'vue-router';
import ItemInfo from '../components/Item/ItemInfo.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ()=>import('../components/index/GridList.vue') // You can reference the imported ItemInfo directly
    },
    {
      path: '/item',
      name: 'item',
      component: ()=>import('../components/index/VerticalList.vue') // You can reference the imported ItemInfo directly
    }
  ]
});

export default router;

export const NOT_FOUND_ROUTE = {
  name: 'NotFound',
  path: '/:pathMatch(.*)*',
  redirect: '/404',
  isHidden: true,
};

export const EMPTY_ROUTE = {
  name: 'Empty',
  path: '/:pathMatch(.*)*',
  component: null,
};