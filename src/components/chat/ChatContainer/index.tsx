import ChatFooter from '../ChatFooter';
import ChatHeader from '../ChatHeader';
import ChatMenuActions from '../ChatMenuActions';
import ChatMessages from '../ChatMessages';
import './styles.css';

type ChatContainerProps = {
  onSearch: () => void;
  onDots: () => void;
  isActive: boolean;
  onDesactive: () => void;
}

const ChatContainer = ({
  onSearch,
  onDots,
  isActive,
  onDesactive,
}: ChatContainerProps) => {
  return (
    <main className='ChatContainer'>
      <ChatMenuActions
        isActive={isActive}
        onClickOnSearch={onSearch}
        onClickOnDots={onDots}
        onDesactive={onDesactive}
      />
      <ChatHeader />
      <ChatMessages />
      <ChatFooter />
    </main>
  );
}

export default ChatContainer;