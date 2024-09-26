import { DataResolver } from "d-flow-ssr";
import { exampleDataResolver } from "./example-data-resolver";

export function buildDataResolver() {
  const dataResolver = new DataResolver()
    .withResolver(exampleDataResolver);
  return dataResolver;
}
