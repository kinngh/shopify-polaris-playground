import React from "react";
import { Page, Card } from "@shopify/polaris";
import { navigate } from "raviger";

const Page2 = () => {
  return (
    <Page>
      <Card
        sectioned
        title="Debug"
        primaryFooterAction={{
          content: "Home",
          onClick: () => {
            navigate("/");
          },
        }}
      >
        <p>
          This is just a test page to demonstrate the use of
          <code>navigate()</code>
        </p>
      </Card>
    </Page>
  );
};

export default Page2;
