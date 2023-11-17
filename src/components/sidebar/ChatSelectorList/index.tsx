import { chats } from '../../../mocks/chats';
import ChatSelector from '../ChatSelector';
import './styles.css';

const ChatSelectorList = () => {
  return (
    <div className='ChatSelectorList'>
      {chats.map((chat) => (
        <ChatSelector
          key={chat.id}
          avatar={chat.avatar}
          name={chat.name}
          color={chat.color}
          lastMessage={chat.messages[chat.messages.length - 1]?.text || 'Comienza una conversación'}
          lastMessageTime={chat.lastMessageTime}
          unreadMessages={chat.messages?.filter((message) => !message.isRead).length || 0}
        />
      ))}
    </div>
  );
}

export default ChatSelectorList;