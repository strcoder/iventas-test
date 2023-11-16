import cx from 'classnames';
import { AiOutlineClose } from 'react-icons/ai';
import Button from '../Button';
import IconButton from '../IconButton';
import './styles.css';

interface ChipProps {
  label: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  onDelete?: () => void;
  variant?: 'outlined' | 'contained';
  color?: 'primary' | 'secondary' | 'tertiary' | 'accent' | 'danger' | 'success' | 'warning' | 'text' | string;
}

const Chip = ({
  label,
  icon,
  onClick,
  onDelete,
  variant = 'outlined',
  color = 'primary',
}: ChipProps) => {

  const classes = cx({
    'chip': true,
    [`chip-${variant}`]: variant,
    [`chip-${color}`]: color,
  });

  if (onClick) {
    return (
      <Button
        className={classes}
        onClick={onClick}
        variant={variant}
        color={color}
      >
        {icon && <span className='chip-icon'>{icon}</span>}
        <span>{label}</span>
        {onDelete && (
          <IconButton
            onClick={onDelete}
            className='chip-delete'
          >
            <AiOutlineClose />
          </IconButton>
        )}
      </Button>
    );
  }

  return (
    <div className={classes}>
      {icon && <span className='chip-icon'>{icon}</span>}
      <span>{label}</span>
      {onDelete && (
        <IconButton
          onClick={onDelete}
          className='chip-delete'
          size='sm'
          color='grey'
        >
          <AiOutlineClose />
        </IconButton>
      )}
    </div>
  );
}

export default Chip;