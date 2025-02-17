import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/pages/home.vue'
import Project from '@/pages/project/index.vue'
import Blog from '@/pages/blog.vue'
import ProjectDetail from '@/pages/project/project-detail.vue'
import Collection from '@/components/collection.vue'
import NotFound from '@/components/NotFound.vue'
import Customer from '@/pages/customer.vue'

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/project',
        component: Project,
        children: [
            {
                path: '', component: Collection
            },
            {
                path: ':id', component: ProjectDetail
            }
        ]
    },
    {
        path: '/blog',
        component: Blog
    },
    {
        path: '/customer', component: Customer
    },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

const router = createRouter({
    linkActiveClass: 'font-bold',
    history: createWebHistory(),
    routes,
})

export default router