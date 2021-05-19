import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

//css
import "./assets/general.css";

//fontawesome
import { library } from "@fortawesome/fontawesome-svg-core";
//import {} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faFacebook);
library.add(faTwitter);
library.add(faLinkedin);
library.add(faInstagram);


createApp(App)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
