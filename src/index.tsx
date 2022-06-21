import { render } from "solid-js/web";
import "./global.css";

const Index: Function = () => {
  return <h1>Hello World</h1>;
};

render(() => <Index />, document.querySelector("#root")!);
