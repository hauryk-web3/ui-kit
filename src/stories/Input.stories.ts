import { ref } from 'vue';
import Input from '../components/Input.vue';

export default {
  title: 'UI/Input',
  component: Input,
};

export const Default = () => ({
  components: { Input },
  setup() {
    const value = ref('');
    return { value };
  },
  template: `<Input label="Логин" v-model="value" placeholder="Введите имя пользователя" />`,
});

export const WithError = () => ({
  components: { Input },
  setup() {
    const value = ref('');
    return { value };
  },
  template: `<Input label="Email" v-model="value" placeholder="Введите email" error="Некорректный email" />`,
});

export const WithValidation = () => ({
  components: { Input },
  setup() {
    const value = ref('');

    const rules = [
      (v: string) => !!v || 'Поле обязательно',
      (v: string) => v.length >= 4 || 'Минимум 4 символа',
    ];

    return { value, rules };
  },
  template: `
    <div style="max-width: 400px; padding: 20px">
      <Input
        label="Имя пользователя"
        v-model="value"
        :rules="rules"
        placeholder="Введите имя"
      />
    </div>
  `,
});
