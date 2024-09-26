import type { Preview } from "@storybook/vue3";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(window as any).context = {};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
