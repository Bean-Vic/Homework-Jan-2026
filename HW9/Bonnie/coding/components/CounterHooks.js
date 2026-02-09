import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, setValue } from '../store/counterSlice'
import { useEffect } from 'react'

const CounterHooks = () => {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  useEffect(() => {
    const saved = localStorage.getItem('count')
    if (saved !== null) {
      dispatch(setValue(Number(saved)))
    }

    return () => {
      localStorage.setItem('count', count)
    }
  }, [])

  return (
    <div>
      <h2>Hooks Counter</h2>
      <p>{count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  )
}

export default CounterHooks
