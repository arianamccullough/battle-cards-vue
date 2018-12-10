<template>
  <div class="game container-fluid">
    <div>
      <h1>A Battle has Commenced!</h1>
    </div>
    <opponent class="row mb-3" />
    <div v-if="game.player.dead">
      <h2 class=" mt-5 text-white">You Lose!</h2>
    </div>
    <div v-else-if="game.opponent.dead">
      <h2 class="mt-5 text-white">You Win!</h2>
    </div>
    <div v-else-if="game.player.dead && game.opponent.dead">
      <h2 class=" mt-5 text-white">Tie!</h2>
    </div>
    <player class="row mt-3" />
    <div>
      <h6>Select a card from your deck and an enemy card to attack</h6>
    </div>
    <div v-if="isAGame()"><button class="btn btn-warning mb-5" v-if="!game.opponent.dead && !game.player.dead" @click="attack">Fight!</button></div>
  </div>
</template>

<script>
  import opponent from "@/components/opponent.vue"
  import player from "@/components/player.vue"
  export default {
    name: 'game',
    data() {
      return {
      }
    },
    computed: {
      game() {
        return this.$store.state.game
      },
      cards() {
        return {
          opponentCardId: this.$store.state.opponentCardId,
          playerCardId: this.$store.state.playerCardId
        }
      }
    },
    methods: {
      isAGame() {
        return this.cards.playerCardId.length > 1 && this.cards.opponentCardId.length > 1
      },
      attack() {
        this.$store.dispatch("attack", { gameId: this.$route.params.gameId, cardIds: this.cards })
      },
    },
    components: {
      player,
      opponent
    },
    mounted() {
      if (!this.game.id) {
        this.$store.dispatch("getGame", this.$route.params.gameId)
      }
    },
  }
</script>

<style>
  .card {
    background-color: rgb(255, 255, 255)
  }
</style>