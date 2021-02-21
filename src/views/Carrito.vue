<template>
  <div class="body-batoi container profile-batoi">
    <h1 class="col-12">
      {{ user ? `Usuario ${user.name}` : "No estas identificado" }}
    </h1>

    <div class="body-batoi row" v-if="user">
      <h1 class="col-12">Listado de Productos en carrito</h1>
      <product-card
        v-for="producto in userProds"
        :key="producto.id"
        :producto="producto"
      ></product-card>
    </div>
    <div v-if="!user" class="col-12 row justify-content-center">
      <p>Inicia sesión para ver tu carrito.</p>
      <a class="float-left nav-link btn btn-green w-100 h-100" href="/login"
        ><b-icon-box-arrow-right></b-icon-box-arrow-right>Login</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "user-table",
  computed: {
    user() {
      if (this.$store.state.userAuth.name) {
        return this.$store.state.userAuth;
      }else{
        return false;
      }
    },
  },
  mounted() {
    this.$store.dispatch("loadUser", this.user);
  },
};
</script>