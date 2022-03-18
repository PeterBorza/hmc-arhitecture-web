import React from "react";
import { Outlet } from "react-router-dom";
import { LinkContextProvider } from "./context";

import styles from "./App.module.scss";
import Navigation from "../components/Navigation";

const App: React.FC = () => (
  <div className={styles.App}>
    <LinkContextProvider>
      <Navigation>
        <Outlet />
      </Navigation>
    </LinkContextProvider>
  </div>
);

export default App;
