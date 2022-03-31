<template>
  <div style="width: 100vw" class="d-flex flex-column align-end" id="alianza">
    <v-card
      class="d-flex justify-space-between ma-0 pa-0"
      color="transparent"
      elevation="0"
      tile
      width="85%"
    >
      <div class="cont-a ma-0 pa-0">
        <div class="d-flex flex-column align-start sec1-a">
          <p class="font-weight-bold">MÉXICO · ESPAÑA · ESTADOS UNIDOS</p>
          <span class="hr"></span>
          <h1 class="mt-4 mb-4">Somos una alianza</h1>
          <p class="txt-e">
            La mayoría de los despachos de nuestro nivel, son locales, y el que
            tiene cierta inquietud internacional forma una simple alianza,
            nosotros vamos más allá creando un mismo despacho, con una misma
            filosofía.<br /><br />
            Todo surge de la vinculación entre Asturias y Mexico… una región que
            tuvo una emigración masiva a Mexico en los S. XIX y XX.
          </p>
        </div>
        <div class="color-block ma-0 pa-0"></div>
      </div>
      <div class="sec2-a">
        <v-img src="../assets/05_img alianza.jpg" />
      </div>
    </v-card>
    <v-card color="#3B3A3B" elevation="0" tile width="100vw" class="img-bottom">
      <div class="im-bo">
        <v-img src="../assets/06_img alianza.jpg" />
      </div>
    </v-card>
  </div>
</template>

<script>
export default {};
</script>

<style>
.cont-a {
  position: relative;
}
.sec1-a {
  padding-left: 15%;
}
.sec1-a .txt-e {
  width: 65%;
  text-align: justify;
  margin-bottom: 15%;
}
.color-block {
  width: 100% !important;
  height: 35% !important;
  position: absolute;
  margin-top: 20%;
  background: linear-gradient(180deg, #e6e1e2 100%, #3b3a3b 30%);
}
.sec2-a {
  width: 50%;
  padding-top: 8%;
}
.sec2-a img {
  width: 100%;
}
.img-bottom {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 20rem;
  border: 2px solid red;
  /* position: relative; */
}
.img-bottom .im-bo {
  width: 50% !important;
  margin-top: -7%;
  margin-left: 10%;
  position: absolute;
}
</style>
