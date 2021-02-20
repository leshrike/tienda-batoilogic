<template>
  <div class="body-batoi row">
    <h1 class="col-12">Usuario {{ user.name }}</h1>
    <user-card
      :key="user.id"
      :user="user"
    ></user-card>
  </div>
</template>

<script>

import UserCard from "../components/UserCard";

export default {
  name: "user-table",
  props:['token'],
  components: {
    UserCard,
  },
  computed: {
    users() {
      return this.$store.state.users;
    },
  },
  mounted() {
    this.$store.dispatch("loadUser", this.token);
  },
};
</script>