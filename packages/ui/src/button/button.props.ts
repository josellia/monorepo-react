import React, { JSX } from 'react';

export interface Props {
	children: JSX.Element | React.ReactElement;
	onclick?(): (event?: MouseEvent) => void;
	className: string;
	type: 'button' | 'submit' | 'reset';
	label: string;
	isLoading: boolean;
	isDisabled: boolean;
	variant: 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'info' | 'light' | 'dark';
	size: 'small' | 'medium' | 'large';
}

export interface ButtonProps extends Partial<Props> {}