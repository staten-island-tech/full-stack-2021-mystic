<template>
  <div>
    <h1>{{ greeting }}</h1>
    <ul>
      <li v-for="flavor in icecream" :key="flavor">{{ flavor }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Child",
  props: {
    greeting: String,
    icecream: Array,
  },
};
</script>

<style></style>
