// Bring in all of react and call hooks with React.useHOOKNAME
import * as React from 'react'

// react-redux hooks for selecting state and dispatching actions
import { useDispatch, useSelector } from 'react-redux'

// Import the slices, and reducer actions to be used in the JSX
import {
  countSlice,
  increment,
  decrement,
  countSelector
} from '../redux/slices/countSlice'


export default function Counter() {
  // Selects which state from the store to bring in
  const count = useSelector(countSelector)
  // This is to be able to dispatch actions to the reducer in the slice
  const dispatch = useDispatch()

  return (
    <div className="counter">
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>
        add
      </button>
      <button onClick={() => dispatch(decrement())}>
        subtract
      </button>
    </div>
  )
}
