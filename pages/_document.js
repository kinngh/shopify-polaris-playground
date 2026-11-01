import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/shopify-glyph.svg" type="image/svg+xml" />
        <script src="https://cdn.shopify.com/shopifycloud/polaris-2.js"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
