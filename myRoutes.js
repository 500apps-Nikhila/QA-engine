import Questions from '../components/question.vue'
import vue from 'vue'
import VueRouter from 'vue-router'

vue.use(VueRouter)
const routes = [
    {
        path = "/questions",
        component : Questions

    }
]

const router = new VueRouter({
    routes : routes,
    mode : 'history'
})
new Vue({
    el :'#app',
    router,
    render :h => h(Questions)
})



