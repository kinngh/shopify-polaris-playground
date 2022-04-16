import React from "react";
import Index from "./pages/Index";
import Page2 from "./pages/Page2";

const routes = {
  "/": () => <Index />,
  "/page2": () => <Page2 />,
};

export default routes;
