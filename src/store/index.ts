import {ActionContext, createStore} from "vuex";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth'
import {auth} from '@/firebase/config'

export default createStore({
  state: {
    user: null
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload
      //Log out the user state
      console.log(state.user)
    }
  },
  actions: {
    async signup(context, inputs: LoginCredentials) {
      const response = await createUserWithEmailAndPassword(auth, inputs.email, inputs.password)
      if (response) {
        context.commit('setUser', response.user)
      } else {
        throw new Error('signup failed')
      }
    },

    async login(context, inputs: LoginCredentials) {
      const response = await signInWithEmailAndPassword(auth, inputs.email, inputs.password)
      if (response) {
        context.commit('setUser', response.user)
      } else {
        throw new Error('login failed')
      }
    },

    async logout(context) {
      await signOut(auth)

      context.commit('setUser', null)
    }
  },
  modules: {},
});
