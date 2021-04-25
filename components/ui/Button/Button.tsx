import React, { DetailedHTMLProps, FC, ReactNode } from 'react';
export interface ButtonProps
    extends DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children?: ReactNode;
}
const Button: FC<ButtonProps> = ({ children, ...otherProps }) => {
    return <button {...otherProps}>{children}</button>;
};

export default Button;
