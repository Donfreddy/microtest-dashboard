import {MutationTree} from "vuex";
import {State} from ".";
import {MutationTypes} from "./mutation-types";

export type Mutations<S = State> = {
  [MutationTypes.SET_LOGGED_IN](state: S, payload: boolean): void
  [MutationTypes.SET_USER](state: S, payload: UserData): void
}

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.SET_LOGGED_IN](state, payload: boolean) {
    state.user.loggedIn = payload;
    localStorage.setItem('loggedIn', String(payload))
  },
  [MutationTypes.SET_USER](state, payload: UserData) {
    state.user.data = payload;
  },
}