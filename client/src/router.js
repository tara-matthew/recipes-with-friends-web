import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Home from '@/components/Home'
import GridView from '@/components/GridView'
import ViewRecipe from '@/components/ViewRecipe'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/grid',
            name: 'gridView',
            component: GridView
        },
        {
            path: '/viewrecipe',
            name: 'viewRecipe',
            component: ViewRecipe
        }
    ]
})
