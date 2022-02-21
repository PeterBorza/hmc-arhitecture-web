import React from "react";
import { Outlet } from "react-router";

import styles from "./App.module.scss";
import Navigation from "../components/Navigation";

const App: React.FC = () => {
  return (
    <div className={styles.App}>
      <Navigation>
        <Outlet />
      </Navigation>
    </div>
  );
};

export default App;
