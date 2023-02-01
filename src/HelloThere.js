import React from "react";

function helloName(name) {
  return name;
}
export class HelloThere extends React.Component {
  render() {
    return <h1>Hello, {helloName("taha")}</h1>;
  }
}
