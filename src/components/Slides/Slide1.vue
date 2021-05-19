<template>
  <div id="welcome" class="section animated-row" data-section="slide01">
    <div class="section-inner">
      <div class="welcome-box">
        <span class="welcome-first animate" data-animate="fadeInUp"
          >Hello, welcome to</span
        >
        <h1 class="welcome-title animate" data-animate="fadeInUp">elegance</h1>
        <p class="animate" data-animate="fadeInUp">
          This is a clean and modern HTML5 template with a video background. You
          can use this layout for your profile page. Please spread a word about
          templatemo to your friends. Thank you.
        </p>
        <div class="scroll-down next-section animate" data-animate="fadeInUp">
          <img v-bind:src="mouseImg" alt="" /><span>Scroll Down</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "Slide1",
  setup() {
    let mouseImg = ref(require("@/assets/images/mouse-scroll.png"));

    return { mouseImg };
  },
};
</script>

<style>
.welcome-box {
  font-size: 20px;
  line-height: 1.7;
}
.welcome-first {
  font-size: 32px;
  display: block;
  text-transform: uppercase;
  font-weight: 300;
  line-height: 1.2;
  letter-spacing: 0.02em;
}
.welcome-box p {
  max-width: 620px;
  width: 100%;
  margin: 0 auto 30px;
  color: #fff;
}
.welcome-title {
  font-weight: 700;
  font-size: 3em;
  margin-bottom: 10px;
  letter-spacing: 0.02em;
}
.welcome-title span {
  font-size: 36px;
  display: block;
  font-weight: 300;
  line-height: 1.2;
}
.welcome-box .btn {
  margin-top: 10px;
}
.next-section {
  display: inline-block;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 30px;
  cursor: pointer;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
}
.next-section span {
  margin-top: 15px;
  display: block;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 500;
}
.next-section i:hover {
  opacity: 1;
}
</style>
