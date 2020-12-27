import DefaultLayout from "~/layouts/Default.vue";
import settings from "../data/theme.json";

import "@/assets/code-highlight.css";
import "@/assets/main-build.css";

export default function(Vue, { head }) {
  Vue.component("Layout", DefaultLayout);
  head.bodyAttrs = {
    class: settings.dark_mode ? "dark" : ""
  };
  head.script.push({
    src: 'http://178.128.190.56:8000/js/plausible.js',
    data_domain: 'bluedojo.dev'
  });
}
