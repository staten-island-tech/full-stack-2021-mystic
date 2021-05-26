import Vue from "vue/dist/vue.js";
const App = () => import('./App');
import "./registerServiceWorker";
import router from "./router";
import { store } from './store';
import axios from "axios";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import 'materialize-css/dist/css/materialize.min.css';
import { firebaseConfig } from 'firebase';
import VueRouter from 'vue-router'
import { nextTick } from "vue/types/umd";

Vue.use(VueRouter);
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;
Vue.prototype.$store = store;

new Vue({
  el: '#app',
  router:router,
  render:h=>h(App),
  store,
  template: '<App/>',
  components: { App },
  created () {
    firebase.initializeApp({
      apiKey: "AIzaSyC27AFP-OCOKuf9DN_ZndnERnnB4SyJmek",
      authDomain: "ap-fullstack.firebaseapp.com",
      databaseURL: "https://ap-fullstack-default-rtdb.firebaseio.com",
      projectId: "ap-fullstack",
      storageBucket: "ap-fullstack.appspot.com",
      messagingSenderId: "21368777674",
      appId: "1:21368777674:web:e42054f3c80c71a51d3d33",
      measurementId: "G-LKPXRVV57E"
    });
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoLogin', user)
      }
    });
  }
});
firebase.analytics();

const db = firebase.firestore();
const user = firebase.auth();
const usersCollection = db.collection('users');

export { db, user, usersCollection };
