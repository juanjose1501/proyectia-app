<template>
    <div id="ConsultarProject">
        <body>
            <h2 align="center">{{nombre}}</h2>
        <ul>
            <li>Empresa: <span>{{empresa}} </span> </li>
            <li>Descripcion: <span>{{descripcion}}</span></li>
            <li>Fases: <span>{{fases}}</span></li>
            <li>Fecha de Inicio: <span>{{fecha_inicio}}</span></li>
            <li>Fecha Fin: <span>{{fecha_fin}}</span></li>
            <li>Presupuesto: <span>{{presupuesto}}</span></li>
            <li>Encargado: <span>{{encargado}}</span></li>
            <li>Numero Personas: <span>{{num_personas}}</span></li>
            <li>Horas Estimadas: <span>{{horas_estimados}}</span></li> 
        </ul> 
        </body> 

    </div>
</template> 

<script>
import axios from 'axios';
export default {
    name: 'ConsultarProject',
    data: function (){
        return {
            nombre: "",
            empresa: "",
            descripcion: "",
            fases: "",
            fecha_inicio: "",
            fecha_fin: "",
            presupuesto: 0,
            encargado: "",
            num_personas: 0,
            horas_estimados: 0,
        }
    },
    created: function(){
        this.nombre = this.$route.params.nombre
        let self = this
        
        axios.get("http://127.0.0.1:8000/proyecto/consulta/" + this.nombre)
            .then((result) => {
                self.empresa = result.data.empresa
                self.descripcion = result.data.descripcion
                self.fases = result.data.fases
                self.fecha_inicio = result.data.fecha_inicio
                self.fecha_fin = result.data.fecha_fin
                self.presupuesto = result.data.presupuesto
                self.encargado = result.data.encargado
                self.num_personas = result.data.num_personas
                self.horas_estimados = result.data.horas_estimados
            })  
            .catch((error) => {
                alert("ERROR Servidor");
            });
    }
}
</script>

<style>
    #ConsultarProject{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    #ConsultarProject h2{
        font-family:'Courier New', monospace;
        font-size: 50px;
        color: #f4f6f8;
    }
    #ConsultarProject span{
        font-family:'Courier New', monospace;
        color: rgb(255, 255, 255);
        font-weight: bold;
    }
</style>
