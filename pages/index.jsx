import Head from "next/head";
import isInitialLoad from "@/utils/middleware/isInitialLoad";

export async function getServerSideProps(context) {
  //On first install, check if the store is installed and redirect accordingly
  return await isInitialLoad(context);
}

export default function Index() {
  return (
    <>
      <Head>
        <title>Polaris Playground</title>
        <meta
          name="description"
          content="Build Shopify app interfaces in a standalone admin-style playground."
        />
      </Head>
      {/* Replace this page's content with your UI. The admin shell lives in _app.js. */}
      <s-page heading="Polaris Playground">
        <s-button
          slot="secondary-actions"
          href="https://shopify.dev/docs/api/app-home/polaris-web-components"
          target="_blank"
          icon="external"
        >
          Documentation
        </s-button>
        <s-button
          slot="primary-action"
          variant="primary"
          href="https://github.com/kinngh/shopify-polaris-playground"
          target="_blank"
          icon="external"
        >
          Repository
        </s-button>
        <s-section heading="Build your app UI">
          <s-stack gap="base">
            <s-paragraph>
              A space to build and try out Shopify app interfaces with Polaris
              web components, right inside a familiar admin layout.
            </s-paragraph>
            <s-paragraph>
              Start with your own page content, explore an idea, and see how it
              feels before bringing it into your app.
            </s-paragraph>
          </s-stack>
        </s-section>
      </s-page>
    </>
  );
}
