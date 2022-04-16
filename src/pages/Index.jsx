import React from "react";
import { Page, Card, DataTable, Link } from "@shopify/polaris";
import { navigate } from "hookrouter";

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
        url="https://github.com/kinngh/shopify-express-mongodb-app"
        key="express-react"
      >
        Express x React
      </Link>,
      "Harshdeep Singh Hura",
      "https://github.com/kinngh/shopify-express-mongodb-app",
    ],
    [
      <Link
        removeUnderline
        url="https://github.com/kinngh/shopify-node-mongodb-next-app"
        key="koa-nextjs"
      >
        Koa x Next
      </Link>,
      "Harshdeep Singh Hura",
      "https://github.com/kinngh/shopify-node-mongodb-next-app",
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
            window.open("https://google.com", "_blank");
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
