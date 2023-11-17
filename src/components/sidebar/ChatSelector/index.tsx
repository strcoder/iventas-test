import Avatar from '../../global/Avatar';
import Button from '../../global/Button';
import './styles.css';

type ChatSelectorProps = {
  avatar?: string;
  name: string;
  lastMessage: string;
  lastMessageTime: string;
  unreadMessages?: number;
  color?: 'primary' | 'secondary' | 'tertiary' | 'accent' | 'danger' | 'success' | 'warning' | 'text' | string;
};

const ChatSelector = ({
  avatar,
  name,
  color,
  lastMessage,
  lastMessageTime,
  unreadMessages = 0,
}: ChatSelectorProps) => {
  return (
    <Button
      variant='text'
      color='text'
      className='ChatSelector'
      onClick={() => null}
    >
      <div className='ChatSelector__avatar'>
        <Avatar
          src={avatar}
          alt={name}
          color={color}
        />
      </div>
      <div className='ChatSelector__info'>
        <p className='ChatSelector__info--name'>
          {name}
        </p>
        <p className='ChatSelector__lastMessage--time'>
          {lastMessageTime}
        </p>
      </div>
      <div className='ChatSelector__lastMessage'>
        <p className='ChatSelector__lastMessage--text'>
          {lastMessage}
        </p>
        {unreadMessages > 0 && (
          <span className='ChatSelector__lastMessage--count'>
            {unreadMessages}
          </span>
        )}
      </div>
    </Button>
  );
}

export default ChatSelector;