'use client';
import React, { JSX } from 'react';
import  './button.scss';

export interface Props {
	children: JSX.Element | React.ReactElement;
	onclick: (event?: MouseEvent) => void;
	className: string;
	type: 'button' | 'submit' | 'reset';
	label: string;
}

export interface ButtonProps extends Partial<Props> {}

export const Button = ({ label, onclick, className, type, children }: ButtonProps) => {
	return (
		<button
			className={'basic'}
			aria-label={label}>
			{label}
            {children}
		</button>
	);
};
