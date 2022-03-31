import { Effect, ImmerReducer, Reducer, Subscription } from 'umi'

export interface HeroModelState {
  name: string
}

export interface HeroModelType {
  namespace: 'hero'
  state: HeroModelState
  effects: {
    query: Effect
  }
  reducers: {
    // save: Reducer<HeroModelState>
    // 启用 immer 之后
    save: ImmerReducer<HeroModelState>
  }
  subscriptions: { setup: Subscription }
}

const HeroModel: HeroModelType = {
  namespace: 'hero',

  state: {
    name: 'hero',
  },

  effects: {
    *query({ payload }, { call, put }) {},
  },

  reducers: {
    // save(state, action) {
    //   return {
    //     ...state,
    //     ...action.payload,
    //   }
    // },
    // 启用 immer 之后
    save(state, action) {
      state.name = action.payload
    },
  },

  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/') {
          dispatch({
            type: 'query',
          })
        }
      })
    },
  },
}

export default HeroModel
