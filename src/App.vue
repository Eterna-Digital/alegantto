<template>
  <v-app>
    <v-app-bar app color="#CFC6C9" elevate-on-scroll hide-on-scroll>
      <div class="logo-nav hidden-sm-and-down"></div>
      <v-toolbar
        class="menu-nav ma-0 pa-0"
        height="100%"
        elevation="0"
        color="transparent"
        width="100%"
      >
        <v-spacer></v-spacer>

        <v-toolbar-items class="hidden-sm-and-down cont-btn-nav ma-0 pa-0">
          <a class="link-nav" elevation="0" href="#servicios"
            ><p>SERVICIOS</p>
            <span></span>
          </a>
          <a class="link-nav" href="#alianza" elevation="0"
            ><p>ALIANZA</p>
            <span></span>
          </a>
          <a class="link-nav" elevation="0" href="#clientes"
            ><p>CLIENTES</p>
            <span></span>
          </a>
          <a class="link-nav" elevation="0" href="#contacto"
            ><p>CONTACTO</p>
            <span></span>
          </a>
        </v-toolbar-items>
        <v-menu class="hidden-md-and-up menu-m" elevation="0" tile>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on" class="hidden-md-and-up"
              ><v-icon>mdi-menu</v-icon></v-btn
            >
          </template>

          <v-list
            elevation="0"
            style="z-index: 100"
            class="d-flex flex-column menu-nav-mobile"
          >
            <div class="logo-nav-m"></div>
            <v-list-tile-title class="menu-m"
              ><a class="link-nav" elevation="0" href="#servicios"
                ><p>SERVICIOS</p>
                <span></span> </a
            ></v-list-tile-title>
            <v-list-tile-title class="menu-m"
              ><a class="link-nav" elevation="0" href="#alianza"
                ><p>ALIANZA</p>
                <span></span>
              </a>
            </v-list-tile-title>
            <v-list-tile-title class="menu-m"
              ><a class="link-nav" elevation="0" href="#clientes"
                ><p>CLIENTES</p>
                <span></span>
              </a>
            </v-list-tile-title>
            <v-list-tile-title class="menu-m"
              ><a class="link-nav" elevation="0" href="#contacto"
                ><p>CONTACTO</p>
                <span></span>
              </a>
            </v-list-tile-title>
          </v-list>
        </v-menu>
        <!-- </v-app-bar> -->
      </v-toolbar>
    </v-app-bar>

    <v-main class="pa-0 ma-0">
      <router-view/>
      <ContainerViews />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import ContainerViews from "./components/ContainerViews.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    ContainerViews,
    Footer,
  },
  data: () => ({
    item: [
      { icon: "home", title: "SERVICIOS" },
      { icon: "info", title: "ALIANZA" },
      { icon: "warning", title: "CLIENTES" },
      { icon: "warning", title: "CONTACTO" },
    ],
  }),
  methods: {
    menuItems() {
      return this.menu;
    },
    navigateTo(e) {
      this.$nextTick(() => {
        this.$router.push(e.currentTarget.getAttribute("href"));
      });
    },
  },
};
</script>
<style scoped>
.menu-nav {
  display: flex;
  align-items: center;
  justify-content: end;
  margin-top: 0 !important;
  margin-left: 0 !important;
}
.menu-m {
  margin-top: 0 !important;
  margin-left: 0 !important;
  z-index: 100;
}
.menu-nav-mobile {
  width: 100vw;
  height: 100vh;
  margin-top: 0 !important;
  margin-left: 0 !important;
  align-items: center;
  justify-content: center;
  background-color: #cfc6c9 !important;
}
.cont-btn-nav {
  height: 100%;
}
.menu-m {
  margin: 2rem 0 2rem 0;
}
.link-nav {
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 0.5rem 0 0.5rem;
  margin: 0 1rem 0 1rem;
  transition: width 2s;
  text-decoration: none;
}
.logo-nav {
  width: 100%;
  height: 45%;
  /* border: 3px solid #000; */
  margin-top: 0.5rem;
  margin-right: 6%;
}
.link-nav p {
  margin-top: 1rem;
  font-family: "Montserrat", sans-serif;
  font-weight: thin;
  color: #a09c9c !important;
  font-size: 0.8rem;
  padding-bottom: 4px;
}
.link-nav p:hover {
  color: #ffffff !important;
  border-bottom: 2px solid #fff;
}
.cont-log-nav {
  width: 42%;
  height: 25vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.logo-nav {
  background-image: url("./assets/12_logo footer.svg");
  background-repeat: no-repeat;
  background-size: 75%;
  width: 350px;
  height: 100%;
  background-position: 50%;
  z-index: 25;
  margin-left: 13%;
}
.logo-nav-m {
  background-image: url("./assets/12_logo footer.svg");
  background-repeat: no-repeat;
  background-size: 75%;
  width: 300px;
  height: 100px;
  background-position: 20%;
  z-index: 25;
  margin-bottom: 10%;
}
</style>
