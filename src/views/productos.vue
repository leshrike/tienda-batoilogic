<template>
  <div class="row body-batoi">
    <div class="col-12">
      <h1>Listado de productos</h1>
      <table class="table table-striped table-hover col-12 table-batoi">
        <thead class="bg-primary">
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Descripcion</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <product-item
            v-for="producto in productos"
            :key="producto.id"
            :producto="producto"
          ></product-item>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>

import ProductItem from "../components/ProductItem";

export default {
  name: "produts-table",
  components: {
    ProductItem,
  },
  computed: {
    produts() {
      return this.$store.state.produts;
    },
  },
  mounted() {
    this.$store.dispatch("loadOfertas", this.empresa);
  },
};
</script>