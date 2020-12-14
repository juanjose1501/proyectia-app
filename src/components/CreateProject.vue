<template>
<div align="center" id="CreateProject">
    nombre:         <input type="text" placeholder= "nombre" v-model="nombre"/><br/>
    empresa:        <input type="text" placeholder= "empresa" v-model="empresa"/><br/> 
    descripcion:    <input type="text" placeholder= "descripción" v-model="descripcion"/><br/>
    fases:          <input type="" placeholder= "fases" v-model="fases"/><br/>
    fecha_inicio:   <input type="text" placeholder= "dd/mm/aaaa" v-model="fecha_inicio"/><br/>
    fecha_fin:      <input type="text" placeholder= "dd/mm/aaaa" v-model="fecha_fin"/><br/>
    presupuesto:    <input type="number" placeholder= "presupuesto" v-model="presupuesto"/><br/>
    encargado:      <input type="text" placeholder= "encargado" v-model="encargado"/><br/>
    num_personas:   <input type="number" placeholder= "num. personas" v-model="num_personas"/><br/>
    horas_estimados:<input type="number" placeholder= "horas estimadas" v-model="horas_estimados"/><br/>
    <button v-on:click="crear_proyecto" >Crear Proyecto </button>
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
                //this.$router.push({ name:"consulta",params:{nombre: data.nombre}})
            })
            
            .catch((error) => {
                alert("ERROR Servidor");
            });
        }

    }
    
}
</script>