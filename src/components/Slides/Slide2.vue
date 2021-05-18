<template>
  <div class="section animated-row" data-section="slide02">
    <div class="section-inner">
      <div class="about-section">
        <div class="row justify-content-center">
          <div class="col-lg-8 wide-col-laptop">
            <div class="row">
              <div class="col-md-6">
                <div class="about-contentbox">
                  <div class="animate" data-animate="fadeInUp">
                    <span>About Me</span>
                    <h2>Who am i?</h2>
                    <p>
                      Credits go to <strong>Unsplash</strong> and
                      <strong>Pexels</strong> for photos and video used in this
                      template. Vivamus tincidunt, augue rutrum convallis
                      volutpat, massa lacus tempus leo.
                    </p>
                  </div>
                  <div class="facts-list owl-carousel">
                    <div class="item animate" data-animate="fadeInUp">
                      <div class="counter-box">
                        <i
                          class="fa fa-trophy counter-icon"
                          aria-hidden="true"
                        ></i
                        ><span class="count-number">32</span> Awards Won
                      </div>
                    </div>
                    <div class="item animate" data-animate="fadeInUp">
                      <div class="counter-box">
                        <i
                          class="fa fa-graduation-cap counter-icon"
                          aria-hidden="true"
                        ></i
                        ><span class="count-number">4</span> Degrees
                      </div>
                    </div>
                    <div class="item animate" data-animate="fadeInUp">
                      <div class="counter-box">
                        <i
                          class="fa fa-desktop counter-icon"
                          aria-hidden="true"
                        ></i
                        ><span class="count-number">12</span> Working Years
                      </div>
                    </div>
                    <div class="item animate" data-animate="fadeInUp">
                      <div class="counter-box">
                        <i
                          class="fa fa-support counter-icon"
                          aria-hidden="true"
                        ></i
                        ><span class="count-number">6</span> Team Members
                      </div>
                    </div>
                    <div class="item animate" data-animate="fadeInUp">
                      <div class="counter-box">
                        <i
                          class="fa fa-certificate counter-icon"
                          aria-hidden="true"
                        ></i
                        ><span class="count-number">10</span> Certificates
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <figure class="about-img animate" data-animate="fadeInUp">
                  <img v-bind:src="girlPhoto" class="rounded" alt="" />
                </figure>
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
    let girlPhoto = ref(require("@/assets/images/profile-girl.jpg"));

    return { girlPhoto };
  },
  name: "Slide2",
};
</script>

<style>
.about-img {
  margin: 0 auto 40px;
  position: relative;
}
.about-img img {
  border-radius: 10px;
  -webkit-box-shadow: 0 0 40px rgba(0, 0, 0, 0.3);
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.3);
}
.about-contentbox {
  margin-top: 80px;
  text-align: left;
  line-height: 1.8;
}
.about-contentbox span {
  font-size: 24px;
  text-transform: uppercase;
  font-weight: 300;
}
.about-contentbox h2 {
  font-size: 32px;
  text-transform: uppercase;
  font-weight: 700;
}
.facts-list {
  margin-top: 30px;
}
.facts-list .item {
  overflow: hidden;
  text-align: center;
  border-radius: 10px;
  width: 100%;
  display: inline-block;
  text-transform: capitalize;
  font-size: 14px;
  padding: 30px 0px;
  background: rgba(0, 0, 0, 0.25);
}
.counter-box span {
  font-size: 26px;
  font-weight: 700;
}
.counter-icon {
  font-size: 30px;
  margin-bottom: 10px;
  opacity: 0.75;
}
.facts-list .item:hover {
  background: #fff;
  color: #1e1e1e;
}
.facts-list .owl-dots {
  margin-bottom: 30px;
}
.count-number,
.counted {
  display: block;
  font-size: 36px;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 10px;
}
</style>
