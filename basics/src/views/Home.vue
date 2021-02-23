<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    
      <div class="welcome-message">
      <h1>
        Welcome to Mystic
      </h1>
      <h3>
        Start your journal here
      </h3>
      <button class='btn-large loggedOut red lighten-3'> 
          <a href="#" class="modal-trigger" data-target="modal-signup">Create Account</a>
      </button>
    </div>
    <nav>
        <div class="nav-wrapper container">
            <a href="#">
                <img class="game-logo" src="media/img/logo-test.png"> 
            </a>
            <ul id="nav-mobile">
                <li class="loggedIn">
                    <a href="#" class="modal-trigger" data-target="modal-account">Account</a>
                </li>
                <li class="loggedIn">
                    <a href="#" id="logout">Logout</a>
                </li>
                <li class="loggedIn">
                    <a href="#" class="modal-trigger" data-target="modal-status">Status</a>
                </li>
                <li class="loggedOut">
                    <a href="#" class="modal-trigger" data-target="modal-login">Login</a>
                </li>
                <li class="loggedOut">
                    <a href="#" class="modal-trigger" data-target="modal-signup">Sign up</a>
                </li>
            </ul>
        </div>
    </nav>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>
