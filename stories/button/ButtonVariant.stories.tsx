import React from 'react';
import Button from '../../components/button/Button';

export default {
    title: 'Components/Button/Variants',
    component: Button,
};

export const Contained = () => <Button variant="contained">Contained Button</Button>;
export const Outlined = () => <Button variant="outlined">Outlined Button</Button>;