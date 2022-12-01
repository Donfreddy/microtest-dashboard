import { GetterTree } from "vuex"
import { State } from "."


export type Getters = {
  user(state: State): UserState
}

export const getters: GetterTree<State, State> & Getters = {
  user: (state) => {
    return state.user;
  },
}