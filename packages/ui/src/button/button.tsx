'use client';
import React, { JSX, useEffect  } from 'react';
import  './button.scss';

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

export const Button = ({ label, onclick, className, type, children, isDisabled, variant }: ButtonProps) => {
	function classNamesMap(classes: Object):string {
		return Object.entries(classes)
		.filter(([key, value]) => value)
		.map(([key, value]) => key)
		.join(' ');
	  }

	  const styleClasses = {
		'basic--primary': variant === 'primary',
		'basic--info': variant === 'info',
	}
	const styleClass  = classNamesMap(styleClasses);


	return (
		<button
			className={`basic ${styleClass} ${className}`}
			aria-label={label}
			type={type}
			disabled={isDisabled}
			onClick={onclick}
			>
            {children}
		</button>
	);
};
