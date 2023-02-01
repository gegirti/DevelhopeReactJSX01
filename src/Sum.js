import React from "react";

function sum(a, b) {
  return a + b;
}

export class Sum extends React.Component {
  render() {
    return <h2>Sum: {sum(3, 5)}</h2>;
  }
}
