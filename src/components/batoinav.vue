<template>
<nav class="navbar navbar-expand-sm navbar-dark nav-batoi">
      <a class="navbar-brand" href="/"
        ><img src="@/assets/favicon.png" height="35" width="35"
      /></a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="/productos">Productos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/about">Acerca de</a>
          </li>
        </ul>
      </div>
      <div class="nav-item">
      <a class="float-left nav-link btn btn-blue" href="/perfil/" ><b-icon-person-fill></b-icon-person-fill></a>
      </div>

      <div class="nav-item">
      <a class="float-left nav-link btn btn-red" href="/logout" ><b-icon-box-arrow-left></b-icon-box-arrow-left>Logout</a>
      </div>

      <div class="nav-item">
      <a class="float-left nav-link btn btn-green" href="/login" ><b-icon-box-arrow-right></b-icon-box-arrow-right>Login</a>
      </div>
    </nav>
</template>

<script>
export default {
    name:"batoinav",
    props:["user"],
    mounted() {
      this.$store.dispatch("loadUsers");
    },
};
</script>