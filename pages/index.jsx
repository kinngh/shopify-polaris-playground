import { LegacyCard, Page } from "@shopify/polaris";

const Index = () => {
  return (
    <Page>
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
          I created this quick playground so designers who can code can quickly
          create UIs that can be directly used by developers to build Shopify
          apps. <br />I personally use this to quickly mock apps before I whip
          up one of the boilerplates and invest the time to start writing code.
          Also, this is great to build on the go when internet access is
          limited.
        </p>
      </LegacyCard>
    </Page>
  );
};

export default Index;
