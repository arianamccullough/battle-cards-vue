import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router';

let api = axios.create({
  baseURL: 'https://battlecardz.herokuapp.com/api/games',
  timeout: 7000
})



Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    playerCardId: '',
    playerHand: [],
    opponentCardId: '',
    opponentHand: [],
    game: {},
  },
  mutations: {
    setOpponent(state, opponentCardId) {
      state.opponentCardId = opponentCardId
    },
    setPlayer(state, playerCardId) {
      state.playerCardId = playerCardId
    },
    setGame(state, game) {
      state.game = game
    }
  },
  actions: {
    startGame({ commit }, gameConfig) {
      api.post('', gameConfig)
        .then(res => {
          commit('setGame', res.data.game)
          router.push({ name: 'game', params: { gameId: res.data.game.id } })
        })
    },
    getGame({ commit }, gameId) {
      api.get('/' + gameId)
        .then(res => {
          commit('setGame', res.data.data)
        })
    },
    revealed({ commit }, opponentCardId) {
      commit('setOpponent', opponentCardId)
    },
    attack({ commit }, payload) {
      api.put('/' + payload.gameId, payload.cardIds)
        .then(res => {
          commit("setGame", res.data.game)
        })
    },
    aPlayer({ commit }, playerCardId) {
      commit('setPlayer', playerCardId)
    },

  }
})

