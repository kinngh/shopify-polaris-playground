import isInitialLoad from "@/utils/middleware/isInitialLoad";

export async function getServerSideProps(context) {
  //On first install, check if the store is installed and redirect accordingly
  return await isInitialLoad(context);
}

const Index = () => {
  return (
    <>
      <s-page>
        {/* Rendering this requires App Bridge, which won't work in this environment */}
        {/* <ui-title-bar title="Home">
          <button variant="breadcrumb" href="/">
            Home
          </button>
          <button>Button</button>
          <button tone="critical">Delete</button>
        </ui-title-bar> */}
        {/* END */}

        <s-banner>
          <s-paragraph>
            The actual <code>&lt;ui-title-bar /&gt;</code> won't render in this
            environment because AppBridge needs to load correctly for it to
            work. Check comments for the implementation of{" "}
            <code>&lt;Page&gt;</code>/'s <code>primaryActions</code> and{" "}
            <code>secondaryActions</code> methods.
          </s-paragraph>
        </s-banner>

        <s-section>
          <s-stack gap="large-100" direction="block">
            <s-heading>
              Polaris Playground - Now with Polaris Web Components!
            </s-heading>
            <s-stack gap="base">
              <s-paragraph>
                I created this quick playground so designers who can code can
                quickly create UIs that can be directly used by developers to
                build Shopify apps.
              </s-paragraph>
              <s-paragraph>
                I personally use this to quickly mock apps before I whip up one
                of the boilerplates and invest the time to start writing code.
                Also, this is great to build on the go when internet access is
                limited.
              </s-paragraph>
              <s-stack alignItems="end">
                <s-button
                  variant="primary"
                  icon="external"
                  onClick={() => {
                    window?.open(
                      "https://github.com/kinngh/shopify-polaris-playground",
                      "_blank"
                    );
                  }}
                >
                  Repository
                </s-button>
              </s-stack>
            </s-stack>
          </s-stack>
        </s-section>
      </s-page>
    </>
  );
};

export default Index;
