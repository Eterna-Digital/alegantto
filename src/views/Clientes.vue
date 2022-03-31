<template>
  <div class="clients-container d-flex flex-column align-center" id="clientes">
    <v-card
      class="d-flex card-clients"
      width="65%"
      elevation="0"
      color="transparent"
    >
      <div class="img1-e">
        <v-img src="../assets/08_img nuestros clientes.png" />
      </div>
      <div class="txt-clients">
        <p class="font-weight-bold">DESPACHO INTERNACIONAL</p>
        <div class="hrc"></div>
        <h1 class="mt-4 mb-4">Nuestros clientes</h1>
        <p class="txt-e">
          En el caso de España, nuestros clientes principales son empresas PYMES
          y sobre todo empresas familiares. Al tener una alianza consolidada se
          nos abre la posibilidad de atender a las empresas con intereses en
          España o en Mexico, brindando nuestros servicios en cualquier parte
          del mundo respondiendo por el resultado, buscando siempre la major
          opción possible para nuestros clientes.
        </p>
      </div>
    </v-card>
    <div class="d-flex justify-center">
      <v-card class="d-flex flex-column align-center" width="70%" color="transparent" elevation="0">
        <h1 class="mt-4 mb-4">Lo que dicen nuestros clientes:</h1>
        <v-container fluid grid-list-md>
          <v-layout row wrap d-flex justify-center>
            <v-flex d-flex justify-start xs12 sm12 md4>
              <v-card class="d-flex flex-column justify-center pa-6" elevation="0">
                <div class="d-flex mb-3">
                  <v-icon small color="#3B3A3B">mdi-star</v-icon>
                  <v-icon small color="#3B3A3B">mdi-star</v-icon>
                  <v-icon small color="#3B3A3B">mdi-star</v-icon>
                  <v-icon small color="#3B3A3B">mdi-star</v-icon>
                  <v-icon small color="#3B3A3B">mdi-star</v-icon>
                </div>
                <div class="d-flex flex-column">
                  <p class="txtito">
                    "This plugin is amazing with the current version, I can’t
                    imagine it, how cool will it be when you finish"
                  </p>
                  <p class="font-weight-bold caption">MICHELE SMITH</p>
                  <p class="txtito">CDO at <strong>New company</strong></p>
                  <div class="border-b"></div>
                </div>
              </v-card>
            </v-flex>
            <v-flex d-flex justify-start xs12 sm12 md4>
              <v-card class="d-flex flex-column justify-center pa-6 ml-3 mr-3" elevation="0">
                <div class="d-flex mb-3">
                  <v-icon small color="#3B3A3B">mdi-star</v-icon>
                  <v-icon small color="#3B3A3B">mdi-star</v-icon>
                  <v-icon small color="#3B3A3B">mdi-star</v-icon>
                  <v-icon small color="#3B3A3B">mdi-star</v-icon>
                  <v-icon small color="#3B3A3B">mdi-star</v-icon>
                </div>
                <div class="d-flex flex-column">
                  <p class="txtito">
                    "This plugin is amazing with the current version, I can’t
                    imagine it, how cool will it be when you finish"
                  </p>
                  <p class="font-weight-bold caption">MICHELE SMITH</p>
                  <p class="txtito">CDO at <strong>New company</strong></p>
                  <div class="border-b"></div>
                </div>
              </v-card>
            </v-flex>
            <v-flex d-flex justify-start xs12 sm12 md4>
              <v-card class="d-flex flex-column justify-center pa-6 ml-3 mr-3" elevation="0">
                <div class="d-flex mb-3">
                  <v-icon small color="#3B3A3B">mdi-star</v-icon>
                  <v-icon small color="#3B3A3B">mdi-star</v-icon>
                  <v-icon small color="#3B3A3B">mdi-star</v-icon>
                  <v-icon small color="#3B3A3B">mdi-star</v-icon>
                  <v-icon small color="#3B3A3B">mdi-star</v-icon>
                </div>
                <div class="d-flex flex-column">
                  <p class="txtito">
                    "This plugin is amazing with the current version, I can’t
                    imagine it, how cool will it be when you finish"
                  </p>
                  <p class="font-weight-bold caption">MICHELE SMITH</p>
                  <p class="txtito">CDO at <strong>New company</strong></p>
                  <div class="border-b"></div>
                </div>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.clients-container {
  width: 100vw;
  background-image: url("../assets/09_back clientes.png");
  background-repeat: no-repeat;
  background-size: 50%;
  margin-bottom: 10%;
  margin-top: 5%;
}
.card-clients {
  margin-top: 5%;
  margin-right: 10%;
}
.img1-e {
  width: 60%;
  display: flex;
  justify-content: flex-start;
}
.img1-e img {
  width: 100% !important;
}
.txt-clients {
  width: 40%;
  padding-left: 2%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.txtito{
    font-family: "Montserrat", sans-serif;
  color: #3b3a3b;
  font-size: 0.8rem;
  text-align: justify;
}
.hrc {
  width: 25% !important;
  height: 1px !important;
  background-color: #3b3a3b;
}
</style>
