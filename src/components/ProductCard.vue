<template>
    <b-card class="col-3 row justify-content-around">
        <div class="col-12">
            <p>{{ producto.name }} </p>
            <p>Stock: {{ producto.stock }}, Precio: {{ producto.price }}€</p>
            <p>{{ producto.description }}</p>
        </div>
        <button class="btn btn-sm col-2" @click="addToCart()">
            <b-icon-cart-plus-fill></b-icon-cart-plus-fill>
        </button>
    </b-card>
</template>
<script>
export default {
    name:"product-card",
    props:["producto"],
    computed: {
        UserProd() {
            return this.$store.state.UserProd;
        },
    },
    methods:{
        addToCart(){ 
            this.$store.dispatch("addToCart",  this.producto)
            .then(() => alert(`Producto ${ this.producto.name}
            añadido al carrito`))
            .catch((err) => alert(err.message || err));
        }
    }
}
</script>