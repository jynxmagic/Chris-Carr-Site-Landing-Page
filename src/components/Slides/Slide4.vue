<template>
  <div class="section animated-row" data-section="slide04">
    <div class="section-inner">
      <div class="row justify-content-center">
        <div class="col-md-7 wide-col-laptop">
          <div class="title-block animate" data-animate="fadeInUp">
            <span>My Skills</span>
            <h2>What i’m good?</h2>
          </div>
          <div class="skills-row animate" data-animate="fadeInDown">
            <div class="row">
              <div class="col-md-8 offset-md-2">
                <div class="skill-item">
                  <h6>HTML CSS</h6>
                  <div class="skill-bar">
                    <span>70%</span>
                    <div class="filled-bar"></div>
                  </div>
                </div>
                <div class="skill-item">
                  <h6>PSD Design</h6>
                  <div class="skill-bar">
                    <span>90%</span>
                    <div class="filled-bar-2"></div>
                  </div>
                </div>
                <div class="skill-item">
                  <h6>Social Media</h6>
                  <div class="skill-bar">
                    <span>70%</span>
                    <div class="filled-bar"></div>
                  </div>
                </div>
                <div class="skill-item last-skill">
                  <h6>Leadership</h6>
                  <div class="skill-bar">
                    <span>90%</span>
                    <div class="filled-bar-2"></div>
                  </div>
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
export default {
  setup() {},
  name: "Slide4",
};
</script>

<style>
.skills-row {
  margin-top: 80px;
}
.skill-item {
  border-bottom: 1px solid rgba(250, 250, 250, 0.1);
  margin-bottom: 50px;
  padding-bottom: 50px;
}
.last-skill {
  border-bottom: none;
}
.skills-row span {
  display: inline-block;
  width: 50px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  background-color: #fff;
  color: #1e1e1e;
  border-radius: 50%;
  font-size: 16px;
  font-weight: 700;
  left: 0;
  top: -21px;
  position: absolute;
  z-index: 999;
}
.skills-row h6 {
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 700;
  color: #fff;
  text-align: right;
  margin-bottom: -10px;
}
.skill-bar {
  width: 70%;
  height: 6px;
  border-radius: 3px;
  background-color: rgba(250, 250, 250, 0.25);
  position: relative;
}
.filled-bar {
  position: absolute;
  z-index: 99;
  width: 64%;
  height: 6px;
  background-color: #fff;
  border-radius: 3px;
}
.filled-bar-2 {
  position: absolute;
  z-index: 99;
  width: 82%;
  height: 6px;
  background-color: #fff;
  border-radius: 3px;
}
</style>
