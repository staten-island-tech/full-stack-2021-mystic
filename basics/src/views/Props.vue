<template>
  <div>
    <Child :greeting="greeting" :icecream="icecream" />
  </div>
</template>

<script>
import Child from "../components/Child";

export default {
  data() {
    return {
      greeting: "Welcome to Props",
      icecream: ["Chocolate", "Vanilla", "Strawberry", "Pistachio"],
    };
  },
  components: {
    Child,
  },
};
</script>

<style></style>
