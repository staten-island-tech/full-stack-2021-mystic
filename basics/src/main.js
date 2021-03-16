import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import axios from "axios";
import firebase from "firebase";
//import VueFirestore from 'vue-firestore';
import "firebase/auth";
import 'firebase/firestore';
import 'materialize-css/dist/css/materialize.min.css';
//import VueFire from 'vuefire';


Vue.prototype.$axios = axios;
Vue.config.productionTip = false;
//Vue.use(VueFirestore);

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
//const db = firebase.firestore();

const fb = firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const db = fb.database();

//Vue.use(VueFire);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
