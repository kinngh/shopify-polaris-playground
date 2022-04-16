# Shopify Polaris Playground

I was a little _too_ irritated with having to setup an entire embedded starter template to play with Polaris and build out my interfaces, so this is a playground repo to build out said entire interfaces and have it run locally without the need to connect to Shopify as an embedded app, resulting in faster creation of interfaces thanks to Vites HMR and other good stuff.

The repo is directly compatible with my [Express X React Starter Template](https://github.com/kinngh/shopify-express-mongodb-app). You can directly drag/drop the `src` folder with the exception of `src/App.jsx` because that doesn't have any of the app code.

The repo is setup to mimic Next.js' Pages / Components structure and the use of `hookrouter` means you'll have to setup navigation in `src/GlobalRoutes.jsx` and use the `navigate()` function to move around. An example has been added in the pages so you don't have to worry about reading documentation.

## Misc Notes

- If you're updating `src/GlobalRoutes.jsx` while `npm run build` is running, you might have to kill the script and run it again because it doesn't play well. Besides, routing doesn't change all that often so you're pretty much good to go.

Happy `npm run build`ing!
