<template>
  <div id="fullpage" class="fullpage-default">
    <socials />
    <Slide1 />
    <Slide2 />
    <Slide3 />
    <Slide4 />
    <Slide5 />
    <Slide6 />
    <Slide7 />
  </div>
</template>

<script>
import Slide1 from "../components/Slides/Slide1.vue";
import Slide2 from "../components/Slides/Slide2.vue";
import Slide3 from "../components/Slides/Slide3.vue";
import Slide4 from "../components/Slides/Slide4.vue";
import Slide5 from "../components/Slides/Slide5.vue";
import Slide6 from "../components/Slides/Slide6.vue";
import Slide7 from "../components/Slides/Slide7.vue";
import Socials from "../components/Socials.vue";


export default {
  name: "Home",
  components: {
    Slide1,
    Slide2,
    Slide3,
    Slide4,
    Slide5,
    Slide6,
    Slide7,
    Socials,
  },
  setup() {},
};
</script>

<style>

</style>
