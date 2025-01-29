import {
  ActionList,
  Badge,
  Box,
  Divider,
  Frame,
  Icon,
  InlineStack,
  Navigation,
  AppProvider as PolarisProvider,
  Text,
  TopBar,
} from "@shopify/polaris";
import {
  AppsFilledIcon,
  BankFilledIcon,
  ChartVerticalFilledIcon,
  ChevronRightIcon,
  ContentFilledIcon,
  DiscountFilledIcon,
  HomeFilledIcon,
  MenuHorizontalIcon,
  NotificationIcon,
  OrderFilledIcon,
  PersonFilledIcon,
  PinFilledIcon,
  ProductFilledIcon,
  StoreFilledIcon,
  TargetFilledIcon,
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
    width: 20,
    topBarSource:
      "https://cdn.shopify.com/shopifycloud/web/assets/v1/vite/client/en/assets/shopify-glyph-white-DZNyE9BvHIk-.svg",
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
            label: <Text>Home</Text>,
            icon: HomeFilledIcon,
          },
          {
            label: <Text>Orders</Text>,
            icon: OrderFilledIcon,
            badge: <Badge>8</Badge>,
          },
          {
            label: <Text>Products</Text>,
            icon: ProductFilledIcon,
          },
          {
            label: <Text>Customers</Text>,
            icon: PersonFilledIcon,
          },
          {
            label: <Text>Content</Text>,
            icon: ContentFilledIcon,
          },
          {
            label: <Text>Finances</Text>,
            icon: BankFilledIcon,
          },
          {
            label: <Text>Analytics</Text>,
            icon: ChartVerticalFilledIcon,
          },
          {
            label: <Text>Marketing</Text>,
            icon: TargetFilledIcon,
          },
          {
            label: <Text>Discounts</Text>,
            icon: DiscountFilledIcon,
          },
        ]}
      />
      <Navigation.Section
        title={<Text fontWeight="bold">Sales Channels</Text>}
        items={[
          {
            label: <Text>Online Store</Text>,
            icon: StoreFilledIcon,
          },
        ]}
        action={{
          icon: ChevronRightIcon,
          accessibilityLabel: "Add",
          onClick: () => {},
        }}
      />
      <Navigation.Section
        title={<Text fontWeight="bold">Apps</Text>}
        items={[
          {
            label: <Text>Playground</Text>,
            icon: AppsFilledIcon,
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
          <div>
            <Box paddingBlock="300">
              <InlineStack align="space-between" blockAlign="center" gap="100">
                <InlineStack align="start" blockAlign="center" gap="100">
                  <div>
                    <Icon source={AppsFilledIcon} tone="magic" />
                  </div>
                  <Text variant="bodyLg">Playground</Text>
                </InlineStack>
                <InlineStack align="end" blockAlign="center" gap="100">
                  <div>
                    <Icon source={PinFilledIcon} />
                  </div>
                  <div>
                    <Icon source={MenuHorizontalIcon} />
                  </div>
                </InlineStack>
              </InlineStack>
            </Box>
          </div>
          <Divider />
          <Component {...pageProps} />
        </Frame>
      </PolarisProvider>
    </>
  );
}
