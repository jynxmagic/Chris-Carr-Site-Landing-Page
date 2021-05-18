<template>
  <div id="social-icons">
    <div class="text-right">
      <ul class="social-icons">
        <li>
          <a href="#" title="Facebook"
            ><font-awesome-icon :icon="['fab', 'facebook']"
          /></a>
        </li>
        <li>
          <a href="#" title="Twitter"
            ><font-awesome-icon :icon="['fab', 'twitter']"
          /></a>
        </li>
        <li>
          <a href="#" title="Linkedin"
            ><font-awesome-icon :icon="['fab', 'linkedin']"
          /></a>
        </li>
        <li>
          <a href="#" title="Instagram"
            ><font-awesome-icon :icon="['fab', 'instagram']"
          /></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Socials",
};
</script>

<style>
#social-icons {
  padding: 0;
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
  z-index: 199;
}
.social-icons {
  margin: 0;
  padding: 0;
  list-style: none;
}
.social-icons li {
  display: block;
  margin: 1px 0px;
}
.social-icons li a {
  width: 50px;
  height: 50px;
  display: inline-block;
  line-height: 50px;
  text-align: center;
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 1);
  font-size: 18px;
}
.social-icons li a:hover {
  color: #1e1e1e;
  background-color: #fff;
}
</style>
