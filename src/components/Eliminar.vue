<template>
    <div id="Eliminar">
         
        <body align = "justify">
                
                Nombre:         <input type="text" placeholder= "nombre" v-model="nombre"/><br/>
                Empresa:        <input type="text" placeholder= "empresa" v-model="empresa"/><br/>
                <button v-on:click="get_datos" >Eliminar </button> 
        </body> 
    </div>    
</template> 

<script>
import axios from 'axios';
export default {
    name: "eliminar",
    data: function (){
        return {
            nombre: "" ,
            empresa: "",
        }
    },
    methods: {
        get_datos: function()
        {
            var dataIn = {
                nombre: this.nombre ,
                empresa: this.empresa,
               
            };
            
            axios.delete("http://127.0.0.1:8000/proyecto/eliminar/"+this.nombre+"/"+this.empresa)
            .then(response => {

                alert("Se eliminó el proyecto con éxito");
                this.$router.push({ name:"eliminar"})
            })
            
            .catch((error) => {
                alert("ERROR Servidor");
            });
        }

    }
    
}
</script>
<style>
    #Eliminar{
        height: 100%;
        padding-top: 0%;
        padding-bottom: 3%;

    }
   
    #Eliminar body{
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
    #Eliminar h2{
        font-family:'Courier New', monospace;
        font-size: 50px;
        color: #f4f6f8;
    }
    #Eliminar span{
        font-family:'Courier New', monospace;
        color: rgb(255, 255, 255);
        font-weight: bold;
    }
    #Eliminar body button{
        font-family:'Courier New', monospace;
        font-size: 19px;
        color: #f4f6f8;
        background-color: #283747;
        border-radius: 6px;
        align-content:"center"
    }
    #Eliminar Body button:hover{
        background-color: #a7a8aa;
        color: white;
    }
    tr{
        color: #000000;
    }

</style>
