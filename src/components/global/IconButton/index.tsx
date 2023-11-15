import cx from 'classnames';
import Button from '../Button';
import './styles.css';

interface IconButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  type?: 'button' | 'submit' | 'reset';
  color?: 'primary' | 'secondary' | 'tertiary' | 'accent' | 'danger' | 'success' | 'warning' | 'text' | string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | string;
  disabled?: boolean;
}

const IconButton = ({
  children,
  className,
  size = 'md',
  color = 'primary',
  ...props
}: IconButtonProps) => {

  const classes = cx({
    'icon-button': true,
    [`icon-button-${size}`]: size,
    [`icon-button-${color}`]: color,
    [`${className}`]: className,
  });

  return (
    <Button
      className={classes}
      size={size}
      color={color}
      variant='text'
      {...props}
    >
      {children}
    </Button>
  );
}

export default IconButton;