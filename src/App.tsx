import React from "react";
import "./App.scss";
import { Outlet } from "react-router";

const App: React.FC = () => {
	return (
		<div className='App'>
			<Outlet />
		</div>
	);
};

export default App;
