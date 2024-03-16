'use client';
import React, { JSX } from 'react';
import styles  from './button.module.scss';

export interface Props {
	children: JSX.Element | React.ReactElement;
	onclick?(): (event?: MouseEvent) => void;
	className: string;
	type: 'button' | 'submit' | 'reset';
	label: string;
	isLoading: boolean;
	isDisabled: boolean;
	variant: 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'info' | 'light' | 'dark';
}

export interface ButtonProps extends Partial<Props> {}

export const Button = ({ label, onclick, className, type, children, isDisabled }: ButtonProps) => {
	
	return (
		<button
			className={`${styles.basic} ${className}`}
			aria-label={label}
			type={type}
			disabled={isDisabled}
			onClick={onclick}
			>
            {children}
		</button>
	);
};
