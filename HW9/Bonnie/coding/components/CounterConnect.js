import { connect } from 'react-redux'
import { increment, decrement } from '../store/counterSlice'

const CounterConnect = ({ count, increment, decrement }) => {
  return (
    <div>
      <h2>Connect Counter</h2>
      <p>{count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  count: state.counter.value
})

const mapDispatchToProps = {
  increment,
  decrement
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterConnect)
