import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import store from "./store/store.js";
import Btn from "./Btn.js";

ReactDOM.render(
	<Provider store={store}>
		<Btn />
	</Provider>,
	document.getElementById("root")
);

