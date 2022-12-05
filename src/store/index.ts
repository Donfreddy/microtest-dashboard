import {createStore, Store as VuexStore, CommitOptions, DispatchOptions} from "vuex";
import {Getters, getters} from "./getters";
import {Mutations, mutations} from "./mutations";
import {Actions, actions} from "./actions";

export interface State {
  user: UserState
}

export const isLoggedIn = (): boolean => {
  if (localStorage.getItem('loggedIn')) {
    return localStorage.getItem('loggedIn') === 'true'
  }
  return false;
};

// Create initial state
const state: State = {
  user: {
    loggedIn: isLoggedIn(),
    data: null
  }
}

//setup store type
export type Store = Omit<
  VuexStore<State>,
  'getters' | 'commit' | 'dispatch'
> & {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions
  ): ReturnType<Mutations[K]>
} & {
  dispatch<K extends keyof Actions>(
    key: K,
    payload: Parameters<Actions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<Actions[K]>
} & {
  getters: {
    [K in keyof Getters]: ReturnType<Getters[K]>
  }
}

export const store = createStore<State>({
  state,
  getters,
  mutations,
  actions,
  modules: {},
});

export const useStore = (): Store => (store as Store);
