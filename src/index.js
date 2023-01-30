import ReactDOM from "react-dom";
import { HelloWorld } from "./HelloWorld";

const hello = <HelloWorld />;
const root = document.querySelector("#root");

ReactDOM.render(hello, root);
