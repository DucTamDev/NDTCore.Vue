import MainLayout from '@/shared/layouts/MainLayout.vue';
import BlankLayout from '@/shared/layouts/BlankLayout.vue';
import AboutView from '@/views/AboutView.vue';
import HomeView from '@/views/HomeView.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import LoginView from '@/views/LoginView.vue';

const routes = [
  {
    path: '',
    name: 'MainLayout',
    component: MainLayout,
    children: [
      {
        path: '',
        exact: true,
        alias: 'home',
        name: 'Home',
        component: HomeView,
        meta: { title: 'home' }
      },
      {
        path: 'about',
        alias: 'about',
        name: 'About',
        component: AboutView,
        meta: { title: 'about' }
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'BlankLayout',
    component: BlankLayout,
    children: [
      {
        path: 'login',
        alias: 'login',
        name: 'Login',
        component: LoginView,
        meta: { title: 'login' }
      },
      {
        path: '',
        alias: 'not-found',
        name: 'NotFound',
        component: NotFoundView,
        meta: { title: 'notfound' }
      }
    ]
  }
];

export default routes;
