
const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case 'GOOD':
    const state_2 = {
      good: initialState.good +1,
      ok: initialState.ok,
      bad: initialState.bad
    }
    return state_2
    case 'OK':
      const state_3 = {
        good: initialState.good,
        ok: initialState.ok + 1,
        bad: initialState.bad
      }
      return state_3
    case 'BAD':
      const state_4 = {
        good: initialState.good,
        ok: initialState.ok,
        bad: initialState.bad + 1
      }  
      return state_4
    case 'ZERO':
      return state
    default: return state
  }
  
}

export default counterReducer
