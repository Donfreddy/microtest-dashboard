import { auth, db } from "@/firebase/config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, User, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
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

  [ActionTypes.ADD_USER](
    { commit }: AugmentedActionContext,
    payload: CreateUserData
  ): void

  [ActionTypes.LOGOUT](
    { commit }: AugmentedActionContext
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

  async [ActionTypes.ADD_USER]({ commit }, payload: CreateUserData) {
    const response = await createUserWithEmailAndPassword(auth, payload.email, payload.password);
    if (response) {
      commit(MutationTypes.SET_USER, response.user)

      // Update user profil
      await updateProfile(response.user, {
        displayName: payload.name,
        photoURL: '',
      })

      // create a user document
      await setDoc(doc(db, "users", response.user.uid), {
        name: payload.name,
        email: payload.email,
        balance: "0",
        phone_number: payload.phone
      });
    } else {
      commit(MutationTypes.SET_LOGGED_IN, false)
      commit(MutationTypes.SET_USER, null);
    }
  },

  async [ActionTypes.LOGIN]({ commit }, user: User) {
    commit(MutationTypes.SET_LOGGED_IN, user !== null);
    if (user) {
      commit(MutationTypes.SET_USER, { displayName: user.displayName, email: user.email });
    } else {
      commit(MutationTypes.SET_LOGGED_IN, false)
      commit(MutationTypes.SET_USER, null);
    }
  },

  async [ActionTypes.LOGOUT]({ commit }) {
    await signOut(auth)
    commit(MutationTypes.SET_LOGGED_IN, false)
    commit(MutationTypes.SET_USER, null)
  },
}