import cx from 'classnames';
import React from 'react';
import './styles.css';

type ButtonGroupProps = {
  children: React.ReactNode;
  variant?: 'outlined' | 'contained' | 'text';
  color?: 'primary' | 'secondary' | 'tertiary' | 'accent' | 'danger' | 'success' | 'warning' | 'text' | string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | string;
  disabled?: boolean;
  className?: string;
  currentActive?: number;
};

const ButtonGroup = ({
  children,
  variant = 'contained',
  color = 'primary',
  size = 'md',
  disabled = false,
  className,
  currentActive,
}: ButtonGroupProps) => {

  const classes = cx({
    'btn-group': true,
    [`btn-group-${variant}`]: variant,
    [`btn-group-${color}`]: color,
    [`btn-group-${size}`]: size,
    [`${className}`]: className,
  });

  const childrenWithProps = React.Children.map(children, (child, index) => {
    if (React.isValidElement(child)) {
      if (typeof currentActive === 'number' && currentActive === index) {
        return React.cloneElement(child as React.ReactElement<any>, {
          variant: variant !== 'text' ? 'contained' : variant,
          color,
          size,
          disabled,
        });
      } else if (typeof currentActive === 'number' && currentActive !== index) {
        return React.cloneElement(child as React.ReactElement<any>, {
          variant: variant !== 'text' ? 'outlined' : variant,
          color: variant === 'text' ? 'grey' : color,
          size,
          disabled,
        });
      }
      return React.cloneElement(child as React.ReactElement<any>, {
        variant,
        color,
        size,
        disabled,
      });
    }
    return child;
  });

  return (
    <div className={classes}>
      {childrenWithProps}
    </div>
  );
}

export default ButtonGroup;