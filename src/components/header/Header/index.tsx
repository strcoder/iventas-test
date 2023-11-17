import AppNavigation from '../AppNavigation';
import UserNavigation from '../UserNavigation';
import './styles.css';

const Header = () => {
  return (
    <header className='Header'>
      <AppNavigation />
      <UserNavigation />
    </header>
  );
}

export default Header;