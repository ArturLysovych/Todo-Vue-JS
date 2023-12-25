import Home from '@/views/Home'
import Todos from '@/views/Todos'
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
      path: '/',
      component: Home
    },
    {
        path: '/todos',
        component: Todos
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;