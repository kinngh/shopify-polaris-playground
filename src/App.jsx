/**
 * IMPORTANT
 * If drag/dropping to a repo, avoid overwriting App.jsx
 */

import React, { useState, useCallback } from "react";
import { useRoutes } from "hookrouter";
import routes from "./GlobalRoutes";
import {
  AppProvider as PolarisProvider,
  TextStyle,
  TopBar,
} from "@shopify/polaris";
import translations from "@shopify/polaris/locales/en.json";
import "@shopify/polaris/build/esm/styles.css";
import {
  Frame,
  Navigation,
  ActionList,
  TextContainer,
  Heading,
} from "@shopify/polaris";
import {
  HomeMinor,
  OrdersMinor,
  ProductsMinor,
  CustomersMinor,
  AnalyticsMinor,
  MarketingMinor,
  DiscountsMinor,
  AppsMinor,
  StoreMinor,
  CirclePlusMinor,
} from "@shopify/polaris-icons";

const App = () => {
  const RouteDOM = useRoutes(routes);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleSearchResultsDismiss = useCallback(() => {
    setIsSearchActive(false);
    setSearchValue("");
  }, []);

  const handleSearchChange = useCallback((value) => {
    setSearchValue(value);
    setIsSearchActive(value.length > 0);
  }, []);

  const handleNavigationToggle = useCallback(() => {
    console.log("toggle navigation visibility");
  }, []);

  const logo = {
    width: 35,
    topBarSource: "https://www.vectorlogo.zone/logos/shopify/shopify-icon.svg",
    accessibilityLabel: "Test Store",
  };

  const userMenuMarkup = (
    <TopBar.UserMenu name="Kinngh" detail="Polaris Test" initials="K" />
  );

  const searchResultsMarkup = <ActionList />;

  const searchFieldMarkup = (
    <TopBar.SearchField
      onChange={handleSearchChange}
      value={searchValue}
      placeholder="Search"
      showFocusBorder
    />
  );

  const topBarMarkup = (
    <TopBar
      showNavigationToggle
      userMenu={userMenuMarkup}
      searchResultsVisible={isSearchActive}
      searchField={searchFieldMarkup}
      searchResults={searchResultsMarkup}
      onSearchResultsDismiss={handleSearchResultsDismiss}
      onNavigationToggle={handleNavigationToggle}
    />
  );

  const AppNavigation = (
    <Navigation location="/">
      <Navigation.Section
        items={[
          {
            label: "Home",
            icon: HomeMinor,
          },
          {
            label: "Orders",
            icon: OrdersMinor,
            badge: "10",
          },
          {
            label: "Products",
            icon: ProductsMinor,
          },
          {
            label: "Customers",
            icon: CustomersMinor,
          },
          {
            label: "Analytics",
            icon: AnalyticsMinor,
          },
          {
            label: "Marketing",
            icon: MarketingMinor,
          },
          {
            label: "Discounts",
            icon: DiscountsMinor,
          },
          {
            url: "/",
            label: "Apps",
            icon: AppsMinor,
          },
        ]}
      />
      <Navigation.Section
        separator
        title="Sales channels"
        items={[
          {
            label: "Online Store",
            icon: StoreMinor,
          },
        ]}
        action={{
          icon: CirclePlusMinor,
          accessibilityLabel: "Add",
          onClick: () => {},
        }}
      />
    </Navigation>
  );

  const AppData = () => {
    return (
      <div style={{ borderBottom: "1px solid #C9CCCF" }}>
        <img
          src="/src/assets/shopify-icon.svg"
          width="4%"
          style={{
            padding: "10px",
            display: "inline-block",
            verticalAlign: "middle",
            textAlign: "center",
          }}
        />
        <h1
          style={{
            display: "inline-block",
            verticalAlign: "middle",
            textAlign: "center",
          }}
        >
          Polaris Playground
        </h1>
        <p
          style={{
            display: "inline-block",
            verticalAlign: "middle",
            textAlign: "center",
            float: "right",
            paddingRight: "10px",
            paddingTop: "15px",
            color: "#6d7175",
          }}
        >
          by Company Name
        </p>
      </div>
    );
  };
  return (
    <PolarisProvider i18n={translations}>
      <Frame navigation={AppNavigation} topBar={topBarMarkup} logo={logo}>
        <AppData />

        {RouteDOM}
      </Frame>
    </PolarisProvider>
  );
};
export default App;
