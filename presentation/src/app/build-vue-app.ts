import { createSSRApp } from "vue";
import App from "./App.vue";
import DefaultTemplate from "./templates/DefaultTemplate.vue";
import ExampleComponent from "./components/ExampleComponent.vue";

export function buildVueApp() {
  const app = createSSRApp(App)
    .component("default-template", DefaultTemplate)
    .component("example-component", ExampleComponent);
  return app;
}
