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
