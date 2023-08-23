import { LegacyCard, Page, Text } from "@shopify/polaris";
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
        <LegacyCard title="Polaris 12 Beta" sectioned>
          <Text>
            This playground now uses Polaris v12 Beta, so it may differ from
            what you have on your regular <code>npm i @shopify/polaris</code>{" "}
            install. Check the version in <code>package.json</code> to get this
            on your project.
          </Text>
        </LegacyCard>
        <LegacyCard
          sectioned
          title="Polaris Playground"
          primaryFooterAction={{
            content: "Repository",
            onAction: () => {
              window.open(
                "https://github.com/kinngh/shopify-polaris-playground",
                "_blank"
              );
            },
          }}
        >
          <p>
            I created this quick playground so designers who can code can
            quickly create UIs that can be directly used by developers to build
            Shopify apps. <br />I personally use this to quickly mock apps
            before I whip up one of the boilerplates and invest the time to
            start writing code. Also, this is great to build on the go when
            internet access is limited.
          </p>
        </LegacyCard>
      </Page>
    </>
  );
};

export default Index;
