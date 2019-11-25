import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Home from '@/components/Home'
import CreateRecipe from '@/components/CreateRecipe/Index'
import Recipes from '@/components/Recipes/Index'
import Browse from '@/components/Browse'
import ViewRecipe from '@/components/ViewRecipe/Index'


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
            path: '/viewrecipe',
            name: 'viewRecipe',
            component: ViewRecipe
        },
        {
            path: '/createrecipe',
            name: 'createRecipe',
            component: CreateRecipe
        },
        {
            path: '/recipes',
            name: 'recipes',
            component: Recipes
        },
        {
            path: '/browse',
            name: 'browse',
            component: Browse
        },
    ]
})
