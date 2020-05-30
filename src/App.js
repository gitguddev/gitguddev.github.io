import React from "react";
import "./App.css";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	Redirect
} from "react-router-dom";
import Home from "./route/home.jsx";

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/error">
						<Error />
					</Route>
					<Redirect to="/error" />
				</Switch>
			</Router>
		</div>
	);
}

function Error() {
	return (
		<center>
			<span style={{ fontSize: "25px" }}>
				<span
					role="img"
					aria-label="Robot emoji"
					style={{ fontSize: "100px" }}
				>
					🤖
				</span>
				<br /> Page could not be found ! <Link to="/">Go Home</Link>
			</span>
		</center>
	);
}

export default App;
