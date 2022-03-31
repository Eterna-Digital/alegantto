<template>
  <div class="ma-0 pa-0 principal-home">
    <div class="logo">
      <div class="logo-home">
        <div class="logo"></div>
      </div>
    </div>
    <div class="container-video">
      <video width="100%" height="100%" style="top: 0; left: 0" loop autoplay muted playsinline>
        <source src="../assets/fb_cover.mp4" type="video/mp4" />
      </video>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.principal-home{
  width: 100vw !important;
}
.container-video {
  position: relative;
  width: 100vw;
  margin: 0;
  padding: 0;
}
.logo {
  width: 30vw;
  height: 15vh;
  position: absolute;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.logo-home {
  width: 60%;
  height: 100%;
  z-index: 100 !important;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}
.logo-home .logo {
  width: 100%;
  height: 100%;
  background-image: url("../assets/12_logo footer.svg");
  background-repeat: no-repeat;
  background-size: 10rem;
  background-position: 50% 35%;
}
</style>
