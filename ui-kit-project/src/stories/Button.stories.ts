import Button from '../components/Button.vue';

export default {
  title: 'UI/Button',
  component: Button,
};

export const Default = () => ({
  components: { Button },
  template: `<Button @click="alert('Клик!')">Войти</Button>`,
});

export const Disabled = () => ({
  components: { Button },
  template: `<Button disabled>Войти</Button>`,
});
