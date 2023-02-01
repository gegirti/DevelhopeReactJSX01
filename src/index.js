import ReactDOM from "react-dom";
import { HelloThere } from "./HelloThere";

const hello = <HelloThere />;
const root = document.querySelector("#root");

ReactDOM.render(hello, root);
