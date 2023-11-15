import cx from 'classnames';
import './styles.css';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  type?: 'button' | 'submit' | 'reset';
  variant?: 'outlined' | 'contained' | 'text';
  color?: 'primary' | 'secondary' | 'tertiary' | 'accent' | 'danger' | 'success' | 'warning' | 'text' | string;
  iconStart?: React.ReactNode;
  iconEnd?: React.ReactNode;
  iconColor?: 'primary' | 'secondary' | 'tertiary' | 'accent' | 'danger' | 'success' | 'warning' | 'text' | string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | string;
  iconSize?: 'sm' | 'md' | 'lg' | 'xl' | string;
  disabled?: boolean;
}

const Button = ({
  children,
  type = 'button',
  variant = 'contained',
  color = 'primary',
  iconStart,
  iconEnd,
  className,
  iconColor = 'text',
  size = 'md',
  iconSize = 'md',
  disabled = false,
  ...props
}: ButtonProps) => {

  const classes = cx({
    'btn': true,
    [`btn-${color}`]: color,
    [`btn-${variant}`]: variant,
    [`btn-${size}`]: size,
    [`${className}`]: className,
  });

  const iconClasses = cx({
    'btn-icon': true,
    [`btn-icon-${iconColor}`]: iconColor,
    [`btn-icon-${iconSize}`]: iconSize,
  });

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      {...props}
    >
      {iconStart && <span className={iconClasses}>{iconStart}</span>}
      {children}
      {iconEnd && <span className={iconClasses}>{iconEnd}</span>}
    </button>
  );
}

export default Button;