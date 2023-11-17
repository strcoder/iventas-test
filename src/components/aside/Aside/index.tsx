import AsideExtraInfo from '../AsideExtraInfo';
import UserChatInfo from '../UserChatInfo';
import './styles.css';

const Aside = () => {
  return (
    <aside className='Aside'>
      <UserChatInfo />
      <AsideExtraInfo />
    </aside>
  );
}

export default Aside;