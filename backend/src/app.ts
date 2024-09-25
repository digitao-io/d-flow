import { App, Configuration, Context } from "d-flow-backend";
import { exampleSayHello } from "./endpoints/example/say-hello";

export async function createApp() {
  const app = new App<Context<Configuration>, Configuration>();

  await app.initialize({ configPath: process.env["CONFIG_PATH"] ?? "" });

  app.register(exampleSayHello);

  return app;
}
