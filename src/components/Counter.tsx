import React from 'react';

const initialState = {value: 0};

type CounterState = Readonly<typeof initialState>;

export class Counter extends React.Component<any, CounterState> {
  public readonly state: CounterState = initialState;


  public render() {
    return (
      <>
        <div>{this.state.value}</div>
        <button onClick={this.handleIncrement}>+</button>
        <button onClick={this.handleDecrement}>-</button>
      </>
    );
  }

  private handleIncrement = () => this.setState({value: this.state.value + 1});
  private handleDecrement = () => this.setState({value: this.state.value - 1});
}