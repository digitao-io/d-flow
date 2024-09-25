import { createApp } from "./app";

(async () => {
  const app = await createApp();
  app.run();
})();
