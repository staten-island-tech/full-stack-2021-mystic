<template>
  <div class="dialogue-text">
    <div>
      {{ gameDialogue[eventIndex].dialogue }}
    </div>
    <button @click="next" class="btn">
      {{ gameDialogue[eventIndex].choices[0].statements }}
    </button>
    <button v-if="secondChoice" @click="alsoNext" class="btn">
      {{ gameDialogue[eventIndex].choices[1].statements }}
    </button>
  </div>
</template>

<script>
import firebase from "firebase";
import "firebase/auth";
export default {
  data() {
    return {
      gameDialogue: [],
      name: "",
      eventIndex: 0,
      secondChoice: false,
    };
  },
  mounted() {
      this.name = this.$route.params.data.name;
      this.gameDialogue = this.$route.params.data.gameDialogue;
  },
  methods: {
    next() {
      this.eventIndex = this.gameDialogue[
        this.eventIndex
      ].choices[0].answerIndex;
      if (this.gameDialogue[this.eventIndex].choices.length > 1) {
        this.secondChoice = true;
      } else {
        this.secondChoice = false;
      }
    },
    alsoNext() {
      this.eventIndex = this.gameDialogue[
        this.eventIndex
      ].choices[1].answerIndex;
      if (this.gameDialogue[this.eventIndex].choices.length > 1) {
        this.secondChoice = true;
      } else {
        this.secondChoice = false;
      }
    },
  },
  
};
</script>

<style lang="scss" scoped>
.btn {
  font-size: 1rem;
  margin:2%;
}
.dialogue-text {
  font-size: 2rem;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  margin-TOP: 78vh;
}
</style>
