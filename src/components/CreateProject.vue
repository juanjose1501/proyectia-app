<template>
<div align= "center"  id="CreateProject">

        <body>
            <h2 align="center">NUEVO PROYECTO </h2>
        <table id="tabla2">
                <tr>
                    <td>Nombre:</td>
                    <td><input  type="text"  placeholder= "nombre" v-model="nombre"/></td>
                </tr>
                <tr>
                    <td>Empresa:</td>
                    <td><input  type="text" placeholder= "empresa" v-model="empresa"/></td>
                </tr>
                <tr>
                    <td>Descripcion:</td>
                    <td><input type="text" placeholder= "descripción" v-model="descripcion"/></td>
                </tr>
                <tr>
                    <td>Fases:</td>
                    <td><input type="text" placeholder= "fases" v-model="fases"/></td>
                </tr>
                <tr>
                    <td>Fecha de Inicio:</td>
                    <td><input type="text" placeholder= "dd/mm/aaaa" v-model="fecha_inicio"/></td>
                </tr>
                <tr>
                    <td>Fecha Fin:</td>
                    <td><input type="text" placeholder= "dd/mm/aaaa" v-model="fecha_fin"/></td>
                </tr>
                <tr>
                    <td>Presupuesto:</td>
                    <td><input type="number" placeholder= "presupuesto" v-model="presupuesto"/></td>
                </tr>
                <tr>
                    <td>Encargado:</td>
                    <td><input type="text" placeholder= "encargado" v-model="encargado"/></td>
                </tr>
                <tr>
                    <td>Numero Personas:</td>
                    <td><input type="number" placeholder= "num. personas" v-model="num_personas"/></td>
                </tr>
                <tr>
                    <td>Horas Estimadas: &nbsp;&nbsp;&nbsp;</td>
                    <td><input type="number" placeholder= "horas estimadas" v-model="horas_estimados"/></td>
                </tr>
            </table>
        </body> 
        <button id="botoncrear" v-on:click="crear_proyecto" >Crear Proyecto </button>
    </div>
    
    
</template>

<script>
import axios from 'axios';
export default {
    name: "crear",
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
        crear_proyecto: function()
        {
            var dataIn = {
                nombre: this.nombre ,
                empresa: this.empresa,
                descripcion: this.descripcion,
                fases: this.fases,
                fecha_inicio: this.fecha_inicio,
                fecha_fin: this.fecha_fin,
                presupuesto: this.presupuesto,
                encargado: this.encargado,
                num_personas: this.num_personas,
                horas_estimados: this.horas_estimados,
            };
            
            axios.post("http://127.0.0.1:8000/proyecto/crear", dataIn)
            .then(response => {

                alert("Se creó el proyecto con éxito");
                this.$router.push({ name:"consultanombre"})
            })
            
            .catch((error) => {
                alert("ERROR Servidor");
            });
        }

    }
    
}
</script>

<style>
    #CreateProject body{
        background-color:  #727b94;
        padding-bottom: 6%;
        padding-left: 5%;
        padding-right: 5%;
        border-radius: 50px;

    }
    #tabla2{
        border: 0px
    }

    #CreateProject{
        height: 100%;
        padding-top: 10%;
        padding-bottom: 10%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-family:'Courier New', monospace;
        
    }

    #CreateProject h2{
        font-family:'Courier New', monospace;
        font-size: 32px;
        color: #f4f6f8;
    }

    #botoncrear{
        font-family:'Courier New', monospace;
        font-size: 19px;
        color: #f4f6f8;
        background-color: #283747;
        border-radius: 6px;
        align-content:"center";
        margin-top: 5%;
        
    
    }

    #botoncrear:hover{
      background-color: #a7a8aa;
      color: white;
    }

</style>
