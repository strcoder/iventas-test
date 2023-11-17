import ChatMessage from '../ChatMessage';
import Chip from '../../global/Chip';
import { messages } from '../../../mocks/messages';
import { groupMessagesByDate } from '../../../utils/groupMessagesByDate';
import './styles.css';

const ChatMessages = () => {
  const messagesByDate = groupMessagesByDate(messages);

  return (
    <div className='ChatMessages'>
      {Object.keys(messagesByDate).map((date) => (
        <div key={date} className='ChatMessages__date-wrapper'>
          {/* <p className='ChatMessages__date'>{date}</p> */}
          <Chip
            label={date}
            variant='contained'
            color='gray'
          />
          {messagesByDate[date].map((message: typeof messages[0]) => (
            <ChatMessage
              key={message.id}
              message={message.text}
              username={message.user.name}
              avatar={message.user.avatar}
              date={message.date}
              isMe={message.isMe}
              isRead={message.isRead}
              messageResponseId={message.messageResponseId}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default ChatMessages;