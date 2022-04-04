<template>
  <v-footer color="#3B3A3B" class="d-flex flex-column align-center justify-center">
      <v-card class="v-flex flex-column align-center card-f" color="transparent" elevation="0">
        <div class="img-footer">
        </div>
        <p class="textito caption mt-4" style="color: #A09C9C">MÉXICO · ESPAÑA · ESTADOS UNIDOS</p>
      </v-card>
     <p class="textito caption mt-4" style="color: #A09C9C"> ©{{ new Date().getFullYear() }}</p>
    <!-- </v-col> -->
  </v-footer>
</template>

<script>
export default {};
</script>

<style>
.card-f{ 
    margin-top: 5%;
    /* width: 50%; */
    display: flex;
    justify-content: center;
    border: 2px solid rgb(255, 255, 255) !important;
}
.img-footer{
    width: 14rem;
    height: 2rem;
    background-image: url("../assets/12_logo footer.svg");
    background-repeat: no-repeat;
    background-position: center;
}

</style>
