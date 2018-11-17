import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Amplify, { Storage } from "aws-amplify";
import aws_exports from "./aws-exports";

Amplify.configure(aws_exports);
Storage.configure({ level: "private" });
ReactDOM.render(<App />, document.getElementById("root"));
