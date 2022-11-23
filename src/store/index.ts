import {createStore} from "vuex";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth'
// import {collection, setDoc, addDoc, getDoc, doc} from 'firebase/firestore'

import {auth, db} from '@/firebase/config'

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
      await createUserWithEmailAndPassword(auth, inputs.email, inputs.password).then(async (createUser) => {
        context.commit('setUser', createUser.user)
        // // getDoc(doc(db,''));
        // await addDoc(collection(db, 'users', createUser.user.uid), {})
      }).catch((error) => {
        console.log(error)
        throw new Error('login failed')
      })
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
