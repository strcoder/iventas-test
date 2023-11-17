import { useState } from 'react';
import { MdOutlineAddReaction } from 'react-icons/md';
import Button from '../../global/Button';
import { userNavLinks } from '../../../mocks/userNavLinks';
import './styles.css';

const UserNavigation = () => {
  const [active, setActive] = useState(0);

  return (
    <nav className='UserNavigation'>
      <ul className='UserNavigation__list'>
        {userNavLinks.map((link, index) => (
          <li key={index} className='UserNavigation__list-item'>
            <Button
              iconStart={<MdOutlineAddReaction />}
              iconPosition='top'
              variant='text'
              color={index === userNavLinks.length - 1 ? 'danger' : 'text'}
              iconSize='lg'
              onClick={() => setActive(index)}
            >
              {link.title}
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default UserNavigation;