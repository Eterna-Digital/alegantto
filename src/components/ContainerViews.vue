<template>
  <div class="d-flex flex-column align-center principal">
    <Home />
    <Info />
    <Contact />
  </div>
</template>

<script>
import Home from "./Home.vue";
import Info from "./Info.vue";
import Contact from "./Contact.vue";

export default {
  components: { Home, Info, Contact },
};
</script>

<style>
.principal {
  width: 100vw !important;
  margin: 0;
  padding: 0;
  background-color: #f4f4f4;
}
</style>
