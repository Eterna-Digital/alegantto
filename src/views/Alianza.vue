<template>
  <div style="width: 100vw" class="d-flex flex-column align-end" id="alianza">
    <v-card
      class="d-flex justify-space-between ma-0 pa-0 card-al"
      color="transparent"
      elevation="0"
      tile
    >
      <div class="cont-a ma-0 pa-0">
        <div class="d-flex flex-column align-start sec1-a">
          <p class="font-weight-bold">MÉXICO · ESPAÑA · ESTADOS UNIDOS</p>
          <span class="hr"></span>
          <h1 class="mt-4 mb-4">Somos una Firma</h1>
          <p class="txt-e">
            Nuestra filosofía de negocio se ha adaptado al crecimiento unilateral del despacho, 
            logrando así tener un modelo inteligente de gestión legal que puede implementarse 
            en todo el mundo. Nuestro trabajo es el mismo sin importar en qué sitio del mundo 
            nos contrates, y por lo mismo si alguno de nuestros clientes viaja, puede visitar 
            cualquiera de nuestras oficinas para recibir información, servicio y constancia de 
            lo qué pasa en su negocio. Es por esto que nosotros somos una firma con sede en 
            varios puntos del mundo regidos por una misma ideología.
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
#alianza{
  margin-top: 5%;
}
.cont-a {
  position: relative;
}
.card-al {
  width: 85%;
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
  height: 50% !important;
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
@media only screen and (max-width: 640px) {
#alianza{
  margin-top: 30%;
}
  .card-al {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
  .sec1-a {
    padding: 0 1rem 0 1rem;
  }
  .sec1-a .txt-e {
    width: 100%;
  }
  .color-block {
    display: none;
  }
  .sec2-a {
    width: 100%;
    padding-top: 10%;
  }
  .img-bottom {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 6rem;
  }
  .img-bottom .im-bo {
    width: 80% !important;
    margin-top: -5%;
    margin-left: 35%;
    position: absolute;
  }
}
</style>
