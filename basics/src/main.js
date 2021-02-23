import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import 'materialize-css'
import axios from "axios";
import firebase from "firebase";

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyC27AFP-OCOKuf9DN_ZndnERnnB4SyJmek",
  authDomain: "ap-fullstack.firebaseapp.com",
  databaseURL: "https://ap-fullstack-default-rtdb.firebaseio.com",
  projectId: "ap-fullstack",
  storageBucket: "ap-fullstack.appspot.com",
  messagingSenderId: "21368777674",
  appId: "1:21368777674:web:e42054f3c80c71a51d3d33",
  measurementId: "G-LKPXRVV57E"
}

firebase.initializeApp(firebaseConfig);
firebase.analytics();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
