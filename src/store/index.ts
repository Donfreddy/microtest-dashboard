import { createStore } from "vuex";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth'
// import {collection, setDoc, addDoc, getDoc, doc} from 'firebase/firestore'

import { auth, db } from '@/firebase/config'

export default createStore({
  state: {
    user: {
      loggedIn: false,
      data: null
    }
  },
  getters: {
    user(state) {
      return state.user
    }
  },
  mutations: {
    SET_LOGGED_IN(state, value) {
      state.user.loggedIn = value;
    },
    SET_USER(state, data) {
      state.user.data = data;
    }
  },
  actions: {
    async signup(context, inputs: LoginCredentials) {
      await createUserWithEmailAndPassword(auth, inputs.email, inputs.password).then(async (createUser) => {
        context.commit('SET_USER', createUser.user)
        // // getDoc(doc(db,''));
        // await addDoc(collection(db, 'users', createUser.user.uid), {})
      }).catch((error) => {
        console.log(error)
        throw new Error('Unable to register user')
      })
    },

    async login(context, inputs: LoginCredentials) {
      const response = await signInWithEmailAndPassword(auth, inputs.email, inputs.password)
      if (response) {
        context.commit('SET_USER', response.user)
      } else {
        throw new Error('login failed')
      }
    },

    async fetchUser(context, user) {
      context.commit("SET_LOGGED_IN", user !== null);
      if (user) {
        context.commit("SET_USER", {
          displayName: user.displayName,
          email: user.email
        });
      } else {
        context.commit("SET_USER", null);
      }
    },

    async logout(context) {
      await signOut(auth)
      context.commit('SET_USER', null)
    }
  },
  modules: {},
});
