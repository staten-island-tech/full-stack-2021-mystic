<template>
  <div class="secret">
    <div v-if="error" class="error">{{ error.message }}</div>
    <div>
      <div>
        <h3>Welcome</h3>
        <form @submit.prevent="pressed" id="signup-form">
          <div class="input-field">
            <input
              type="text"
              placeholder="Please Enter Your Name"
              v-model="name"
            />
          </div>
          <p>Who would you like to date with?</p>
          <br />
          <button class="btn" @click="start">Start</button>
        </form>
      </div>
    </div>
    <p>
      Already have an account?
      <router-link to="/login">Login</router-link>
    </p>
  </div>
</template>
<script>
import M from "materialize-css";
import firebase from "firebase";
import "firebase/auth";
export default {
  data() {
    return {
      email: "",
      password: "",
      error: "",
      name: "",
    };
  },
  mounted() {
    M.AutoInit();
  },
  methods: {
    start() {
      let data = {
        name: this.name,
      };
      this.$router.push({ name: "Dialogue", params: { data } });
    },
  },
};
</script>

<style lang="scss">
.secret {
  margin: 35%;
  margin-top: 4%;
  align-items: center;
  text-align: center;
  margin: none;
}
</style>
