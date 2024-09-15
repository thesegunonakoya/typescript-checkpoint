// Import React with proper types for TypeScript
import React from "react";

// Define a type for the props of the Greeting component
interface GreetingProps {
  name: string; // Expect a 'name' prop of type string
}

// Define the functional component using the GreetingProps type
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

// Export the component
export default Greeting;
