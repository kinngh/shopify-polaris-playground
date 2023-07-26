import {
  ActionList,
  Frame,
  Icon,
  Navigation,
  AppProvider as PolarisProvider,
  TopBar,
} from "@shopify/polaris";
import {
  AnalyticsMinor,
  AppsMinor,
  ChevronRightMinor,
  ContentMinor,
  CustomersMinor,
  DiscountsMinor,
  HomeMinor,
  MarketingMinor,
  NotificationMajor,
  OrdersMinor,
  ProductsMinor,
  StoreMinor,
} from "@shopify/polaris-icons";
import "@shopify/polaris/build/esm/styles.css";
import translations from "@shopify/polaris/locales/en.json";
import { useCallback, useState } from "react";

export default function App({ Component, pageProps }) {
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
    <>
      {/* It's not stupid if it works */}
      <div>
        <Icon source={NotificationMajor} color="base" />
      </div>
      <div style={{ marginLeft: "10px" }} />
      <TopBar.UserMenu name="Kinngh" detail="Playground Test" initials="K" />
    </>
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
            label: "Content",
            icon: ContentMinor,
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
        ]}
      />
      <Navigation.Section
        title="Sales channels"
        items={[
          {
            label: "Online Store",
            icon: StoreMinor,
          },
        ]}
        action={{
          icon: ChevronRightMinor,
          accessibilityLabel: "Add",
          onClick: () => {},
        }}
      />
      <Navigation.Section
        title="Apps"
        items={[
          {
            label: "Polaris Playground",
            icon: AppsMinor,
            selected: true,
          },
        ]}
        action={{
          icon: ChevronRightMinor,
          accessibilityLabel: "Add",
          onClick: () => {},
        }}
      />
    </Navigation>
  );
  return (
    <>
      <PolarisProvider
        i18n={translations}
        features={{
          // polarisSummerEditions2023: true,
        }}
      >
        <Frame navigation={AppNavigation} topBar={topBarMarkup} logo={logo}>
          <div style={{ paddingBottom: "35px" }} />
          <hr style={{ border: "0.8px solid #E1E3E5" }} />
          <Component {...pageProps} />
        </Frame>
      </PolarisProvider>
    </>
  );
}
