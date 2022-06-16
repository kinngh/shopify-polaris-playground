import React from "react";
import { Page, Card, DataTable, Link } from "@shopify/polaris";
import { navigate } from "raviger";

const Index = () => {
  const rows = [
    [
      <Link
        removeUnderline
        url="https://polaris.shopify.com"
        key="shopify-polaris"
      >
        Shopify Polaris
      </Link>,
      "Shopify",
      "https://polaris.shopify.com",
    ],
    [
      <Link
        removeUnderline
        url="https://github.com/kinngh/shopify-node-express-mongodb-app"
        key="express-react"
      >
        Express x React
      </Link>,
      "Harshdeep Singh Hura",
      "https://github.com/kinngh/shopify-node-express-mongodb-app",
    ],
  ];
  return (
    <Page>
      <Card
        sectioned
        title="Polaris Test Interface"
        primaryFooterAction={{
          content: "Repository",
          onAction: () => {
            window.open(
              "https://github.com/kinngh/shopify-node-express-mongodb-app",
              "_blank"
            );
          },
        }}
        secondaryFooterActions={[
          {
            content: "Page 2",
            onAction: () => {
              navigate("/page2");
            },
          },
        ]}
      >
        <p>
          The primary idea here is to build out components and complete User
          Interfaces with HMR so it's much easier to design interfaces without
          having to go through OAuth or being online, which is why this repo was
          created.
        </p>
      </Card>
      <Card>
        <DataTable
          rows={rows}
          columnContentTypes={["text", "text", "text"]}
          headings={["Name", "Provider", "URL"]}
        />
      </Card>
    </Page>
  );
};

export default Index;
