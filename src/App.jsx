/**
 * IMPORTANT
 * If drag/dropping to a repo, avoid overwriting App.jsx
 */

import React from "react";
import { useRoutes } from "hookrouter";
import routes from "./GlobalRoutes";
import { AppProvider as PolarisProvider } from "@shopify/polaris";
import translations from "@shopify/polaris/locales/en.json";
import "@shopify/polaris/build/esm/styles.css";

const App = () => {
  const RouteDOM = useRoutes(routes);
  return <PolarisProvider i18n={translations}>{RouteDOM}</PolarisProvider>;
};

export default App;
