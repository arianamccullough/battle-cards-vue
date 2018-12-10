<template>
  <div class="player justify-content-center" v-if="game.id">
    <div class="col-6">
      <h3 class="text-white" v-if="getPlayer.hand.length">{{getPlayer.name}}</h3>
    </div>
    <div class="col-6">
      <h4 class="text-white">Remaining Cards: {{getPlayer.remainingCards}}</h4>
    </div>

    <div v-for="card in getPlayer.hand" @click="attack(active.cardId)">
      <div @click="active.cardId=card.id" :class="{'border-warning': card.id == active.cardId}" class="card mb-3">
        <div class="card-body">
          <div>{{card.name}}</div>
          <img class="cardImg" :src="card.img" />
          <p class="d-flex justify-content-center">
            Attack: {{card.attack}} </br>
            Defense: {{card.defense}}</br>
            Health: {{card.health}}
          </p>
          <div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'player',
    data() {
      return {
        active: {
          cardId: ''
        }
      }
    },
    computed: {
      getPlayer() {
        console.log(this.$store.state.game.player.hand)
        return this.$store.state.game.player
      },
      game() {
        return this.$store.state.game
      }
    },
    methods: {
      attack(cardId) {
        this.$store.dispatch("aPlayer", cardId)
      }
    }
  }
</script>

<style>
  .cardImg {
    height: 100px;
    width: 150px;
  }

  .card-body {
    background-color: black;
    height: 250px;
    color: white;
  }

  .player {
    background-color: black;
  }
</style>