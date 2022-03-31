<template>
  <div class="contact-container">
    <div class="background-cont">
      <v-card width="65%" class="cont-card" color="transparent" elevation="0">
        <v-container fluid grid-list-md>
          <v-layout row wrap d-flex justify-space-between>
            <v-flex d-flex justify-start xs12 sm12 md3>
              <div class="d-flex flex-column justify-start">
                <h1 class="mt-0 mb-4">Contacto</h1>
                <p class="txtito pr-10">Encuentranos en:</p>
                <v-virtual-scroll
                  :bench="benched"
                  height="400"
                  item-height="1000"
                  :items="items"
                  width="280"
                  class="pa-0"
                >
                  <v-list-item class="pa-0 ma-0">
                    <div class="ma-0 pa-0">
                      <p
                        class="text-uppercase textito caption font-weight-bold"
                      >
                        MIAMI
                      </p>
                      <p />
                      <p class="txtito pr-10">
                        Brickell City Centre, 78 SW 7th Street, 33130, Miami, Florida
                      </p>
                      <v-btn
                        outlined
                        tile
                        color="#3B3A3B"
                        class="d-flex align-center caption"
                        width="85%"
                        href="https://g.page/wework-brickell-city-miami?share"
                        target="_blank"
                        ><p class="textito pa-0 ma-0 mr-5">M A P S</p>
                        <span class="arrow-c pa-0 ma-0 mt-6 ml-4"></span
                      ></v-btn>
                    </div>
                  </v-list-item>
                  <v-list-item class="pa-0 ma-0">
                    <div class="mt-10 mb-3">
                      <p
                        class="text-uppercase textito caption font-weight-bold"
                      >
                        CDMX
                      </p>
                      <p />
                      <p class="txtito pr-10">
                        Monte Elbruz 37, Piso 10 Lomas de Chapultepec, Miguel Hidalgo 11000, CDMX
                      </p>
                      <v-btn
                        outlined
                        tile
                        color="#3B3A3B"
                        class="d-flex align-center caption"
                        width="85%"
                        href="https://goo.gl/maps/K94C1Vf3iEiHz1Cb7"
                        target="_blank"
                        ><p class="textito pa-0 ma-0 mr-5">M A P S</p>
                        <span class="arrow-c pa-0 ma-0 mt-6 ml-4"></span
                      ></v-btn>
                    </div>
                  </v-list-item>
                  <v-list-item class="pa-0 ma-0">
                    <div class="mt-10 mb-3">
                      <p
                        class="text-uppercase textito caption font-weight-bold"
                      >
                        MADRID
                      </p>
                      <p />
                      <p class="txtito pr-10">
                        Serrano 63, Escalera Castellana 1° izquierda 28010, Madrid, España
                      </p>
                      <v-btn
                        outlined
                        tile
                        color="#3B3A3B"
                        class="d-flex align-center caption"
                        width="85%"
                        href="https://goo.gl/maps/tfzYVTJhpcyxNkpbA"
                        target="_blank"
                        ><p class="textito pa-0 ma-0 mr-5">M A P S</p>
                        <span class="arrow-c pa-0 ma-0 mt-6 ml-4"></span
                      ></v-btn>
                    </div>
                  </v-list-item>
                  <v-list-item class="pa-0 ma-0">
                    <div class="mt-10 mb-3">
                      <p
                        class="text-uppercase textito caption font-weight-bold"
                      >
                        HOUSTON
                      </p>
                      <p />
                      <p class="txtito pr-10">
                        The Galleria 5065 Westheimer Rd. Suite 1130 77056, Houston, Tx.
                      </p>
                      <v-btn
                        outlined
                        tile
                        color="#3B3A3B"
                        class="d-flex align-center caption"
                        width="85%"
                        href="https://g.page/ShopTheGalleria?share"
                        target="_blank"
                        ><p class="textito pa-0 ma-0 mr-5">M A P S</p>
                        <span class="arrow-c pa-0 ma-0 mt-6 ml-4"></span
                      ></v-btn>
                    </div>
                  </v-list-item>
                  <v-list-item class="pa-0 ma-0">
                    <div class="mt-10 mb-3">
                      <p
                        class="text-uppercase textito caption font-weight-bold"
                      >
                        QUERÉTARO
                      </p>
                      <p />
                      <p class="txtito pr-10">
                        Central Park Armando B. Shaffer 2001 Int. 4c, Centro Sur 76090, Querétaro, Qro.
                      </p>
                      <v-btn
                        outlined
                        tile
                        color="#3B3A3B"
                        class="d-flex align-center caption"
                        width="85%"
                        href="https://goo.gl/maps/26BuUffMKFscsNha7"
                        target="_blank"
                        ><p class="textito pa-0 ma-0 mr-5">M A P S</p>
                        <span class="arrow-c pa-0 ma-0 mt-6 ml-4"></span
                      ></v-btn>
                    </div>
                  </v-list-item>
                  <v-list-item class="pa-0 ma-0">
                    <div class="mt-10 mb-3">
                      <p
                        class="text-uppercase textito caption font-weight-bold"
                      >
                        GIJÓN
                      </p>
                      <p />
                      <p class="txtito pr-10">
                        Marqués de San Esteban 1-3°, Puerta 7Int. 4c, Centro Sur 33206 Gijón, Asturias, España
                      </p>
                      <v-btn
                        outlined
                        tile
                        color="#3B3A3B"
                        class="d-flex align-center caption"
                        width="85%"
                        href="https://www.google.com.mx/maps/place/C.+Marqu%C3%A9s+de+San+Esteban,+1,+33201+Gij%C3%B3n,+Asturias,+Espa%C3%B1a/@43.5436514,-5.6666627,17z/data=!3m1!4b1!4m5!3m4!1s0xd367c67b21af9ab:0xe2222e41c621d384!8m2!3d43.5436475!4d-5.664474"
                        target="_blank"
                        ><p class="textito pa-0 ma-0 mr-5">M A P S</p>
                        <span class="arrow-c pa-0 ma-0 mt-6 ml-4"></span
                      ></v-btn>
                    </div>
                  </v-list-item>
                  <v-list-item class="pa-0 ma-0">
                    <div class="mt-10 mb-3">
                      <p
                        class="text-uppercase textito caption font-weight-bold"
                      >
                        CANCÚN
                      </p>
                      <p />
                      <p class="txtito pr-10">
                        Torre Sol Av. Bonampak 200, Desp. 115 Lote 4B, Mza.,SMza. 4A 77500, Cancún, Q.Roo
                      </p>
                      <v-btn
                        outlined
                        tile
                        color="#3B3A3B"
                        class="d-flex align-center caption"
                        width="85%"
                        href="https://goo.gl/maps/7H6DsrZZnjuWnECB8"
                        target="_blank"
                        ><p class="textito pa-0 ma-0 mr-5">M A P S</p>
                        <span class="arrow-c pa-0 ma-0 mt-6 ml-4"></span
                      ></v-btn>
                    </div>
                  </v-list-item>
                </v-virtual-scroll>
              </div>
            </v-flex>
            <v-flex d-flex justify-end align-center xs12 sm12 md8>
              <v-card
                tile
                color="#3B3A3B"
                class="pa-12 d-flex flex-column dudas"
              >
                <p class="textito" style="color: #fff">
                  ATENDEREMOS TODAS TUS DUDAS
                </p>
                <div class="hr"></div>
                <div class="d-flex">
                  <div class="d-flex flex-column">
                    <p class="textito caption" style="color: #fff">MADRID</p>
                    <div class="d-flex phone-c">
                      <v-icon color="#3B3A3B" class="mr-4">mdi-phone</v-icon>
                      <p class="ma-0 pa-0 ml-5" style="color: #fff">
                        91 426 14 40
                      </p>
                    </div>
                  </div>
                  <div class="d-flex flex-column">
                    <p class="textito caption ml-5" style="color: #fff">
                      ASTURIAS
                    </p>
                    <div class="d-flex phone-c ml-5">
                      <v-icon color="#3B3A3B" class="mr-4">mdi-phone</v-icon>
                      <p class="ma-0 pa-0 ml-5" style="color: #fff">
                        91 426 14 40
                      </p>
                    </div>
                  </div>
                </div>
                <div class="d-flex flex-column mt-10">
                  <p class="textito caption ma-0 pa-0" style="color: #fff">
                    EMAIL
                  </p>
                  <div class="hrr mt-4 mb-8"></div>
                  <div class="d-flex phone-e">
                    <a
                      href="mailto:info@alegantto.com"
                      style="text-decoration: none; color: inherit"
                      ><v-icon color="#3B3A3B" class="mr-4">mdi-mail</v-icon></a
                    >
                    <p class="ma-0 pa-0 ml-5" style="color: #fff">
                      <a
                        href="mailto:info@alegantto.com"
                        style="text-decoration: none; color: inherit"
                      >
                        info@alegantto.com</a
                      >
                    </p>
                  </div>
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
export default {
  data: () => ({
    benched: 0,
  }),
  computed: {
    items() {
      return Array.from({ length: this.length }, (k, v) => v + 1);
    },
    length() {
      return 1;
    },
  },
};
</script>

<style>
.contact-container {
  width: 100vw;
  background-image: url("../assets/10_back contacto.png");
  background-repeat: no-repeat;
  background-size: 100% 80%;
  display: flex;
  justify-content: center;
  margin-bottom: 20%;
}
.background-cont {
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cont-card {
  display: flex;
  align-items: center;
  margin: 0;
  margin-top: 5%;
  margin-left: 10%;
}
.dudas {
  width: 90%;
  height: 100%;
  justify-content: center;
}
.arrow-c {
  width: 2rem;
  height: 2rem;
  background-image: url("../assets/arrow.svg");
}
.phone-c {
  display: flex;
  align-items: center;
  background: linear-gradient(90deg, #e6e1e2 30%, #707070 30%);
  padding: 0.8rem;
}
.phone-e {
  display: flex;
  align-items: center;
  background: linear-gradient(90deg, #e6e1e2 12%, #707070 10%);
  padding: 0.8rem;
}
.hrr {
  width: 25% !important;
  height: 1px !important;
  background-color: #ffffff;
}
</style>
