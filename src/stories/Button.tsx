import React from 'react';
import './button.css';
import 'antd/dist/antd.css';
import {Button} from 'antd'

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  color?: string,
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const ButtonComp: React.FC<ButtonProps> = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  color,
  label,
  ...props
}) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={{ backgroundColor, color }}
      {...props}
    >
      {label}
    </button>
  );
};

export const RectButton: React.FC<ButtonProps> = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}) => {
  return (
    <Button
      type="primary"
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </Button>
  );
};
