import React from "react";

class CounterClass extends React.Component {
    //constructor received data and packed as props
    //linked props to this via super
    constructor(props) {
        super(props);
        this.state = {
            count: props.initialValue,
        }
    }
    //count addition
    handleAddition = () => {
        this.setState({count: this.state.count + 1});
    };
    //count deduction
    handleDeduction = () => {
        this.setState({count: this.state.count -1});
    };

    //render on web
    render() {
        return(
            <div className="counter-card">
                <h2>Counter</h2>
                <p>Current Count: {this.state.count}</p>

                {/*add button to count addition or deduction*/}
                <div className="counter-button">
                    <button onClick={this.handleAddition}>+</button>
                    <button onClick={this.handleDeduction}>-</button>
                </div>
            </div>
        )
    }
}

export default CounterClass;