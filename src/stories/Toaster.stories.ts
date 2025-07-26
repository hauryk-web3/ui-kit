import Toaster from '../components/Toaster.vue';
import { useToast } from '../composables/userToast';

export default {
  title: 'UI/Toaster',
  component: Toaster,
};

export const Default = () => ({
  components: { Toaster },
  setup() {
    const { success, error, info } = useToast();

    setTimeout(() => {
      success('This is a success message');
      error('This is an error message');
      info('This is an info message');
    }, 1000);

    return {};
  },
  template: '<Toaster />',
});
