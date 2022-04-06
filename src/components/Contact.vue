<template>
  <div class="contact-container" id="contacto">
    <div class="background-cont">
      <v-card class="cont-card" color="transparent" elevation="0">
        <v-container fluid grid-list-md>
          <v-layout row wrap d-flex justify-space-between>
            <v-flex d-flex justify-start xs12 sm12 md5>
              <div class="d-flex flex-column justify-start scroll-div">
                <h1 class="mt-0 mb-4">Contacto</h1>
                <p class="txtito pr-10">Encuentranos en:</p>
                <v-virtual-scroll
                  :bench="benched"
                  height="400"
                  item-height="1000"
                  :items="items"
                  class="pa-0 scroll"
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
                        Brickell City Centre, 78 SW 7th Street, 33130, Miami,
                        Florida
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
                        Monte Elbruz 37, Piso 10 Lomas de Chapultepec, Miguel
                        Hidalgo 11000, CDMX
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
                        Serrano 63, Escalera Castellana 1° izquierda 28010,
                        Madrid, España
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
                        The Galleria 5065 Westheimer Rd. Suite 1130 77056,
                        Houston, Tx.
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
                        Central Park Armando B. Shaffer 2001 Int. 4c, Centro Sur
                        76090, Querétaro, Qro.
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
                        Marqués de San Esteban 1-3°, Puerta 7Int. 4c, Centro Sur
                        33206 Gijón, Asturias, España
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
                        Torre Sol Av. Bonampak 200, Desp. 115 Lote 4B,
                        Mza.,SMza. 4A 77500, Cancún, Q.Roo
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
            <v-flex class="v-flex-d" d-flex align-center xs12 sm12 md7>
              <v-card tile color="#3B3A3B" class="d-flex flex-column dudas">
                <p class="textito at" style="color: #fff">
                  ATENDEREMOS TODAS TUS DUDAS
                </p>
                <div class="hr"></div>
                <div class="d-flex phones">
                  <div class="d-flex flex-column madrid">
                    <p class="textito tito caption" style="color: #fff">
                      MADRID
                    </p>
                    <div class="d-flex phone-c">
                      <v-icon color="#3B3A3B" class="mr-4">mdi-phone</v-icon>
                      <p class="ma-0 pa-0 ml-5" style="color: #fff">
                        91 426 14 40
                      </p>
                    </div>
                  </div>
                  <div class="d-flex flex-column asturias">
                    <p class="textito tito caption" style="color: #fff">
                      ASTURIAS
                    </p>
                    <div class="d-flex phone-c">
                      <v-icon color="#3B3A3B" class="mr-4">mdi-phone</v-icon>
                      <p class="ma-0 pa-0 ml-5" style="color: #fff">
                        91 426 14 40
                      </p>
                    </div>
                  </div>
                </div>
                <div class="d-flex flex-column mt-10 email-c">
                  <p class="textito tito caption ma-0 pa-0" style="color: #fff">
                    EMAIL
                  </p>
                  <div class="hrr mt-4 mb-8"></div>
                  <div class="d-flex phone-e">
                    <v-icon color="#3B3A3B" class="mr-6 ml-1">mdi-mail</v-icon>
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
  margin-top: 0 !important;
}
.background-cont {
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
}
.cont-card {
  width: 75%;
  display: flex;
  align-items: center;
  margin: 0;
  margin-top: 0%;
}
.scroll-div {
  width: 90%;
}
.v-flex-d {
  width: 100%;
  justify-content: flex-end !important;
}
.dudas {
  width: 100%;
  height: 100%;
  justify-content: center;
  padding: 2.5rem;
}
.arrow-c {
  width: 2rem;
  height: 2rem;
  background-image: url("../assets/arrow.svg");
}
.at {
  margin-left: 1rem;
  margin-bottom: 3rem !important;
}
.phones {
  flex-direction: row !important;
  align-items: center;
  justify-content: center;
}
.phone-c {
  display: flex;
  align-items: center;
  background: linear-gradient(90deg, #e6e1e2 3rem, #707070 3rem);
  padding: 0.8rem;
  /* padding-right: 3rem !important; */
  margin-left: 1rem;
  width: 100%;
}
.tito {
  margin-left: 1rem;
}
.asturias {
  margin-left: 1.3rem !important;
}
.phone-e {
  display: flex;
  align-items: center;
  background: linear-gradient(90deg, #e6e1e2 3.5rem, #707070 3rem);
  padding: 0.8rem;
  width: 90%;
}
.email-c {
  margin-left: 3%;
  width: 90%;
}
.hrr {
  width: 25% !important;
  height: 1px !important;
  background-color: #ffffff;
}
.v-flex-d {
  justify-content: flex-end !important;
}

@media only screen and (max-width: 640px) {
  .contact-container {
    background-size: 100%;
    background-position: 0 1%;
    margin-top: 10%;
  }
  .background-cont {
    flex-direction: column;
  }
  .cont-card {
    width: 100%;
    justify-content: center;
  }
  .scroll {
    width: 100vw !important;
  }
  .v-flex-d {
    justify-content: center !important;
  }
  .v-flex-d {
    justify-content: flex-start !important;
  }
  .dudas {
    margin-top: 40%;
    margin-bottom: 30%;
    width: 100%;
    margin-left: 0%;
    padding: 1rem;
  }
  .phones {
    flex-direction: column !important;
    justify-content: flex-start !important;
  }
  .phone-c {
    margin-left: 0rem;
    width: 100% !important;
  }
  .tito {
    margin-left: 0rem;
  }
  .asturias,
  .madrid {
    width: 100%;
    margin-left: 0 !important;
    margin-top: 2rem;
  }
  .email-c {
    margin-left: 0%;
    width: 100% !important;
  }
}
@media only screen and (min-width: 768px) {
  .contact-container {
    background-size: 100%;
  }
  .scroll {
    width: 40vw !important;
  }
  .v-flex-d {
    justify-content: flex-end !important;
  }
  .dudas {
    margin-left: 0;
    margin-top: 20%;
    margin-bottom: 00%;
  }
  .phones {
    flex-direction: column;
    justify-content: flex-start;
  }
  .v-flex-d {
    justify-content: flex-start !important;
  }
}
</style>
