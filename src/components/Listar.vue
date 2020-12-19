<template>
    <div id="Listar">        
        <table id="tabla">
            <tr>
                <th>Nombre</th>
                <th>Empresa</th>
                <th>Descripción</th>
                <th>Fases</th>
                <th>Fecha de Inicio</th>
                <th>Fecha Fin</th>
                <th>Presupuesto</th>
                <th>Encargado</th>
                <th>No. de Personas</th>
                <th>Horas Estimadas</th>
            </tr>
            <tr v-for="p in proyectos" v-bind:key="p.nombre">
                <td>{{ p.nombre }}</td>
                <td>{{ p.empresa }}</td>
                <td>{{ p.descripcion }}</td>
                <td>{{ p.fases }}</td>
                <td>{{ p.fecha_inicio }}</td>
                <td>{{ p.fecha_fin }}</td>
                <td>{{ p.presupuesto }}</td>
                <td>{{ p.encargado }}</td>
                <td>{{ p.num_personas }}</td>
                <td>{{ p.horas_estimados }}</td>
            </tr>
        </table>
    </div>    
</template>

<script>
import axios from "axios";
export default {
    name: "listar",
    data: function () {
        return {
            proyectos: [],
            
        };
    },
    
    created: function() {
        
        axios.get("http://127.0.0.1:8000/proyecto/lista/")
        .then(response => {
            this.proyectos = response.data
                     
        })
        .catch(error => {
            
            alert("Error de servidor")
        })
    }    
}
</script>

<style>
#Listar{
    height: 100%;
    padding-top: 10%;
    padding-bottom: 10%;
}
#tabla{
    background-color:  #727b94;
}
td {
    color: #000000;
    text-align: center;
    font-family:'Courier New', monospace;
}
th{
    color: #fffafa;
    text-align: center;
    font-family:'Courier New', monospace;

}
#tabla th, #table td {
  border: 1px solid white;
}
</style>
