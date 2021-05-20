<template>
  <div id="app">
    <div id="video">
      <div :class="fadeOut">
        <div class="preloader-bounce">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <Header />

      <div class="imgBackgroundContainer">
        <img :src="bgImg" id="imgBackground" />
      </div>
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import { onMounted, ref } from "vue";

export default {
  name: "app",
  components: {
    Header,
  },
  setup() {
    let bgImg = ref(require("@/assets/images/img-bg.jpeg"));
    let fadeOut = ref("");

    onMounted(() => {
      document.addEventListener("load", () => {
        fadeOut = "fadeOut";
      });
    });

    return { bgImg, fadeOut };
  },
};
</script>

<style>
#imgBackground {
  object-fit: cover;
  object-position: 100%;
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
}


.imgBackgroundContainer:after {
  content: "";
  opacity: 0.75;
  background: #4096ee; /* Old browsers */
  background: -moz-linear-gradient(
    top,
    #4096ee 0%,
    #39ced6 100%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    top,
    #4096ee 0%,
    #39ced6 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    to bottom,
    #4096ee 0%,
    #39ced6 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#4096ee', endColorstr='#39ced6',GradientType=0 ); /* IE6-9 */
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
}
.preloader-bounce {
  left: 0;
  right: 0;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  position: absolute;
}
.preloader-bounce > span {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin: 0.3em;
  display: inline-block;
  vertical-align: middle;
  -webkit-animation: bounce 0.6s infinite alternate;
  animation: bounce 0.6s infinite alternate;
  background: #fff;
}
.preloader-bounce > span:nth-child(2) {
  -webkit-animation-delay: 0.2s;
  animation-delay: 0.2s;
  background: #fff;
}
.preloader-bounce > span:nth-child(3) {
  -webkit-animation-delay: 0.3s;
  animation-delay: 0.3s;
  background: #fff;
}

@-webkit-keyframes bounce {
  from {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  to {
    -webkit-transform: translateY(-1.2em);
    transform: translateY(-1.2em);
  }
}

@keyframes bounce {
  from {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  to {
    -webkit-transform: translateY(-1.2em);
    transform: translateY(-1.2em);
  }
}

#fullpage {
  z-index: 99;
}

.fadeOut {
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s 2s, opacity 2s linear;
}

.fadeIn {
  visibility: visible;
  opacity: 1;
  transition: opacity 2s linear;
}
</style>
