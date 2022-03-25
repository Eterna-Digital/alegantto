<template>
  <v-app>
    <v-main class="pa-0 ma-0">
      <v-app-bar
        app
        color="transparent"
        style="position: absolute"
        elevate-on-scroll
      >
        <v-spacer></v-spacer>
        <v-card
          class="menu-nav ma-0 pa-0"
          height="100%"
          elevation="0"
          color="transparent"
          width="100%"
        >
          <v-toolbar-items class="hidden-sm-and-down cont-btn-nav ma-0 pa-0">
            <a
              class="link-nav"
              v-for="item in menu"
              :key="item.icon"
              :to="item.link"
              elevation="0"
              ><p>{{ item.title }}</p>

              <span></span>
            </a>
          </v-toolbar-items>
          <v-menu class="hidden-md-and-up">
            <v-toolbar-side-icon slot="activator"></v-toolbar-side-icon>
            <v-list>
              <v-list-tile v-for="item in menu" :key="item.icon">
                <v-list-tile-content>
                  <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-menu>
        </v-card>
      </v-app-bar>
      <!-- <v-card color="transparent" width="100vw" elevation="1" tile style="position: fixed; z-index: 100"><h1>hola</h1></v-card> -->
      <ContainerViews />
    </v-main>
  </v-app>
</template>

<script>
import ContainerViews from "./components/ContainerViews.vue";

export default {
  name: "App",

  components: {
    ContainerViews,
  },

  data: () => ({
    menu: [
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
  width: 45%;
}
.link-nav {
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 0.5rem 0 0.5rem;
  margin: 0 1rem 0 1rem;
  transition: width 2s;
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
</style>
