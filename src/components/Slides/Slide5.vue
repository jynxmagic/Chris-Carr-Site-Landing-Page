<template>
  <div class="section animated-row" data-section="slide05">
    <div class="section-inner">
      <div class="row justify-content-center">
        <div class="col-md-8 wide-col-laptop">
          <div class="title-block animate" data-animate="fadeInUp">
            <span>TESTIMONIALS</span>
            <h2>what THEY SAY?</h2>
          </div>
          <div class="col-md-8 offset-md-2">
            <div class="testimonials-section">
              <div class="glide testimonials-slider">
                <div class="glide__track" data-glide-el="track">
                  <ul class="glide__slides">
                    <li class="glide__slide animate" data-animate="fadeInUp">
                      <div class="testimonial-item">
                        <div class="client-row">
                          <img
                            :src="profilePhoto"
                            class="rounded-circle"
                            alt="profile 1"
                          />
                        </div>
                        <div class="testimonial-content">
                          <h4>Sandar</h4>
                          <p>
                            "Ut varius leo eu mauris lacinia, eleifend posuere
                            urna gravida. Aenean a mattis lacus."
                          </p>
                          <span>Managing Director</span>
                        </div>
                      </div>
                    </li>
                    <li class="glide__slide animate" data-animate="fadeInUp">
                      <div class="testimonial-item">
                        <div class="client-row">
                          <img
                            :src="profilePhoto"
                            class="rounded-circle"
                            alt="profile 2"
                          />
                        </div>
                        <div class="testimonial-content">
                          <h4>Shinn</h4>
                          <p>
                            "Nam iaculis, leo nec facilisis sollicitudin, dui
                            massa tempus odio, vitae malesuada ante elit vitae
                            eros."
                          </p>
                          <span>CEO and Founder</span>
                        </div>
                      </div>
                    </li>
                    <li class="glide__slide animate" data-animate="fadeInUp">
                      <div class="testimonial-item">
                        <div class="client-row">
                          <img
                            :src="profilePhoto"
                            class="rounded-circle"
                            alt="profile 3"
                          />
                        </div>
                        <div class="testimonial-content">
                          <h4>Marlar</h4>
                          <p>
                            "Etiam efficitur, tortor facilisis finibus semper,
                            diam magna fringilla lectus, et fringilla felis urna
                            posuere tortor."
                          </p>
                          <span>Chief Marketing Officer</span>
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
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    let profilePhoto = ref(require("@/assets/images/profile-01.jpg"));

    return profilePhoto;
  },
  name: "Slide5",
};
</script>

<style>
.testimonials-section .item {
  background-color: rgba(250, 250, 250, 0.25);
  padding: 40px;
  border-radius: 10px;
}
.testimonials-section .item img {
  width: 140px;
  height: 140px;
  margin: 0 auto;
}
.testimonials-section .item h4 {
  margin-top: 40px;
  font-size: 22px;
  text-transform: capitalize;
  font-weight: 700;
}
.testimonials-section .item p {
  font-size: 17px;
  font-style: italic;
}
</style>
