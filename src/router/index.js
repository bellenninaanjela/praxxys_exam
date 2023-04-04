import { createRouter, createWebHistory } from '@ionic/vue-router';
import HomePage from '../views/HomePage.vue'
import OrderMenu from '../views/OrderMenu.vue'
import Food from '../views/Food.vue'
import pizza from '@/img/pizza.png';
import special1 from '@/img/special1.png';
import burger2 from '@/img/burger2.png';
import burger3 from '@/img/burger3.png';

import hb2 from '@/img/menu/hb2.jpg';
import hb4 from '@/img/menu/hb4.jpg';
import hb5 from '@/img/menu/hb5.jpg';

import eb1 from '@/img/menu_nobg/3.png';
import eb2 from '@/img/menu_nobg/4.png';
import eb3 from '@/img/menu_nobg/5.png';

import fries from '@/img/add/fries.png';
import sauce from '@/img/add/sauce.png';



const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage,
    props: {
      first_name: 'Chou',
      last_name: 'Tzuyu',
      acc_points: '10',
      eb_count: '3',
      bc_count: '4',
      vb_count: '2',
      
      special1: pizza,
      special2: special1,
      special3: burger2,
      special4: burger3,
      cate1: hb2,
      cate2: hb5,
      cate3: hb4,
    },
   },
   {
    path: '/category/:id',
    component: OrderMenu,
    props: {
      burger_name1: 'Double Cheese Burger',
      burger_name2: 'Spicy Double Cheese Burger',
      burger_name3: 'Glazed Double Cheese Burger',
      price: 175,
      eb1: eb1,
      eb2: eb2,
      eb3: eb3,
    },
  },
   {
    path: '/food/:id',
    component: Food,
    props: {
      burger_name1: 'Double Cheese Burger',
      burger_name2: 'Spicy Double Cheese Burger',
      burger_name3: 'Glazed Double Cheese Burger',
      burger_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      price: 175,
      addOn1_name: 'Regular Fries',
      addOn1_desc: 'Fries',
      addOn1_price: 49,
      addOn2_name: 'Tomato Sauce',
      addOn2_desc: 'Sauce',
      addOn2_price: 15,
      addOn1: fries,
      addOn2: sauce,
      eb1: eb1,
    },
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
