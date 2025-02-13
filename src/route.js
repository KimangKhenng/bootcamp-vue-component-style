import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/page/home.vue'
import Project from '@/page/project/index.vue'
import Blog from '@/page/blog.vue'
import ProjectDetail from '@/page/project/project-detail.vue'
import Collection from '@/components/collection.vue'
import NotFound from '@/components/NotFound.vue'
import Customer from '@/page/customer.vue'

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