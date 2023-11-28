import React from 'react';
import Button from '../../components/button/Button';

export default {
    title: 'Components/Button/Combined',
    component: Button,
};

export const PrimarySmallContained = () =>
    <Button color="primary" size="small" variant="contained">Primary Small Contained</Button>;

export const PrimaryMediumContained = () =>
    <Button color="primary" size="medium" variant="contained">Primary Medium Contained</Button>;

export const PrimaryLargeContained = () =>
    <Button color="primary" size="large" variant="contained">Primary Large Contained</Button>;

export const SecondarySmallOutlined = () =>
    <Button color="secondary" size="small" variant="outlined">Secondary Small Outlined</Button>;

export const SecondaryMediumOutlined = () =>
    <Button color="secondary" size="medium" variant="outlined">Secondary Medium Outlined</Button>;

export const SecondaryLargeOutlined = () =>
    <Button color="secondary" size="large" variant="outlined">Secondary Large Outlined</Button>;

export const PrimarySmallOutlined = () =>
    <Button color="primary" size="small" variant="outlined">Primary Small Outlined</Button>;

export const SecondaryMediumContained = () =>
    <Button color="secondary" size="medium" variant="contained">Secondary Medium Contained</Button>;

export const PrimarySmallOutlinedDisabled = () => (
    <Button color="primary" size="small" variant="outlined" disabled>Primary Small Outlined Disabled</Button>
);

export const PrimarySmallFullwidth = () => (
    <Button color="primary" size="small" fullWidth={true}>Primary Small Fullwidth</Button>
);

