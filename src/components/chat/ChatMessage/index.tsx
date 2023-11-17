import cx from 'classnames';
import Avatar from '../../global/Avatar';
import Button from '../../global/Button';
import { marked } from 'marked';
import { messages } from '../../../mocks/messages';
import './styles.css'

type ChatMessageProps = {
  message: string;
  username: string;
  avatar: string;
  date: string;
  isMe: boolean;
  isRead: boolean;
  messageResponseId?: number | null;
}

const ChatMessage = ({
  message,
  username,
  avatar,
  isMe,
  isRead,
  messageResponseId,
}: ChatMessageProps) => {
  const markdownText = marked.parse(message);
  const responseMessage = messages.find((message) => message.id === messageResponseId);

  const chatMessageClass = cx({
    'ChatMessage': true,
    'ChatMessage--me': isMe,
    'ChatMessage--read': isRead,
    'ChatMessage--response': responseMessage,
  });

  return (
    <div className={chatMessageClass}>
      <Button
        variant='contained'
        color={isMe ? 'accent' : 'soft'}
        className='ChatMessage__button'
      >
        {responseMessage && (
          <div className='ChatMessage__response'>
            <p className='ChatMessage__response--username'>Tú</p>
            <p className='ChatMessage__response--message'>{responseMessage.text}</p>
          </div>
        )}
        <p dangerouslySetInnerHTML={{ __html: markdownText }} />
      </Button>
      <Avatar
        src={avatar}
        alt={username}
        size='sm'
        variant='circle'
        color='grey'
      />
    </div>
  );
}

export default ChatMessage;