import { auth } from "@/firebase/config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, User } from "firebase/auth";
import { ActionContext, ActionTree } from "vuex";
import { State } from ".";
import { ActionTypes } from "./action-types"
import { MutationTypes } from "./mutation-types"
import { Mutations } from "./mutations";

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>
} & Omit<ActionContext<State, State>, 'commit'>

export interface Actions {
  [ActionTypes.LOGIN](
    { commit }: AugmentedActionContext,
    payload: LoginCredentials
  ): void
}

export const actions: ActionTree<State, State> & Actions = {
  async [ActionTypes.LOGIN]({ commit }, payload: LoginCredentials) {
    const response = await signInWithEmailAndPassword(auth, payload.email, payload.password)
    if (response) {
      commit(MutationTypes.SET_LOGGED_IN, response.user !== null);
      commit(MutationTypes.SET_USER, response.user)
    } else {
      throw new Error('login failed')
    }
  },

  async [ActionTypes.ADD_USER]({ commit }, payload: LoginCredentials) {
    await createUserWithEmailAndPassword(auth, payload.email, payload.password).then(async (createUser) => {
      commit(MutationTypes.SET_USER, createUser.user)
      // // getDoc(doc(db,''));
      // await addDoc(collection(db, 'users', createUser.user.uid), {})
    }).catch((error) => {
      console.log(error)
      throw new Error('Unable to register user')
    })
  },

  async [ActionTypes.LOGIN]({ commit }, user: User) {
    commit(MutationTypes.SET_LOGGED_IN, user !== null);
    if (user) {
      commit(MutationTypes.SET_USER, { displayName: user.displayName, email: user.email });
    } else {
      commit(MutationTypes.SET_USER, null);
    }
  },


  async [ActionTypes.LOGOUT]({ commit }) {
    await signOut(auth)
    commit(MutationTypes.SET_USER, null)
  },

  // async [ActionTypes.LOGIN]({ commit }, payload: LoginCredentials) {

  // },

}