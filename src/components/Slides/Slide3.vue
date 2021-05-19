<template>
  <div class="section animated-row" data-section="slide03">
    <div class="section-inner">
      <div class="row justify-content-center">
        <div class="col-md-8 wide-col-laptop">
          <div class="title-block animate" data-animate="fadeInUp">
            <span>Services</span>
            <h2>What I Do?</h2>
          </div>
          <div class="services-section">
            <div class="glide services-list">
              <div class="glide__track" data-glide-el="track">
                <ul class="glide__slides">
                  <li class="glide__slide animate" data-animate="fadeInUp">
                    <div class="item animate" data-animate="fadeInUp">
                      <div class="service-box">
                        <span class="service-icon"
                          ><i class="fa fa-bookmark" aria-hidden="true"></i
                        ></span>
                        <h3>Bootstrap Themes</h3>
                        <p>
                          Nullam auctor, justo vitae accumsan ultrices, arcu ex
                          molestie massa, eu maximus enim tortor vitae quam.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li class="glide__slide animate" data-animate="fadeInUp">
                    <div class="item animate" data-animate="fadeInUp">
                      <div class="service-box">
                        <span class="service-icon"
                          ><i class="fa fa-desktop" aria-hidden="true"></i
                        ></span>
                        <h3>Fully Responsive</h3>
                        <p>
                          Nullam auctor, justo vitae accumsan ultrices, arcu ex
                          molestie massa, eu maximus enim tortor vitae quam.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li class="glide__slide animate" data-animate="fadeInUp">
                    <div class="item animate" data-animate="fadeInUp">
                      <div class="service-box">
                        <span class="service-icon"
                          ><i class="fa fa-mobile" aria-hidden="true"></i
                        ></span>
                        <h3>Mobile Ready</h3>
                        <p>
                          Nullam auctor, justo vitae accumsan ultrices, arcu ex
                          molestie massa, eu maximus enim tortor vitae quam.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li class="glide__slide animate" data-animate="fadeInUp">
                    <div class="item animate" data-animate="fadeInUp">
                      <div class="service-box">
                        <span class="service-icon"
                          ><i class="fa fa-comments" aria-hidden="true"></i
                        ></span>
                        <h3>Fast Support</h3>
                        <p>
                          Nullam auctor, justo vitae accumsan ultrices, arcu ex
                          molestie massa, eu maximus enim tortor vitae quam.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="item animate" data-animate="fadeInUp">
                      <div class="service-box">
                        <span class="service-icon"
                          ><i class="fa fa-database" aria-hidden="true"></i
                        ></span>
                        <h3>24-hour Up Time</h3>
                        <p>
                          Nullam auctor, justo vitae accumsan ultrices, arcu ex
                          molestie massa, eu maximus enim tortor vitae quam.
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
export default {
  setup() {},
  name: "Slide3",
};
</script>
<style>
.title-block {
  margin-bottom: 40px;
}
.title-block span {
  font-size: 24px;
  text-transform: uppercase;
  font-weight: 300;
}
.services-list .item {
  background-color: rgba(250, 250, 250, 0.25);
  border-radius: 10px;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
}
.service-icon {
  display: block;
  margin: 0 auto 0;
  font-size: 64px;
}
.service-box {
  font-size: 15px;
  padding: 40px 20px;
  height: 100%;
}
.services-list .item:hover {
  background-color: #fff;
  color: #1e1e1e;
}
.service-box h3 {
  font-size: 22px;
  font-weight: 700;
  text-transform: capitalize;
  margin-bottom: 10px;
  padding: 10px;
}
.service-box p:last-child {
  margin: 0;
}
.owl-carousel .owl-dots .owl-dot {
  border-radius: 3px;
}
.owl-dots {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  margin-top: 50px;
}

.owl-carousel .owl-dots .owl-dot {
  width: 12px;
  height: 12px;
  margin: 0 5px;
  background: rgba(255, 255, 255, 0.2);
}

.owl-carousel .owl-dots .owl-dot:focus {
  outline: none;
}

.owl-carousel .owl-dots .owl-dot.active {
  background: #fff;
}
</style>
