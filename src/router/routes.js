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
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'home', component: () => import('pages/Home.vue') },
      { path: 'resources', component: () => import('pages/Resources.vue') },
      { path: 'chat', component: () => import('pages/Chat.vue') },
    ],
  },
  {
    path: '/angel',
    component: () => import('layouts/AngelLayout.vue'),
    children: [
      { path: 'resources', component: () => import('pages/angels/Resources.vue') },
      { path: 'chat', component: () => import('pages/angels/ChatList.vue') },
      { path: 'chat/:id', component: () => import('pages/angels/ChatDetail.vue') },
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
