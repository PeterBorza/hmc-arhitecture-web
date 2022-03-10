import { Routes as AppRoutes, Route } from "react-router-dom";
import Home from "../components/Home";
import Sliders from "../components/Sliders";
import Page2 from "../components/Page2";
import Page3 from "../components/Page3";
import App from "./App";

const Routes = () => {
  return (
    <AppRoutes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="page1" element={<Sliders />} />
        <Route path="page2" element={<Page2 />} />
        <Route path="page3" element={<Page3 />} />
      </Route>
    </AppRoutes>
  );
};

export default Routes;
