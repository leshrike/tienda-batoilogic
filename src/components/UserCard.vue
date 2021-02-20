<template>
    <b-card class="container col-12 justify-content-around">
        <img v-if="user.profile_photo_path" :src="require(user.profile_photo_path)" height="100px" :alt="user.name">
        <div class="col-12">
            <p>Email: {{ user.email }}, Dirección: {{ user.address }}€</p>
        </div>
    </b-card>
</template>
<script>
export default {
    name:"user-card",
    computed:{
        user() {
            return this.$store.getters.getUserAuth();
        },
    }
}
</script>