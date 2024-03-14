'use client';
import React, { JSX } from 'react';
import styles  from './button.module.scss';

export interface Props {
	children: JSX.Element | React.ReactElement;
	onclick?(): (event?: MouseEvent) => void;
	className: string;
	type: 'button' | 'submit' | 'reset';
	label: string;
}

export interface ButtonProps extends Partial<Props> {}

export const Button = ({ label, onclick, className, type, children }: ButtonProps) => {
	return (
		<button
			className={`${styles.basic} ${className || 'primary'}`}
			aria-label={label}
			type={type}
			onClick={onclick}
			>
            {children}
		</button>
	);
};
