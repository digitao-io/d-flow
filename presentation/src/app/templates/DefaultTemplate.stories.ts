import type { Meta, StoryObj } from "@storybook/vue3";
import DefaultTemplate, { DefaultTemplateConfig } from "./DefaultTemplate.vue";

const meta: Meta<DefaultTemplateConfig> = {
  title: "Templates/DefaultTemplate",
  component: DefaultTemplate,
  render: (args) => ({
    components: { DefaultTemplate },
    setup() {
      return {
        config: args,
      };
    },
    template: `
      <div>
        <default-template
          :config="config"
        >
          <template #main>
            <p>This is some random content.</p>
          </template>
        </default-template>
      </div>
    `,
  }),
};

export default meta;

type Story = StoryObj<DefaultTemplateConfig>;

export const Default: Story = {
  args: {
    title: "Hello World!",
  },
};
