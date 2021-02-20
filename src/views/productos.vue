<template>
  <div class="body-batoi row">
    <h1 class="col-12">Listado de Productos en stock</h1>
    <product-card
      v-for="producto in products"
      :key="producto.id"
      :producto="producto"
    ></product-card>
  </div>
</template>

<script>

import ProductCard from "../components/ProductCard";

export default {
  name: "produts-table",
  components: {
    ProductCard,
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  mounted() {
    this.$store.dispatch("loadProducts");
  },
};
</script>