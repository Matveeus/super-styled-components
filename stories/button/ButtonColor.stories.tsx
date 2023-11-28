import React from 'react';
import Button from '../../components/button/Button';

export default {
    title: 'Components/Button/Colors',
    component: Button,
};

export const Primary = () => <Button color="primary">Primary Button</Button>;
export const Secondary = () => <Button color="secondary">Secondary Button</Button>;