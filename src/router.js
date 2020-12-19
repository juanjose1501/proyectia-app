import vueRouter from 'vue-router'
import CreateProject from './components/CreateProject'
import ConsultarProjectName from './components/ConsultarProjectName'
import Listar from './components/Listar' 
import Eliminar from './components/Eliminar'
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
            path: '/proyecto/crear',
            name: "crear",
            component: CreateProject
        },
        {
            path: '/proyecto/consulta/',
            name: "consultanombre",
            component: ConsultarProjectName
        },
        {
            path: '/proyecto/lista/',
            name: "listar",
            component: Listar
        },
        {
            path: '/proyecto/eliminar/',
            name: "eliminar",
            component: Eliminar
        },
    ]
})
export default router