<template>
  <div class="form-group container justify-content-center">
    <h1 class="h1">Bienvenido a Batoilogic</h1>
    <div class="mw-5 mh-5">
      <img
        src="../assets/favicon.png"
        class="rounded mx-auto d-block img-fluid"
      />
    </div>
    <br />
    <h2>Inicia sesión o crea una cuenta nueva</h2>

    <ValidationObserver ref="form">
      <form @submit.prevent="login" novalidate class="card">
        <ValidationProvider
          rules="required|email"
          v-slot="{ error }"
          name="name"
          mode="lazy"
        >
          <br />
          <div class="form-group mx-sm-3 mb-2">
            <label for="email">Correo electrónico</label>
            <input
              class="form-control"
              type="email"
              name="email"
              v-model="user.email"
              placeholder="ejemplo@example.com"
            />
            <span class="error">{{ error }}</span>
          </div>
        </ValidationProvider>

        <ValidationProvider
          rules="required"
          v-slot="{ error }"
          name="password"
          mode="lazy"
        >
          <div class="form-group mx-sm-3 mb-2">
            <label for="password">Contraseña</label>
            <input
              class="form-control"
              type="password"
              name="password"
              v-model="user.password"
              placeholder="contraseña"
            />
            <span class="error">{{ error }}</span>
          </div>
          <br />
        </ValidationProvider>
        <div class="btn-group">
          <input
            type="submit"
            value="Registrarme"
            class="btn btn-primary btn-sm"
          />
          <a href="" class="btn btn-success btn-sm">No tengo cuenta</a>
        </div>
      </form>
    </ValidationObserver>
  </div>
</template>
<script>
import {
  ValidationProvider,
  ValidationObserver,
  extend,
  localize,
} from "vee-validate";
import {
  email,
  required,
  alpha_spaces,
  alpha_num,
} from "vee-validate/dist/rules";
import es from "vee-validate/dist/locale/es.json";

//resto de reglas a aplicar para la validación del formulario
extend("email", email);
extend("required", required);
extend("alpha_num", alpha_num);
extend("alpha_spaces", alpha_spaces);
localize("es", es);
export default {
  data() {
    return {
      user: {},
    };
  },
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  methods: {
    login() {
      this.$store.dispatch("login", this.user);
      this.user = {};
      this.$router.push("/productos");
    },
  },
};
</script>

<style scoped>
.error {
  color: red;
}
</style>