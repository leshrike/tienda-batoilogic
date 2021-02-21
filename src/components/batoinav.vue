<template>
  <nav class="navbar navbar-expand-sm nav-batoi">
    <a class="navbar-brand" href="/"
      ><img src="@/assets/favicon.png" height="35" width="35"
    /></a>
    <div class="nav-item">
          <a class="nav-link" href="/productos">Productos</a>
    </div>
    
    <div class="nav-item">
          <a class="nav-link" href="/about">Acerca de</a>      
    </div>

    <div class="float-right nav-item">
      <a class="nav-link btn btn-blue" href="/perfil" v-if="user"
        ><b-icon-person-fill></b-icon-person-fill
      ></a>
    </div>

    <div class="float-right nav-item">
      <a class="nav-link btn-blue" href="/carrito" v-if="user"
        ><b-icon-cart-fill></b-icon-cart-fill
      ></a>
    </div>

    <div class="float-right nav-item">
      <a class="nav-link btn btn-red" href="/logout" v-if="user"
        ><b-icon-box-arrow-left></b-icon-box-arrow-left>Logout</a
      >
    </div>

    <div class="float-right nav-item">
      <a class="nav-link btn btn-green" href="/login"
        ><b-icon-box-arrow-right></b-icon-box-arrow-right>Login</a
      >
    </div>
  </nav>
</template>

<script>
export default {
  name: "batoinav",
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
    this.$store.dispatch("loadUsers");
  },
};
</script>