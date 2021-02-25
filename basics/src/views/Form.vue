<template>
  <div>
    <form>
      <input type="email" required v-model="email" />
      <input type="password" required v-model="password" />
      <p>{{ email }}</p>
      <p>{{ password }}</p>
    </form>
  </div>
</template>

<script>
export default {
  name: "Form",
  data() {
    return {
      email: "",
      password: "",
    };
  },
};
</script>

<style></style>
