import {
  BlockStack,
  Button,
  Card,
  InlineStack,
  Layout,
  Page,
  Text,
} from "@shopify/polaris";
import isInitialLoad from "@/utils/middleware/isInitialLoad";

//On first install, check if the store is installed and redirect accordingly
export async function getServerSideProps(context) {
  return await isInitialLoad(context);
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
