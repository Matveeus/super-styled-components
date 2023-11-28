import React from 'react';
import styles from './Select.module.css';

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

export const Select: React.FC<SelectProps> = ({label, options, value, onChange, disabled = false, error = false, helperText = '', size = 'medium', fullWidth = false, id
                                       }) => {
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(event.target.value);
    };

    return (
        <div className={styles['select-container']}>
            <label htmlFor={id} className={styles['select-label']}>{label}</label>
            <select
                id={id}
                className={`${styles.select} ${styles[size]} ${error ? styles.error : ''} ${fullWidth ? styles.fullWidth : ''}`}
                value={value}
                onChange={handleChange}
                disabled={disabled}
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            {error && <p className={styles['helper-text']}>{helperText}</p>}
        </div>
    );
};