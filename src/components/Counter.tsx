// Import React and Component with proper types for TypeScript
import React, { Component } from "react";

// Define an interface for the state of the Counter component
interface CounterState {
  count: number; // The 'count' in state is a number
}

// Define a class component, specifying the state and props (props are empty in this case)
class Counter extends Component<{}, CounterState> {
  // Initialize the state with type-safe properties
  state: CounterState = {
    count: 0, // Initial value of 'count' is set to 0
  };

  // Define the increment function, ensuring the state is updated correctly
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // Render method with JSX
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

// Export the component
export default Counter;
