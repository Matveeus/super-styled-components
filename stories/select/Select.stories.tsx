import React from 'react';
import { Story, Meta } from '@storybook/react';

import Select, { SelectProps, Option } from '../../components/select/Select';

export default {
    title: 'Components/Select',
    component: Select,
} as Meta;

const options: Option[] = [
    { label: 'Option1', value: '1' },
    { label: 'Option2', value: '2' },
    { label: 'Option3', value: '3' },
];

const Template: Story<SelectProps> = (args) => <Select {...args} />;

export const Basic = Template.bind({});
Basic.args = {
    label: 'Choose option',
    options: options,
    onChange: (value) => console.log(value),
};

export const WithPreselectedValue = Template.bind({});
WithPreselectedValue.args = {
    label: 'Choose option',
    options: options,
    value: '2',
    onChange: (value) => console.log(value),
};

export const Disabled = Template.bind({});
Disabled.args = {
    label: 'Choose option',
    options: options,
    disabled: true,
};

export const WithError = Template.bind({});
WithError.args = {
    label: 'Choose option',
    options: options,
    error: true,
    helperText: 'Error',
};

export const FullWidth = Template.bind({});
FullWidth.args = {
    label: 'Choose option',
    options: options,
    fullWidth: true,
};

export const SmallSize = Template.bind({});
SmallSize.args = {
    label: 'Choose option',
    options: options,
    size: 'small',
};

export const LargeSize = Template.bind({});
LargeSize.args = {
    label: 'Choose option',
    options: options,
    size: 'large',
};