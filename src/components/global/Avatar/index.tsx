import { useState } from 'react';
import cx from 'classnames';
import './styles.css';

type AvatarProps = {
  src?: string;
  alt?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | string;
  variant?: 'circle' | 'rounded' | 'square';
  name?: string;
  color?: 'primary' | 'secondary' | 'tertiary' | 'accent' | 'danger' | 'success' | 'warning' | 'text' | string;
};

const Avatar = ({
  src,
  alt,
  className,
  color = 'tertiary',
  size = 'md',
  variant = 'square',
  name,
}: AvatarProps) => {
  const [imgError, setImgError] = useState(false);
  const initials = name?.split(' ').map((n) => n[0]).join('');

  const classes = cx({
    'avatar': true,
    [`avatar-${size}`]: size,
    [`avatar-${color}`]: color,
    [`avatar-${variant}`]: variant,
    [`${className}`]: className,
  });

  return (
    <div className={classes}>
      {src && !imgError && (
        <figure>
          <img
            src={src}
            alt={alt}
            onError={() => setImgError(true)}
            className='avatar-img'
          />
        </figure>
      )}
      {(!initials && (!src || imgError)) && (
        <figure className='avatar-placeholder'>
          <span className='avatar-eyes' />
          <span className='avatar-mouth' />
        </figure>
      )}
      {initials && (!src || imgError) && (
        <figure className='avatar-placeholder'>
          <span className='avatar-initials'>{initials}</span>
        </figure>
      )}
    </div>
  );
}

export default Avatar;