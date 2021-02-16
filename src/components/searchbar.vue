<template>

<div class="input-group">
  <div class="form-outline">
    <input type="search" id="form1" class="form-control" />
    <label class="form-label" for="form1">Busca tu marca</label>
  </div>
  <button type="button" class="btn btn-primary" v-on:click="buscar()" v-bind:value="busqueda">
    <i class="fas fa-search"></i>
  </button>
</div>
    
</template>

<script>
export default {

    methods: {
        buscar(){
            //con el valor de la barra de busqueda, consultamos si existe en la api, si es asi, redireccionamos a una página en la que carguemos todos los productos
            // con la misma marca
        }
    }
    
}
</script>