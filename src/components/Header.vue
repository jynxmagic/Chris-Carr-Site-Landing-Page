<template>
  <header id="header">
    <div class="container-fluid">
      <div class="navbar">
        <a href="#" id="logo" title="Elegance by TemplateMo"> Elegance </a>
        <div class="navigation-row row">
          <nav id="navigation">
            <button type="button" class="navbar-toggle">
              <i class="fa fa-bars"></i>
            </button>
            <div class="nav-box navbar-collapse">
              <ul class="navigation-menu nav navbar-nav navbars" id="nav">
                <li data-menuanchor="slide01" class="active">
                  <a href="#slide01">Home</a>
                </li>
                <li data-menuanchor="slide02">
                  <a href="#slide02">About</a>
                </li>
                <li data-menuanchor="slide03">
                  <a href="#slide03">What do i do?</a>
                </li>
                <li data-menuanchor="slide04">
                  <a href="#slide04">Skills</a>
                </li>
                <li data-menuanchor="slide05">
                  <a href="#slide05">Testimonials</a>
                </li>
                <li data-menuanchor="slide06">
                  <a href="#slide06">Portfolio</a>
                </li>
                <li data-menuanchor="slide07">
                  <a href="#slide07">Contact me!</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: "Header",
};
</script>

<style>
#header {
  padding: 20px 0;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 999;
}
.container-fluid {
  padding: 0 20px;
}
a#logo {
  text-decoration: none;
  font-size: 32px;
  text-transform: uppercase;
  font-weight: 700;
}
.navbar {
  padding: 0;
}
.navbar-toggle {
  display: none;
}
.navbar-nav {
  -ms-flex-direction: row;
  -webkit-flex-direction: row;
  flex-direction: row;
}
.navbar-nav li {
  margin-left: 30px;
}
.navbar-nav li a {
  color: #fff;
  font-size: 15px;
  text-decoration: none;
  display: block;
  font-weight: 500;
  opacity: 0.9;
}
.navbar-nav li a:after {
  content: "";
  display: block;
  height: 2px;
  background: #fff;
  -webkit-transition: all 0.4s ease;
  transition: all 0.4s ease;
  -webkit-transform: scale(0);
  transform: scale(0);
  margin-top: 4px;
}
.navbar-nav li a:hover:after,
.navbar-nav li.active a:after {
  -webkit-transform: scale(1);
  transform: scale(1);
}
.navbar-nav li a:hover {
  opacity: 1;
}
.navbar-nav li.active a {
  opacity: 1;
}
.collapse:not(.show) {
  display: block;
}
</style>
