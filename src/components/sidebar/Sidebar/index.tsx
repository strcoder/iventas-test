import ChatSelectorList from '../ChatSelectorList';
import Searcher from '../Searcher';
import './styles.css';

const Sidebar = () => {
  return (
    <div className='Sidebar'>
      <Searcher />
      <ChatSelectorList />
    </div>
  );
}

export default Sidebar;