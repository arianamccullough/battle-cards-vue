<template>
  <div>
    <div id="nav">
      <router-link to="/">Main Menu</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <div class="home my-5">
      <h2 class="mb-3">Battle Cards</h2>
      <div>
        <h5>Enter Your Name</h5>
      </div>
      <input type="text" placeholder="Your name..." @click v-model='gameConfig.playerName'></input>
      <div>
        <h5 class="mt-5">Select a Deck Below</h5>
      </div>
      <div class="mb-5">
        <button class="btn btn-warning mx-2 my-5" @click="startGame" v-model="gameConfig.set = 1">Deck
          1</button>
        <button class="btn btn-warning mx-2 my-5" @click="startGame" v-model="gameConfig.set = 2">Deck
          2</button>
        <button class="btn btn-warning mx-2 my-5" @click="startGame" v-model="gameConfig.set = 3">Deck
          3</button>
        <button class="btn btn-warning mx-2 my-5" @click="startGame" v-model="gameConfig.set = 4">Deck
          4</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data() {
      return {
        gameConfig: {
          playerName: '',
          set: ''
        }
      }
    },
    computed: {
      game() {
        return this.$store.state.game
      }
    },
    methods: {
      startGame() {
        this.$store.dispatch("startGame", this.gameConfig)
      },
      getGames() {
        this.$store.dispatch('getGames')
      }
    }
  } 
</script>

<style>
  #app {
    font-family: Arial, Helvetica, sans-serif;
    color: #ffffff;
    background-color: black;
    height: 1000px
  }
</style>