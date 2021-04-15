import React from 'react';
import { Story, Meta } from '@storybook/react';

import { ButtonComp, ButtonProps, RectButton } from './Button';

export default {
  title: 'Example/Button',
  component: ButtonComp,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <ButtonComp {...args} />;

const Template2: Story<ButtonProps> = (args) => <RectButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};

export const AddTask = Template2.bind({});
AddTask.args = {
  size: 'small',
  label: 'Add Task',
};
