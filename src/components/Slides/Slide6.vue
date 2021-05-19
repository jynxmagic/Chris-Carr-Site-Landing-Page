<template>
  <div class="section animated-row" data-section="slide06">
    <div class="section-inner">
      <div class="row justify-content-center">
        <div class="col-md-8 wide-col-laptop">
          <div class="title-block animate" data-animate="fadeInUp">
            <span>My Work</span>
            <h2>what i’ve done?</h2>
          </div>
          <div class="gallery-section">
            <div class="glide gallery-list">
              <div class="glide__track" data-glide-el="track">
                <ul class="glide__slides">
                  <li class="glide__slide animate" data-animate="fadeInUp">
                    <div class="portfolio-item">
                      <div class="thumb">
                        <img :src="item1" alt="" />
                      </div>
                      <div class="thumb-inner animate" data-animate="fadeInUp">
                        <h4>templatemo is the best</h4>
                        <p>
                          Please tell your friends about it. Templatemo is the
                          best website to download free Bootstrap CSS templates.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li class="glide__slide animate" data-animate="fadeInUp">
                    <div class="portfolio-item">
                      <div class="thumb">
                        <img :src="item1" alt="" />
                      </div>
                      <div class="thumb-inner animate" data-animate="fadeInUp">
                        <h4>templatemo is the best</h4>
                        <p>
                          Please tell your friends about it. Templatemo is the
                          best website to download free Bootstrap templates.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li class="glide__slide animate" data-animate="fadeInUp">
                    <div class="portfolio-item">
                      <div class="thumb">
                        <img :src="item1" alt="" />
                      </div>
                      <div class="thumb-inner animate" data-animate="fadeInUp">
                        <h4>templatemo is the best</h4>
                        <p>
                          Please tell your friends about it. Templatemo is the
                          best website to download free Bootstrap templates.
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    let item1 = ref(require("@/assets/images/item-1.jpg"));
    let item2 = ref(require("@/assets/images/item-2.jpg"));
    let item3 = ref(require("@/assets/images/item-2.jpg"));

    return { item1, item2, item3 };
  },
  name: "Slide6",
};
</script>

<style>
.gallery-section {
  text-align: center;
}
.portfolio-item img {
  max-width: 100%;
  overflow: hidden;
  position: relative;
  z-index: 9;
  border-radius: 10px;
}
.portfolio-item .thumb-inner {
  position: absolute;
  z-index: 99;
  bottom: 0;
  text-align: left;
  padding: 20px;
  background-color: rgba(250, 250, 250, 0.25);
  width: 100%;
  height: 60px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  -webkit-transition: all 0.4s ease;
  transition: all 0.4s ease;
}
.portfolio-item .thumb-inner h4 {
  margin-bottom: 0;
  font-size: 16px;
  margin-top: 0px;
}
.portfolio-item .thumb-inner p {
  opacity: 0;
  visibility: hidden;
  position: absolute;
  margin-bottom: 0px;
}
.portfolio-item:hover .thumb-inner p {
  position: relative;
  opacity: 1;
  visibility: visible;
  color: #4a4a4a;
}
.portfolio-item:hover .thumb-inner {
  border-radius: 10px;
  height: 100%;
  background-color: rgba(250, 250, 250, 0.9);
}
.portfolio-item:hover .thumb-inner h4 {
  margin-top: 30%;
  color: #1e1e1e;
  margin-bottom: 20px;
}
</style>
