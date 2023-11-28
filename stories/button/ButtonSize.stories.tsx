import React from 'react';
import Button from '../../components/button/Button';

export default {
    title: 'Components/Button/Sizes',
    component: Button,
};

export const Small = () => <Button size="small">Small Button</Button>;
export const Medium = () => <Button size="medium">Medium Button</Button>;
export const Large = () => <Button size="large">Large Button</Button>;