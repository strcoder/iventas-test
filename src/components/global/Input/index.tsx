import cx from 'classnames';
import IconButton from '../IconButton';
import './styles.css';

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  type?: 'text' | 'password' | 'email' | 'number' | 'search' | 'tel' | 'url' | 'date' | 'datetime-local' | 'month' | 'week' | 'time' | 'file' | 'image' | 'radio' | 'checkbox' | 'color' | 'range' | 'hidden' | 'button' | 'submit' | 'reset';
  variant?: 'standard' | 'outlined' | 'filled' | 'text';
  color?: 'primary' | 'secondary' | 'tertiary' | 'accent' | 'danger' | 'success' | 'warning' | 'text' | string;
  iconStart?: React.ReactNode;
  iconEnd?: React.ReactNode;
  iconColor?: 'primary' | 'secondary' | 'tertiary' | 'accent' | 'danger' | 'success' | 'warning' | 'text' | string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | string;
  iconSize?: 'sm' | 'md' | 'lg' | 'xl' | string;
  disabled?: boolean;
  onClickIconStart?: () => void;
  onClickIconEnd?: () => void;
}

const Input = ({
  variant = 'standard',
  color = 'primary',
  iconStart,
  iconEnd,
  className,
  iconColor = 'grey',
  size = 'md',
  iconSize = 'lg',
  disabled = false,
  onClickIconStart,
  onClickIconEnd,
  ...props
}: InputProps) => {

  const classes = cx({
    'input': true,
    [`input-${color}`]: color,
    [`input-${variant}`]: variant,
    [`input-${size}`]: size,
    [`${className}`]: className,
  });

  const iconClasses = cx({
    'input-icon': true,
    [`input-icon-${iconColor}`]: iconColor,
    [`input-icon-${iconSize}`]: iconSize,
  });

  return (
    <label htmlFor='' className={classes}>
      {iconStart && (
        <>
          {onClickIconStart && (
            <IconButton
              color={iconColor}
              size={iconSize}
              onClick={onClickIconStart}
              className='input-icon-button'
            >
              {iconStart}
            </IconButton>
          )}
          {!onClickIconStart && (
            <span className={iconClasses}>{iconStart}</span>
          )}
        </>
      )}
      <input
        disabled={disabled}
        {...props}
      />
      {iconEnd && (
        <>
          {onClickIconEnd && (
            <IconButton
              color={iconColor}
              size={iconSize}
              onClick={onClickIconEnd}
              className='input-icon-button'
            >
              {iconEnd}
            </IconButton>
          )}
          {!onClickIconEnd && (
            <span className={iconClasses}>{iconEnd}</span>
          )}
        </>
      )}
    </label>
  );
}

export default Input;