import Index from 'pages/Index.vue';
import Login from 'pages/Login.vue';
import Signup from 'pages/Signup.vue';
import AngelSignUp from 'pages/angel/AngelSignup.vue';

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
    name: 'Signup',
    path: '/signup',
    component: Signup,
  },
  {
    name: 'AngelSignUp',
    path: '/angel/signup',
    component: AngelSignUp,
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
      { path: 'resources', component: () => import('pages/angel/Resources.vue') },
      { path: 'chat', component: () => import('pages/angel/ChatList.vue') },
      { path: 'chat/:id', component: () => import('pages/angel/ChatDetail.vue') },
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
