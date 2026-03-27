import {connect} from "react-redux";
import {increment,decrement} from "../../store/hw9/counterReduxSlice.js";
import "./CounterRedux.css"

//use mapStateToProps + mapDispatchToProps
function CounterReduxConnected ({count,increment,decrement}) {

    return (
        <div className="hw9-connect">
            <h4>Counter Redux Connect</h4>

            <div className="hw9-btn">
                <div className="hw9-btn-mapDispatch">
                    <button type="button" onClick={() => increment()}>+</button>
                    <button type="button" onClick={() => decrement()}>-</button>
                </div>
            </div>
        </div>
    );
}

// get the state form store
const mapStateToProps = (state) => ({
        count:state.counter.value,
    });

//wrap dispatch as props
const mapDispatchToProps = {
    increment,
    decrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterReduxConnected);