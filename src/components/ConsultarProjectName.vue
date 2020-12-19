<template>
    <div id="ConsultarProjectName">
         
        <body align = "justify">
                
                Nombre:         <input type="text" placeholder= "nombre" v-model="nombre"/><br/>
                Empresa:        <input type="text" placeholder= "empresa" v-model="empresa"/><br/>
                <button v-on:click="get_datos" >Consultar </button> 
                <h2 align="center">Consulta Tu Proyecto</h2>
       <table id="tabla1">
                <tr>
                    <td>Proyecto:</td>
                    <td><span>{{nombre}} </span></td>
                </tr>
                <tr>
                    <td>Empresa:</td>
                    <td><span>{{empresa}} </span></td>
                </tr>
                <tr>
                    <td>Descripción:</td>
                    <td><span>{{descripcion}}</span></td>
                </tr>
                <tr>
                    <td>Fases:</td>
                    <td><span>{{fases}}</span></td>
                </tr>
                <tr>
                    <td>Fecha de Inicio:</td>
                    <td><span>{{fecha_inicio}}</span></td>
                </tr>
                <tr>
                    <td>Fecha Fin:</td>
                    <td><span>{{fecha_fin}}</span></td>
                </tr>
                <tr>
                    <td>Presupuesto:</td>
                    <td><span>{{presupuesto}}</span></td>
                </tr>
                <tr>
                    <td>Encargado:</td>
                    <td><span>{{encargado}}</span></td>
                </tr>
                <tr>
                    <td>Número Personas:</td>
                    <td><span>{{num_personas}}</span></td>
                </tr>
                <tr>
                    <td>Horas Estimadas: &nbsp;&nbsp;&nbsp;</td>
                    <td><span>{{horas_estimados}}</span></td>
                </tr>
            </table>
        </body> 
        </div>
    
</template> 

<script>
import axios from 'axios';
export default {
    name: "consultanombre",
    data: function (){
        return {
            nombre: "" ,
            empresa: "",
            descripcion: "",
            fases:"",
            fecha_inicio:"",
            fecha_fin:"",
            presupuesto:0,
            encargado: "",
            num_personas: 0,
            horas_estimados: 0,
        }
    },
    methods: {
        get_datos: function()
        {
            var dataIn = {
                nombre: this.nombre ,
                empresa: this.empresa,
               
            };
            
            axios.get("http://127.0.0.1:8000/proyecto/consulta/"+this.nombre+"/"+this.empresa)
            .then(response => {
                this.nombre = response.data.nombre,
                this.empresa= response.data.empresa,
                this.descripcion= response.data.descripcion,
                this.fases =response.data.fases,
                this.fecha_inicio =response.data.fecha_inicio,
                this.fecha_fin =response.data.fecha_fin,
                this.presupuesto =response.data.presupuesto,
                this.encargado =response.data.encargado,
                this.num_personas =response.data.num_personas,
                this.horas_estimados =response.data.horas_estimados
                })
            
            .catch((error) => {
                alert("ERROR Servidor");
            });
        }

    }
    
}
</script>
<style>
    #ConsultarProjectName{
        height: 100%;
        padding-top: 0%;
        padding-bottom: 3%;

    }
    #tabla1{
         background-color:  #727b94;
         padding: 2%;
         padding-left: 5%;
         padding-right: 5%;
         border-radius: 25px;
    }
    
   
    #ConsultarProjectName body{
        color: #fffafa;
        height: 100%;
        padding-top: 10%;
        padding-bottom: 10%;
        font-family:'Courier New', monospace;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-image: url('../assets/fondo4.jpg');
    }
    #ConsultarProjectName h2{
        font-family:'Courier New', monospace;
        font-size: 50px;
        color: #f4f6f8;
    }
    #ConsultarProjectName span{
        font-family:'Courier New', monospace;
        color: rgb(255, 255, 255);
        font-weight: bold;
    }
    #ConsultarProjectName body button{
        font-family:'Courier New', monospace;
        font-size: 19px;
        color: #f4f6f8;
        background-color: #283747;
        border-radius: 6px;
        align-content:"center"
    }
    #ConsultarProjectName Body button:hover{
        background-color: #a7a8aa;
        color: white;
    }
    tr{
        color: #000000;
    }
    

    /*li{
        display: flex;
        justify-content: space-between;
    }*/
</style>
