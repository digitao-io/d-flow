import { Configuration, Context, WrappedHandler } from "d-flow-backend";

export const exampleSayHello: WrappedHandler<
  Context<Configuration>,
  Configuration,
  undefined,
  undefined,
  string
> = {
  namespace: "app",
  entity: "example",
  operation: "say-hello",

  handle: async () => {
    return { data: "Hello world" };
  },
};
