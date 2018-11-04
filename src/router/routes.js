import Index from 'pages/Index.vue';
import Login from 'pages/Login.vue';
import Signup from 'pages/Signup.vue';
import AngelSignup from 'pages/angel/AngelSignup.vue';
import AngelLogin from 'pages/angel/AngelLogin.vue';

const routes = [
  {
    path: '/',
    component: () => import('layouts/AccountsLayout.vue'),
    children: [
      {
        path: '/',
        name: 'Landing',
        component: Index,
      },
      {
        path: '/login',
        name: 'Login',
        component: Login,
      },
      {
        path: '/signup',
        name: 'Signup',
        component: Signup,
      },
      {
        path: '/angel/signup',
        name: 'AngelSignup',
        component: AngelSignup,
      },
      {
        path: '/angel/login',
        name: 'AngelLogin',
        component: AngelLogin,
      },
    ],
  },
  {
    path: '/user',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: 'home',
        name: 'UserHome',
        component: () => import('pages/Home.vue'),
      },
      {
        path: 'resources',
        name: 'UserResources',
        component: () => import('pages/Resources.vue'),
      },
      {
        path: 'chat',
        name: 'UserChat',
        component: () => import('pages/Chat.vue'),
      },
    ],
  },
  {
    path: '/angel',
    component: () => import('layouts/AngelLayout.vue'),
    children: [
      {
        path: 'resources',
        name: 'AngelResources',
        component: () => import('pages/angel/Resources.vue'),
      },
      {
        path: 'chat-list',
        name: 'AngelChatList',
        component: () => import('pages/angel/ChatList.vue'),
      },
      {
        path: 'chat',
        name: 'AngelChatDetail',
        component: () => import('pages/angel/ChatDetail.vue'),
      },
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
