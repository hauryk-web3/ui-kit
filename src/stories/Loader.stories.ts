import Loader from '../components/Loader.vue';

export default {
  title: 'UI/Loader',
  component: Loader,
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['sm', 'md', 'lg'],
    },
    inline: {
      control: 'boolean',
    },
  },
};

const Template = (args: any) => ({
  components: { Loader },
  setup() {
    return { args };
  },
  template: '<Loader v-bind="args" />',
});

export const Small = Template.bind({});
Small.args = { size: 'sm' };

export const Medium = Template.bind({});
Medium.args = { size: 'md' };

export const Large = Template.bind({});
Large.args = { size: 'lg' };

export const Inline = Template.bind({});
Inline.args = { size: 'md', inline: true };
