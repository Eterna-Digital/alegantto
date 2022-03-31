<template>
  <v-app>
    <v-main class="pa-0 ma-0">
      <v-app-bar app color="#CFC6C9" elevate-on-scroll hide-on-scroll>
        <v-app-title class="cont-log-nav">
          <div class="logo-nav"></div>
        </v-app-title>
        <v-spacer></v-spacer>
        <v-card
          class="menu-nav ma-0 pa-0"
          height="100%"
          elevation="0"
          color="transparent"
          width="100%"
        >
          <v-toolbar-items class="hidden-sm-and-down cont-btn-nav ma-0 pa-0">
            <a class="link-nav" elevation="0"
              ><p>SERVICIOS</p>
              <span></span>
            </a>
            <a class="link-nav" elevation="0"
              ><p>ALIANZA</p>
              <span></span>
            </a>
            <a class="link-nav" elevation="0"
              ><p>CLIENTES</p>
              <span></span>
            </a>
            <a class="link-nav" elevation="0"
              ><p>CONTACTO</p>
              <span></span>
            </a>
          </v-toolbar-items>
          <v-menu class="hidden-md-and-up">
            <v-toolbar-side-icon slot="activator"></v-toolbar-side-icon>
            <v-list>
              <v-list-title v-for="item in menu" :key="item.icon">
                <v-list-title-content>
                  <v-list-title-title
                    ><a @click.prevent="navigateTo" href="/">{{
                      item.title
                    }}</a></v-list-title-title
                  >
                </v-list-title-content>
              </v-list-title>
            </v-list>
          </v-menu>
        </v-card>
      </v-app-bar>
      <!-- <v-card color="transparent" width="100vw" elevation="1" tile style="position: fixed; z-index: 100"><h1>hola</h1></v-card> -->
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
    // menu: [
    //   { icon: "home", title: "SERVICIOS" },
    //   { icon: "info", title: "ALIANZA" },
    //   { icon: "warning", title: "CLIENTES" },
    //   { icon: "warning", title: "CONTACTO" },
    // ],
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
}
.cont-btn-nav {
  height: 100%;
}
.link-nav {
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 0.5rem 0 0.5rem;
  margin: 0 1rem 0 1rem;
  transition: width 2s;
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
  background-size: 50%;
  background-position: 98% 50%;
  z-index: 25;
}
</style>
