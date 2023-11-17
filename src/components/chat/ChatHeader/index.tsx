import { useEffect, useState } from 'react';
import cx from 'classnames';
import Avatar from '../../global/Avatar';
import Button from '../../global/Button';
import './styles.css'

const ChatHeader = () => {
  const [showUserTyping, setShowUserTyping] = useState(false);

  const chatHeaderTypingClass = cx({
    'ChatHeader__info--typing': true,
    'ChatHeader__info--typingActive': showUserTyping,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setShowUserTyping(prevState => !prevState);
    }, 3000);

    return () => {
      clearInterval(interval);
    }
  }, []);

  return (
    <div className='ChatHeader'>
      <div className='ChatHeader__avatar'>
        <Avatar
          src='https://avatars.githubusercontent.com/u/57289153?v=4'
          alt='Avatar'
          size='md'
        />
      </div>
      <div className='ChatHeader__info'>
        <p className='ChatHeader__info--name'>Adrian Ocerguera</p>
        <div className={chatHeaderTypingClass}>
          <div className='dot'></div>
          <div className='dot'></div>
          <div className='dot'></div>
        </div>
      </div>
      <div className='ChatHeader__buttons'>
        <Button variant='outlined' color='primary' size='lg'>
          Finalizar chat
        </Button>
      </div>
    </div>
  );
}

export default ChatHeader;