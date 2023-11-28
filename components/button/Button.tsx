import React from 'react';
import styles from './Button.module.css';

type ButtonProps = {
    children?: React.ReactNode;
    className?: string;
    onClick?: () => void;
    color?: 'primary' | 'secondary';
    variant?: 'contained' | 'outlined';
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
    fullWidth?: boolean;
};

export const Button: React.FC<ButtonProps> = ({ children, onClick, color = 'primary', variant = 'contained', size = 'medium', disabled = false, className = '', fullWidth = false }) => {
    return (
        <button
            disabled={disabled}
            className={`${styles.button} ${styles[size]} ${styles[color]} ${styles[variant]} ${className} ${fullWidth ? styles.fullWidth : ''}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};