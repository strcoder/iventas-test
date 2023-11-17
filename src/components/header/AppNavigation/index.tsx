import { useState } from 'react';
import { MdOutlineAddReaction } from 'react-icons/md';
import Button from '../../global/Button';
import { navLinks } from '../../../mocks/navLinks';
import './styles.css';

const AppNavigation = () => {
  const [active, setActive] = useState(0);

  return (
    <nav className='AppNavigation'>
      <ul className='AppNavigation__list'>
        {navLinks.map((link, index) => (
          <li key={index} className='AppNavigation__list-item'>
            <Button
              iconStart={<MdOutlineAddReaction />}
              iconPosition='top'
              variant='text'
              color={active === index ? 'primary' : 'text'}
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

export default AppNavigation;