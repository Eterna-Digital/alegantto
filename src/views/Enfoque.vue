<template>
  <div style="width: 100vw" class="d-flex flex-column cont-enf" id="servicios">
    <v-card width="35%" elevation="0" color="transparent" class="cont-txt-e">
      <div class="d-flex flex-column txt-sec">
        <p class="font-weight-bold">NUESTRO SERVICIO</p>
        <span class="hr"></span>
        <h1 class="mt-4 mb-4">Enfoque en el cliente</h1>
        <p class="txt-e">
          Lo que nos hace únicos es que el propio socio es el encargado de
          dirigir el procedimiento; al contrario de lo que ocurre en otros
          despachos en los que contratas al socio y lo ves solo en la primera
          reunión, lo que le da valor añadido a nuestro servicio es que el
          propio socio se encarga de dirigir el procedimiento sin delegar esa
          responsabilidad en los abogados a su cargo.
        </p>
      </div>
    </v-card>
    <v-card
      width="100vw"
      class="d-flex cont-imgs-e"
      elevation="0"
      color="transparent"
    >
      <div class="cont-card">
        <div class="img1-e">
          <v-img src="../assets/01_img-servicios.jpg" />
        </div>
        <v-card class="txt-mini" elevation="4" tile color="#FFF">
          <div class="d-flex align-center justify-center pt-6 pb-6">
            <div><v-icon>mdi-briefcase-variant</v-icon></div>
            <div class="d-flex flex-column ml-4">
              <p class="head-c pa-0 ma-0">Con una vocación internacional</p>
              <p class="txt-c pa-0 ma-0">
                Somos un despacho joven, tratamos cada proyecto <br />
                con pasión y entusiamo
              </p>
            </div>
          </div>
        </v-card>
        <div class="img2-e">
          <v-img src="../assets/02_img-servicios.jpg" />
        </div>
      </div>
    </v-card>
    <v-card color="teal" class="d-flex justify-center card-cita">
      <div class="d-flex flex-column cita">
        <v-img
          src="../assets/comillas superior.svg"
          width="40px"
          class="comi-1"
        />
        <h1>
          Para nosotros cada cliente es único,<br />
          nos importan las personas y no el negocio.
        </h1>
        <v-img
          src="../assets/comillas inferior.svg"
          width="40px"
          class="comi-2"
        />
      </div>
    </v-card>
  </div>
</template>

<script>
export default {};
</script>

<style>
.cont-enf {
  background-image: url("../assets/00_back.png");
  background-repeat: no-repeat;
  background-size: 75%;
  background-position: left 40%;
}
.cont-txt-e {
  border: 2px solid geen;
  margin-left: 15%;
  margin-top: 8%;
}
.txt-sec {
  font-family: "Montserrat", sans-serif;
  color: #3b3a3b;
}
.hr {
  width: 25%;
  height: 1px;
  background-color: #3b3a3b;
}
h1 {
  font-family: "Playfair Display", serif;
}
.txt-e {
  line-height: 28px;
  font-size: 0.8rem;
  text-align: justify;
}
.cont-imgs-e {
  align-items: start !important;
  justify-content: flex-end;
  margin-top: 5%;
  margin-bottom: 25%;
}
.cont-card {
  display: flex;
  width: 65%;
  margin-top: 10%;
}
.img1-e {
  width: 50%;
  position: relative;
  display: flex;
  align-items: center;
}
.txt-mini {
  width: 36vw !important;
  position: absolute !important;
  z-index: 1 !important;
  display: flex;
  margin-left: 7%;
  margin-top: 15%;
}
.head-c {
  font-family: "Playfair Display", serif;
}
.txt-c {
  font-family: "Montserrat", sans-serif;
  font-size: 0.8rem;
}
.img2-e {
  width: 50%;
  position: relative;
  display: flex;
  align-items: center;
}
.card-cita {
  position: relative;
  margin-bottom: 10%;
}
.cita {
  border: 3px solid #eeeeee;
  width: 60%;
  position: absolute;
  margin-top: -13%;
}
.cita h1 {
  text-align: center;
  margin-top: 5%;
  margin-bottom: 5%;
}
.cita .comi-1 {
  margin-left: 14%;
  margin-top: -1.3rem;
  position: absolute;
}
.cita .comi-2 {
  margin-left: 82%;
  position: absolute;
  margin-top: 20%;
}
</style>
