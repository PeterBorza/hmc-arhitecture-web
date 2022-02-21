import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<Routes>
					<Route path='/' element={<App />}>
						<Route index element={<Home />} />
						<Route path='page1' element={<Page1 />} />
						<Route path='page2' element={<Page2 />} />
					</Route>
				</Routes>
			</Provider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
