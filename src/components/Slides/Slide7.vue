<template>
  <div class="section animated-row" data-section="slide07">
    <div class="section-inner">
      <div class="row justify-content-center">
        <div class="col-md-7 wide-col-laptop">
          <div class="title-block animate" data-animate="fadeInUp">
            <span>Contact</span>
            <h2>Get In Touch!</h2>
          </div>
          <div class="contact-section">
            <div class="row">
              <div class="col-md-6 animate" data-animate="fadeInUp">
                <div class="contact-box">
                  <div class="contact-row">
                    <i class="fa fa-map-marker"></i> 123 New Street Here,
                    Wonderful City 10220
                  </div>
                  <div class="contact-row">
                    <i class="fa fa-phone"></i> 090 080 0210
                  </div>
                  <div class="contact-row">
                    <i class="fa fa-envelope"></i> info@company.co
                  </div>
                </div>
              </div>
              <div class="col-md-6 animate" data-animate="fadeInUp">
                <form id="ajax-contact" method="post" action="#">
                  <div class="input-field">
                    <input
                      type="text"
                      class="form-control"
                      name="name"
                      id="name"
                      required
                      placeholder="Name"
                    />
                  </div>
                  <div class="input-field">
                    <input
                      type="email"
                      class="form-control"
                      name="email"
                      id="email"
                      required
                      placeholder="Email"
                    />
                  </div>
                  <div class="input-field">
                    <textarea
                      class="form-control"
                      name="message"
                      id="message"
                      required
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <button class="btn" type="submit">Submit</button>
                </form>
                <div id="form-messages" class="mt-3"></div>
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
  name: "Slide7",
};
</script>

<style>
::-webkit-input-placeholder {
  color: #fff !important;
  opacity: 1;
}
::-moz-placeholder {
  color: #fff !important;
  opacity: 1;
}
:-ms-input-placeholder {
  color: #fff !important;
  opacity: 1;
}
:-moz-placeholder {
  color: #fff !important;
  opacity: 1;
}
.input-field {
  margin-bottom: 15px;
}
.form-control {
  height: 50px;
  color: #fff;
  border: none;
  background: rgba(250, 250, 250, 0.05);
  border: 1px solid rgba(250, 250, 250, 0.5);
  border-radius: 10px;
  padding: 4px 22px;
  font-size: 14px;
  margin-bottom: 30px;
}
.form-control:focus {
  box-shadow: none;
  outline: none;
  background: rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(250, 250, 250, 1);
  color: #fff;
}
.index .form-control.form-control-dark {
  background: rgba(250, 250, 250, 0.75);
  color: #fff;
}
.index .form-control.form-control-dark:focus {
  background: rgba(54, 40, 158, 0.85);
  color: #fff;
}
.index .form-control.form-control-dark::-webkit-input-placeholder {
  color: #fff !important;
}
.index .form-control.form-control-dark::-moz-placeholder {
  color: #fff !important;
}
.index .form-control.form-control-dark:-ms-input-placeholder {
  color: #fff !important;
}
.index .form-control.form-control-dark:-moz-placeholder {
  color: #fff !important;
}
.form-control.form-control-dark:focus {
  background: rgba(0, 0, 0, 0.2);
}
.form-control.form-control-dark {
  background: rgba(0, 0, 0, 0.1);
  color: #222;
  border: none;
}
.form-control.form-control-dark::-webkit-input-placeholder {
  color: #222 !important;
  opacity: 0.7;
}
.form-control.form-control-dark::-moz-placeholder {
  color: #222 !important;
  opacity: 0.7;
}
.form-control.form-control-dark:-ms-input-placeholder {
  color: #222 !important;
  opacity: 0.7;
}
.form-control.form-control-dark:-moz-placeholder {
  color: #222 !important;
  opacity: 0.7;
}
textarea.form-control {
  height: 123px;
  padding-top: 15px;
}
.contact-section .btn {
  width: 100%;
}
.contact-box {
  text-align: left;
}
.contact-box h4 {
  font-size: 24px;
}
.contact-box h4:after {
  content: "";
  display: block;
  width: 50px;
  height: 2px;
  background: #fff;
  margin: 12px 0;
}
.contact-row {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  margin-bottom: 30px;
  background: rgba(250, 250, 250, 0.25);
  border-radius: 10px;
  padding: 30px;
  font-weight: 700;
}
.contact-row i {
  width: 55px;
  font-size: 30px;
  display: block;
}
.contact-row i.fa-envelope {
  font-size: 25px;
}
</style>
