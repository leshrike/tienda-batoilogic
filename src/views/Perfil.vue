<template>
  <div class="body-batoi container profile-batoi">
    <h1 class="col-12">{{ user? `Usuario ${user.name}`:"No estas identificado" }}</h1>
    <user-card
      v-if="user"
      :key="user.id"
      :user="user"
    ></user-card>
    <div  v-if="!user" class="col-12 row justify-content-center">
      <p>Inicia sesión para ver tu perfil.</p>
      <a class="float-left nav-link btn btn-green w-100 h-100" href="/login"
        ><b-icon-box-arrow-right></b-icon-box-arrow-right>Login</a
      >
    </div>
  </div>
</template>

<script>

import UserCard from "../components/UserCard";

export default {
  name: "user-table",
  components: {
    UserCard,
  },
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
    this.$store.dispatch("loadUser", this.token);
  },
};
</script>