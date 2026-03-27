import React from "react";

export default class CounterClass extends React.Component {
    constructor(props) {  
        super(props);
        this.state = { 
        count : Number(props.initialValue ?? 0)};
    }

    increase = () => {
        this.setState(
            (prev) => ({count: prev.count + 1}),
            () => this.props.onValueChange?.(this.state.count)
        );
    }

    decrease = () => {
        this.setState(
            (prev) => ({count: prev.count - 1}),
            () => this.props.onValueChange?.(this.state.count)
        );
    }

    render(){
        return (
            <>
                <div className="min-h-scree bg-slate-50 flex items-center justify-center p-4 gap-4">
                    <div className="flex items-start justify-between gap-4">
                    <div>
                        <h2 className="w-full text-lg font-semibold text-slate-900">Counter Class Component</h2>
                    </div>
                    </div>
                </div> 
                <div className="mt-6 text-center">
                    <div className="text-3xl font-extrabold tracking-tight text-slate-900">
                        {this.state.count}
                    </div>
                </div>
                    
                    <div className="mt-6 flex items-center justify-center gap-5">
                        <button onClick={this.increase} 
                        className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-2 text-white shadow-sm hover:bg-slate-800 active:scale-[0.99] transition">
                             + </button>

                        <button onClick={this.decrease}
                        className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-slate-900 shadow-sm hover:bg-slate-50 active:scale-[0.99] transition">
                            - </button>
                    </div>
                    
                
            </>
        )
    }
}