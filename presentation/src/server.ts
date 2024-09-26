import { SsrServer } from "d-flow-ssr";
import { buildDataResolver } from "./server/build-data-resolver";
import { buildVueApp } from "./app/build-vue-app";

(async () => {
  const server = new SsrServer();
  await server.initialize({
    configPath: process.env["CONFIG_PATH"]!,
    vueApp: buildVueApp(),
    dataResolver: buildDataResolver(),
    fetchPages: () => Promise.resolve([
      {
        key: "home",
        title: "Home",
        description: "Whatever",
        urlPattern: "/",
        details: {
          template: "default-template",
          title: { $source: ["const", "title"] },
          language: "en",
          config: {
            title: { $source: ["const", "title"] },
          },
          slots: {
            main: [
              {
                component: "example-component",
                config: {
                  name: { $source: ["const", "name"] },
                },
              },
            ],
          },
        },
      },
    ]),
  });

  server.run();
})();
