
const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'GOOD':
    const state_2 = {
      good: state.good + 1,
      ok: state.ok,
      bad: state.bad
    }
    return state_2
    case 'OK':
      const state_3 = {
        good: state.good,
        ok: state.ok + 1,
        bad: state.bad
      }
      return state_3
    case 'BAD':
      const state_4 = {
        good: state.good,
        ok: state.ok,
        bad: state.bad + 1
      }  
      return state_4
    case 'ZERO':

    const state_zero = {
      good: 0,
      ok: 0,
      bad: 0
    }  
    console.log('zeroing shit', state_zero)
      return state_zero
    default: return state
  }
  
}

export default counterReducer
