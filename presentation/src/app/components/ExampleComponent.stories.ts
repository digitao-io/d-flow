import type { Meta, StoryObj } from "@storybook/vue3";
import ExampleComponent, { ExampleComponentConfig } from "./ExampleComponent.vue";

const meta: Meta<ExampleComponentConfig> = {
  title: "Components/ExampleComponent",
  component: ExampleComponent,
  render: (args) => ({
    components: { ExampleComponent },
    setup() {
      return {
        config: args,
      };
    },
    template: `
      <div>
        <example-component
          :config="config"
        />
      </div>
    `,
  }),
};

export default meta;

type Story = StoryObj<ExampleComponentConfig>;

export const Default: Story = {
  args: {
    name: "world",
  },
};
