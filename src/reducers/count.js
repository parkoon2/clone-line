// Actions
const INCREASE = 'my-app/sample/INCREASE'
const DECREASE = 'my-app/sample/DECREASE'

// Initial State
const InitialState = {
  number: 0
}

// Reducers
export default function reducer(state = InitialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        number: state.number + 1
      }
    case DECREASE:
      return {
        ...state,
        number: state.number - 1
      }
    default:
      return state
  }
}
// Action Creator
export const increase = () => {
  return {
    type: INCREASE
  }
}

export const decrease = () => {
  return {
    type: DECREASE
  }
}

export const decraseAsync = () => dispatch => {
  dispatch(decrease())
}
