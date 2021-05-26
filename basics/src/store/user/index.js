import firebase from "firebase";
import { user } from "../../main";
import router from '../../router';

export default {
  state: {
    user: null
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    }
  },
  actions: {
    async signUp({ commit }, payload) {
        commit('setLoading', true);
        await firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(() => {
          console.log("Welcome" + payload.email)
          router.push("/secret").catch(error => {
            alert(error.message)
          });
      })},
    async login ({commit}, payload) {
      commit('setLoading', true)
      await firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
      .then(() => {
          console.log("Welcome" + payload.email);
          firebase.firestore().collection("users")
          .doc(firebase.auth().currentUser.uid)
          .get()
          .then(doc=>{
            let username = doc.data().username;
            payload.name = username;
            let data = { name:payload.name };
            router.push({ 
              name: "Dialogue", 
              params: { data } 
        }); 
          router.push("/Interface")  
          }
        ).catch(
          error => {
            console.log(error)
          }
        )
    })},
    logInGoogle ({commit}) {
        commit('setLoading', true)
        commit('clearError')
        firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
          .then(
            user => {
              commit('setLoading', false)
              const newUser = {
                id: user.uid,
                email: user.email,
                name: user.username,
              }
              commit('setUser', newUser)
            }
          )
          .catch(
            error => {
              commit('setLoading', false)
              commit('setError', error)
              console.log(error)
            }
          )
      },
      async autoLogin ({commit}, payload) {
        commit('setLoading', true);
        firebase
            .firestore()
            .collection("users")
            .doc(firebase.auth().currentUser.uid)
            .get()
            .then(doc=>{
                const userInfo = doc.data();
                commit('setGame', userInfo?.enable ? userInfo:{});
                if(userInfo){
                  !userInfo.enable && dispatch('logout');
                  if(router.currentRoute.path==='/Interface'){
                    userInfo?.enable && router.push('/');
                  }
                }
                commit('setLoading', false);
                commit('setError', null);  
            }).catch(e =>{
              commit('setError', e)
              commit('setLoading', false);
            });
             
      }, 
      resetPasswordWithEmail ({ commit }, payload) {
        const { email } = payload
        commit('setLoading', true)
        firebase.auth().sendPasswordResetEmail(email)
        .then(
          () => {
            commit('setLoading', false)
            console.log('Email Sent')
          }
        )
        .catch(
          error => {
            commit('setLoading', false)
            commit('setError', error)
            console.log(error)
          }
        )
      },
      async logout ({commit}) {
        await firebase.auth().signOut()
        commit('setUser', {})
        console.log("Logged out")
      }
    },
    getters: {
      user (state) {
        return state.user
      }
}}