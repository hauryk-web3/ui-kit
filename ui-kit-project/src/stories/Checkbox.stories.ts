import { ref } from 'vue';
import type { Meta, StoryObj } from '@storybook/vue3';
import Checkbox from '../components/CheckBox.vue';

const meta: Meta<typeof Checkbox> = {
  title: 'UI/Checkbox',
  component: Checkbox,
  argTypes: {
    modelValue: { control: 'boolean', name: 'checked' },
    label: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};
export default meta;

type Story = StoryObj<typeof Checkbox>;

/** Базовый чекбокс с управлением через v-model */
export const Default: Story = {
  render: (args) => ({
    components: { Checkbox },
    setup() {
      const checked = ref(args.modelValue);
      return { args, checked };
    },
    template: `<Checkbox v-model="checked" v-bind="args" />`,
  }),
  args: {
    modelValue: false,
    label: 'Согласен с условиями',
    disabled: false,
  },
};

/** Уже отмеченный чекбокс */
export const Checked: Story = {
  ...Default,
  args: {
    ...Default.args,
    modelValue: true,
  },
};

/** Неактивный чекбокс */
export const Disabled: Story = {
  ...Default,
  args: {
    ...Default.args,
    disabled: true,
  },
};
