<template>
  <div class="ma-0 pa-0 principal-home" id="home">

    <div class="container-video">
      <video
        width="100%"
        height="100%"
        style="top: 0; left: 0"
        loop
        autoplay
        muted
        playsinline
        class="hidden-sm-and-down"
      >
        <source src="../assets/fb_cover.mp4" type="video/mp4" />
      </video>
      <video
        width="100%"
        height="100%"
        style="top: 0; left: 0"
        loop
        autoplay
        muted
        playsinline
        class="d-md-none d-lg-none"
      >
        <source src="../assets/cover_alegantto_mobile.mp4" type="video/mp4" />
      </video>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.principal-home {
  width: 100vw !important;
}
.container-video {
  position: relative;
  width: 100vw;
  margin: 0;
  padding: 0;
}


</style>
