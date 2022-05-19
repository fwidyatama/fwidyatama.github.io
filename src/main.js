import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import "aos/dist/aos.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faLocationDot,
  faLocation,
  faPhone,
  faEnvelope,
  faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faLocationDot,
  faLocation,
  faPhone,
  faGithub,
  faEnvelope,
  faLinkedin,
  faLayerGroup,
  faFacebook,
  faInstagram,
  faTwitter
);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
