<template>
<div id="app">
  <div class="header">

    <h1>PROYECTIA</h1>
    
    <nav>
      <button v-on:click="createProject" v-if="is_auth" >Crear Proyecto </button>
      <button v-on:click="getProject" v-if="is_auth" >Consultar </button>
    </nav>
    

</div>
  
  <div class="main-component" >
  </div>
  
  <div class="main-component">
  <router-view></router-view>
</div>

  <div class="footer">
    <h2>G2M2E3</h2>
  </div>
</div>
</template>

<script>

export default {
  name: 'App',

  components: {},

  data: function(){
    return {
      is_auth: localStorage.getItem('isAuth') || false
    }
  },
  methods: {
  getProject: function(){
    if(this.$route.name != "consulta"){
      let nombre = localStorage.getItem("current_nombre")
      this.$router.push({ name:"consulta",params:{nombre:nombre}})
      }
    },
     createProject: function(){
     if(this.$route.name != "crear"){
       this.$router.push({name:"crear"})
      }   
     }
  },
  
  beforeCreate: function(){
    localStorage.setItem('current_nombre', 'campaniasalento')
    localStorage.setItem('isAuth', true)

    this.$router.push({name:"consulta",params:{nombre:'campaniasalento'}})

  }
}
</script>

<style>
  body{
    margin: 0 0 0 0;
    background-color:  #727b94;
    }
  .header{
    margin: 0%;
    padding: 0;
    width: 100%;
    height: 10vh;
    min-height: 100px;
    background-color: #727b94 ;
    color:#ffffff ;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .header h1{
    font-family:'Courier New', monospace;
    width: 20%;
    text-align: center;
  }
  .header nav {
    height: 100%;
    width: 45%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 20px;
  }
  .header nav button{
    color: #E5E7E9;
    background: #283747;
    border: 1px solid #E5E7E9;
    border-radius: 5px;
    padding: 10px 20px;
  }
  .header nav button:hover{
    color: #283747;
    background: #E5E7E9;
    border: 1px solid #E5E7E9;
  }
  .main-component{
    height: 75vh;
    margin: 0%;
    padding: 0%;
    background: #E5E7E9 ;
    background-image: url('./assets/fondo4.jpg');
  }
  .footer{
    margin: 0;
    padding: 0;
    width: 100%;
    height: 10vh;
    min-height: 100px;
    background-color: #727b94;
    color: #E5E7E9;
  }
  .footer h2{
    font-family:'Courier New', monospace;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
