<template>
    <div id="profile">
    <div>
      <input type="text"
        v-model="username"
        @keyup.enter="addUsername">
      <button  @click="addUsername">
        Add Name
      </button>
    </div>
    <ul class="usernames">
      <li v-for="user in users" >
        {{ user.name }} -
        <button @click="deletename(user)">
          Remove
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
  import { db } from './main';

  export default {
    name: 'profile',
    data() {
      return {
        users: [],
        username: ''
      }
    },
    firestore() {
      return {
        users: db.collection('users'),
      }
    },
    methods: {
      addReptile: function() {
        this.$firestore.users.add(
          {
            name: this.username,
            timestamp: new Date()
          }
        );
        this.username = '';
      },
      deleteName: function(user) {
        this.$firestore.users.doc(user['.key']).delete();
      }
    }
  }
</script>