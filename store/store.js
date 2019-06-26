import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 1
    },
    getters: {
        nextCount: state => {
            return state.count + 1
        }
    },
    mutations: {
        increment(state) {
            state.count++
        },
        minus(state) {
            state.count--
        }
    },
    actions: {
        increment({commit}) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    commit('increment')
                    resolve()
                }, 1000)
            })
        }
    }
})

export default store