import {createRouter, createWebHashHistory} from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
    {
        path: '/i/allPhoto',
        name: 'Gallery',
        component: () => import('../views/GalleryAllTags'),
        meta: {
            layout: 'main'
        }
    },
    {
        path: '/',
        component: () => import('../views/PushToAllPhoto'),
        meta: {
            layout: "void"
        }
    },
    {
        path: '/:id',
        name: 'GalleryCatalog',
        component: Home,
        meta: {
            layout: 'main'
        }
    },
    {
        path: '/gallery-page/:id',
        name: 'GalleryPage',
        component: () => import('../views/GalleryPage'),
        meta: {
            layout: 'main'
        }
    },
    {
        path: '/info/about',
        name: 'about',
        component: () => import('../views/About'),
        meta: {
            layout: 'void'
        }
    },
    {
        path: '/articles/:id',
        name: 'articles',
        component: () => import('../views/Articles'),
        meta: {
            layout: 'tags'
        }
    },
    {
        path: '/article',
        name: 'articlesAllTags',
        component: () => import('../views/ArticlesAllTags'),
        meta: {
            layout: 'tags'
        }
    },
    {
        path: '/info/contact',
        name: 'contact',
        component: () => import('../views/Contact'),
        meta: {
            layout: 'void'
        }
    },
    {
        path: '/info/prints',
        name: 'prints',
        component: () => import('../views/Prints'),
        meta: {
            layout: 'main'
        }
    },
    {
        path: '/info/workshop',
        name: 'workshop',
        component: () => import('../views/Workshop'),
        meta: {
            layout: 'void'
        }
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    linkActiveClass: 'text-active',
    linkExactActiveClass: 'text-active'
})

export default router
