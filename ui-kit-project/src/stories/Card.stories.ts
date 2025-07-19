import type { Meta, StoryObj } from '@storybook/vue3';
import Card from '../components/Card.vue';
import Button from '../components/Button.vue'; // если у тебя есть кнопка

const meta: Meta<typeof Card> = {
  title: 'UI/Card',
  component: Card,
  argTypes: {
    outlined: { control: 'boolean' },
  },
};
export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: (args) => ({
    components: { Card },
    setup: () => ({ args }),
    template: `
      <Card v-bind="args">
        <template #title>Заголовок карточки</template>
        <p>Контент внутри карточки. Например, форма или текст.</p>
      </Card>
    `,
  }),
  args: {
    outlined: false,
  },
};

export const WithActions: Story = {
  render: (args) => ({
    components: { Card, Button },
    setup: () => ({ args }),
    template: `
      <Card v-bind="args">
        <template #title>Слот Title</template>
        <p>Контент с кнопками действий.</p>
        <template #actions>
          <Button>Отмена</Button>
          <Button>Сохранить</Button>
        </template>
      </Card>
    `,
  }),
  args: {
    outlined: false,
  },
};

export const Outlined: Story = {
  ...Default,
  args: {
    outlined: true,
  },
};
