import {
  BlockStack,
  Button,
  Card,
  InlineStack,
  Layout,
  Page,
  Text,
} from "@shopify/polaris";
import isShopAvailable from "@/utils/middleware/isShopAvailable";

//On first install, check if the store is installed and redirect accordingly
export async function getServerSideProps(context) {
  //If you're a designer, just know that if you delete this function all hell
  // will break loose and they're gonna then have to call me
  // to tell them they're forgetting this and I'm gonna charge
  // $500 to fix it.
  return await isShopAvailable(context);
}

const Index = () => {
  return (
    <>
      <Page>
        <Layout>
          <Layout.Section>
            <Card>
              <BlockStack gap="200">
                <Text variant="headingMd">Polaris Playground</Text>
                <Text>
                  I created this quick playground so designers who can code can
                  quickly create UIs that can be directly used by developers to
                  build Shopify apps.
                </Text>
                <Text>
                  I personally use this to quickly mock apps before I whip up
                  one of the boilerplates and invest the time to start writing
                  code. Also, this is great to build on the go when internet
                  access is limited.
                </Text>
                <InlineStack align="end">
                  <Button
                    variant="primary"
                    onClick={() => {
                      window.open(
                        "https://github.com/kinngh/shopify-polaris-playground",
                        "_blank"
                      );
                    }}
                  >
                    Repository
                  </Button>
                </InlineStack>
              </BlockStack>
            </Card>
          </Layout.Section>
        </Layout>
      </Page>
    </>
  );
};

export default Index;
