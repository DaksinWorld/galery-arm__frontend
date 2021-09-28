import { createStore } from 'vuex'
import axios from "../request/axios";

export default createStore({
  namespaced: true,
  state() {
    return {
      requests: []
    }
  },
  mutations: {
    setRequests(state, requests) {
      state.requests = requests
    },
    addRequest(state, request) {
      state.requests.push(request)
    }
  },
  actions: {
    async getData({commit}) {
      try {
        const {data} = await axios.get(`/articles`)
        commit('setRequests', data)
      } catch (e) {
        console.log(e)
      }
    },
    async getGallery({commit}) {
      try {
        const {data} = await axios.get(`/gallery-photos`)
        commit('setRequests', data)
      } catch (e) {
        console.log(e)
      }
    },
    async getCurrentGalleryPhoto({commit}, payload) {
      try {
        const {data} = await axios.get(`/gallery-photos/${payload}`)
        commit('setRequests', data)
      } catch (e) {
        console.log(e)
      }
    },

  },
  getters: {
    token(state) {
      return state.token
    },
    isAuthenticated(_, getters) {
      return !!getters.token
    },
    requests(state) {
      return state.requests
    }
  },
  modules: {
  }
})
