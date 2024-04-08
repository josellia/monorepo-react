'use client';
import React from 'react';
import {classMapStyles} from '../utils/module.utils';
import {ButtonProps} from './button.props';
import  './button.scss';

export const Button = ({ label, onclick, className, type, children, isDisabled, variant, size }: ButtonProps) => {
	  const styleClasses = {
		'basic--primary': variant === 'primary',
		'basic--info': variant === 'info',
		'basic--small': size === 'small',
		'basic--medium': size === 'medium',
		'basic--large': size === 'large'
	}
	const styleClass  = classMapStyles(styleClasses);

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
