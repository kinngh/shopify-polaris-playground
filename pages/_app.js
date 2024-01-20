import {
  ActionList,
  Frame,
  Icon,
  Navigation,
  AppProvider as PolarisProvider,
  TopBar,
} from "@shopify/polaris";
import {
  ChartVerticalIcon,
  AppsIcon,
  ChevronRightIcon,
  ContentIcon,
  PersonIcon,
  DiscountIcon,
  BankIcon,
  HomeIcon,
  TargetIcon,
  NotificationIcon,
  OrderIcon,
  ProductIcon,
  StoreIcon,
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
      <div style={{ marginLeft: "10px" }} />
      <TopBar.Menu
        activatorContent={
          <>
            <Icon source={NotificationIcon} />
          </>
        }
      ></TopBar.Menu>
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
            icon: HomeIcon,
          },
          {
            label: "Orders",
            icon: OrderIcon,
            badge: "10",
          },
          {
            label: "Products",
            icon: ProductIcon,
          },
          {
            label: "Customers",
            icon: PersonIcon,
          },
          {
            label: "Content",
            icon: ContentIcon,
          },
          {
            label: "Finances",
            icon: BankIcon,
          },
          {
            label: "Analytics",
            icon: ChartVerticalIcon,
          },
          {
            label: "Marketing",
            icon: TargetIcon,
          },
          {
            label: "Discounts",
            icon: DiscountIcon,
          },
        ]}
      />
      <Navigation.Section
        title="Sales channels"
        items={[
          {
            label: "Online Store",
            icon: StoreIcon,
          },
        ]}
        action={{
          icon: ChevronRightIcon,
          accessibilityLabel: "Add",
          onClick: () => {},
        }}
      />
      <Navigation.Section
        title="Apps"
        items={[
          {
            label: "Polaris Playground",
            icon: AppsIcon,
            selected: true,
          },
        ]}
        action={{
          icon: ChevronRightIcon,
          accessibilityLabel: "Add",
          onClick: () => {},
        }}
      />
    </Navigation>
  );
  return (
    <>
      <PolarisProvider i18n={translations}>
        <Frame navigation={AppNavigation} topBar={topBarMarkup} logo={logo}>
          <div style={{ paddingBottom: "35px" }} />
          <hr style={{ border: "0.8px solid #E1E3E5" }} />
          <Component {...pageProps} />
        </Frame>
      </PolarisProvider>
    </>
  );
}
