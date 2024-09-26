import { Configuration, DataResolverConfig } from "d-flow-ssr";

const constants: Record<string, string> = {
  title: "Hello world!",
  name: "world",
};

export const exampleDataResolver: DataResolverConfig<Configuration> = {
  prefix: ["const"],
  resolve: (_, sourcePath) => {
    const key = sourcePath[1];
    return constants[key];
  },
  cacheOption: {
    type: "REQUEST",
  },
};
