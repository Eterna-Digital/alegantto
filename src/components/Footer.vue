<template>
  <v-footer color="#3B3A3B">
    <v-col class="text-center d-flex flex-column align-center" cols="12">
      <v-card class="v-flex flex-column align-center card-f" color="transparent" elevation="0">
        <div class="img-footer">
          <v-img src="../assets/12_logo footer.svg" />
        </div>
        <p class="textito caption mt-4" style="color: #A09C9C">MÉXICO · ESPAÑA · ESTADOS UNIDOS</p>
      </v-card>
     <p class="textito caption mt-4" style="color: #A09C9C"> ©{{ new Date().getFullYear() }}</p>
    </v-col>
  </v-footer>
</template>

<script>
export default {};
</script>

<style>
.card-f{ 
    margin-top: 5%;
    width: 20%;
    display: flex;
    justify-content: center;
}
.img-footer{
    width: 75%;
}
</style>
