import React from "react";
import { Outlet } from "react-router";
import { LinkContextProvider } from "../app/context";

import styles from "./App.module.scss";
import Navigation from "../components/Navigation";

const App: React.FC = () => {
  return (
    <div className={styles.App}>
      <LinkContextProvider>
        <Navigation>
          <Outlet />
        </Navigation>
      </LinkContextProvider>
    </div>
  );
};

export default App;
