import cx from 'classnames';
import { useState } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Header from '../../components/header/Header';
import Aside from '../../components/aside/Aside';
import ChatContainer from '../../components/chat/ChatContainer';
import './styles.css';

const Home = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showAside, setShowAside] = useState(false);

  const homeClassess = cx({
    'Home': true,
    'Home--showSidebar': showSidebar,
    'Home--showAside': showAside,
  });

  return (
    <div className={homeClassess}>
      <Header />
      <Sidebar />
      <ChatContainer
        isActive={showSidebar || showAside}
        onSearch={() => setShowSidebar(prevState => !prevState)}
        onDots={() => setShowAside(prevState => !prevState)}
        onDesactive={() => {
          setShowSidebar(false);
          setShowAside(false);
        }}
      />
      <Aside />
    </div>
  );
};

export default Home;
