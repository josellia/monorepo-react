"use client";
import React from "react";
import "./button.scss";


export interface Props {
    children: JSX.Element | React.ReactElement,
    onclick: (event?: MouseEvent) => void,
    className: string ,
    type: 'button' | 'submit' | 'reset',
    label: string
}

export interface ButtonProps extends Partial <Props>{};

export const Button = ({ label, onclick, className, type }: ButtonProps) => {
  
    return (
        <button aria-label={label}>{label}</button>
    )
};