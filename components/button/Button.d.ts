import { FunctionComponent, ReactNode } from 'react';

export interface ButtonProps {
    children?: ReactNode;
    className?: string;
    onClick?: () => void;
    color?: 'primary' | 'secondary';
    variant?: 'contained' | 'outlined';
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
    fullWidth?: boolean;
}

export const Button: FunctionComponent<ButtonProps>;
