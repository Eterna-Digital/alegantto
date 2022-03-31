<template>
  <div class="cont-info">
    <Enfoque />
    <Alianza />
    <Clientes />
  </div>
</template>

<script>
import Enfoque from "../views/Enfoque.vue";
import Alianza from "../views/Alianza.vue";
import Clientes from "../views/Clientes.vue";

export default {
  components: {
    Enfoque,
    Alianza,
    Clientes,
  },
};
</script>

<style>
.cont-info {
  width: 100vw !important;
  top: 0;
  left: 0;
  padding: 0;
  margin-right: 0 !important;
  margin-left: 0 !important;
}
</style>
