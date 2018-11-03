import Index from 'pages/Index.vue';
import Login from 'pages/Login.vue';

const routes = [
  {
    path: '/',
    component: Index,
  },
  {
    name: 'Login',
    path: '/login',
    component: Login,
  },
  {
    path: '/chat',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Chat.vue') },
    ],
  },
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue'),
  });
}

export default routes;
