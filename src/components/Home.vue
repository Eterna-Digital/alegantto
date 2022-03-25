<template>
  <v-container class="ma-0 pa-0">
    <div class="logo">
      <div class="logo-nav">
        <div class="logo"></div>
      </div>
    </div>
    <div class="container-video">
      <video width="100%" height="100%" style="top: 0; left: 0" loop autoplay>
        <source src="../assets/fb_cover.mp4" type="video/mp4" />
      </video>
    </div>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
.container-video {
  position: relative;
  width: 100vw;
  margin: 0;
  padding: 0;
}
.logo {
  width: 30vw;
  height: 18vh;
  position: absolute;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.logo-nav {
  width: 60%;
  height: 100%;
  z-index: 25;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}
.logo-nav .logo {
  width: 100%;
  height: 100%;
  background-image: url("../assets/12_logo footer.svg");
  background-repeat: no-repeat;
  background-size: 45%;
  background-position: 50% 50%;
}
</style>
