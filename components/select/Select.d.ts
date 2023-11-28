import React from 'react';

export type Option = {
    label: string;
    value: string | number;
};

export type SelectProps = {
    label: string;
    options: Option[];
    onChange: (value: string | number) => void;
    value?: string | number;
    disabled?: boolean;
    error?: boolean;
    helperText?: string;
    size?: 'small' | 'medium' | 'large';
    fullWidth?: boolean;
    id?: string;
};

export const Select: React.FC<SelectProps>;
