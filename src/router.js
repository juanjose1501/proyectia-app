import vueRouter from 'vue-router'
import ConsultarProject from './components/ConsultarProject'
import CreateProject from './components/CreateProject'
import App from './App'

const router = new vueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/',
            name: "root",
            component: App
        },

        {
            path: '/proyecto/consulta/:nombre',
            name: "consulta",
            component: ConsultarProject
        },
        {
            path: '/proyecto/crear',
            name: "crear",
            component: CreateProject
        },
    ]
})
export default router