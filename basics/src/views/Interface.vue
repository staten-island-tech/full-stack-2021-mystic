<template>
  <div>{{ name }}</div>
</template>

<script>
import { gameDialogue } from "../dialogue";

export default {
  data() {
    return {
      gameDialogue: gameDialogue,
      name: "",
    };
  },

  mounted() {
    this.name = this.$route.params.data.name;
    console.log(this.name);
  },
};
</script>

<style lang="scss" scoped></style>
