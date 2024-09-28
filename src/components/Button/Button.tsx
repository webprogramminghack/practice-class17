import styles from './Button.module.scss';
import React from 'react';
import clsx from 'clsx';

type ButtonProps = {
  size: 'small' | 'medium' | 'large';
  type: 'primary' | 'secondary';
  children: React.ReactNode;
};

export const Button: React.FC<ButtonProps> = ({ size, type, children }) => {
  return (
    <button className={clsx(styles.button, styles[size], styles[type])}>
      {children}
    </button>
  );
};
