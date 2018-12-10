<template>
  <div class="opponentHand d-flex justify-content-center" v-if="game.id">
    <div class="col-6 text-white">
      <h3 v-if="getOpponent.hand.length">{{getOpponent.name}}</h3>
    </div>
    <div class="col-6 text-white">
      <h4>Remaining Cards: {{getOpponent.remainingCards}}</h4>
    </div>
    <div v-for="card in getOpponent.hand" @click="revealed(active.cardId)">
      <div @click="active.cardId=card.id" :class="{'border-warning': card.id == active.cardId}" class="card">
        <div class="text-white card-body">
          <div v-if="card.visible">{{card.name}}</div>
          <img v-if="!card.visible" class="cardback" src="@/assets/bluecardback.png" />
          <img v-if="card.visible" class="cardImg" :src="card.img" />
          <div class=" d-flex justify-content-center">
            <p v-if="card.visible" class="card-text right">
              Attack:{{card.attack}}
              </br>
              Defense: {{card.defense}}
              </br>
              Health:{{card.health}}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'opponentHand',
    data() {
      return {
        active: {
          cardId: ''
        }
      }
    },
    props: ['hand'],
    computed: {
      getOpponent() {
        return this.$store.state.game.opponent
      },
      game() {
        return this.$store.state.game
      }
    },
    methods: {
      revealed(cardId) {
        this.$store.dispatch('revealed', cardId)
      }
    }
  }
</script>

<style>
  .cardImg {
    height: 100px;
    width: 150px;
  }

  .cardback {
    height: 200px;
    width: 150px;
    background-color: black;
  }

  .card-body {
    background-color: black;
    height: 250px;
  }

  .opponentHand {
    background-color: black;
  }
</style>