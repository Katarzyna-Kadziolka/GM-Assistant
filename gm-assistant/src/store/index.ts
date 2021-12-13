import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import { Character } from 'src/data/Character'

export interface State {
  rows: Array<Character>
}

// eslint-disable-next-line symbol-description
export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    rows: new Array<Character>()
  },
  mutations: {
    addToRows (state, row) {
      state.rows.push(row)
    }
  },
  actions: {
  },
  modules: {
  }
})

export function useStore () {
  return baseUseStore(key)
}
