<template>
  <tr>
    <td>{{ product.id }}</td>
    <td>{{ product.name }}</td>
    <td>{{ product.description }}</td>
    <td>{{ product.price }}</td>
    <td>{{ product.stock }}</td>
    <td>{{ privider.name }}</td>
    <td>
      <button class="btn btn-sm" @click="addToCart()">
        <b-icon-cart-plus-fill></b-icon-cart-plus-fill>
      </button>
    </td>
  </tr>
</template>

<script>
export default {
  name: "product-item",
  props: ["proveedor"],
  computed: {
    provider() {
      return this.$store.getters.getProvider(this.product.provider_id);
    },
  },
  methods: {
    goTo(path) {
      this.$router.push(path);
    },
    addToCart() {
        this.$store.dispatch('addToCart', this.product)
        if (alert('Quieres ver el carrito?')) {
            this.goTo('/carrito');
        }
    },
  },
};
</script>