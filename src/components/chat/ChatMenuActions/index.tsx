import { GoChevronRight } from 'react-icons/go';
import { AiOutlineSearch } from 'react-icons/ai';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import IconButton from '../../global/IconButton';
import './styles.css';

type ChatMenuActionsProps = {
  isActive: boolean;
  onClickOnSearch: () => void;
  onClickOnDots: () => void;
  onDesactive: () => void;
}

const ChatMenuActions = ({
  isActive,
  onClickOnSearch,
  onClickOnDots,
  onDesactive,
}: ChatMenuActionsProps) => {

  return (
    <div className='ChatMenuActions'>
      {isActive && (
        <>
          <div />
          <IconButton size='lg' color='grey' onClick={onDesactive}>
            <GoChevronRight />
          </IconButton>
        </>
      )}
      {!isActive && (
        <>
          <IconButton size='lg' color='grey' onClick={onClickOnSearch}>
            <AiOutlineSearch />
          </IconButton>
          <IconButton size='lg' color='grey' onClick={onClickOnDots}>
            <HiOutlineDotsVertical />
          </IconButton>
        </>
      )}
    </div>
  );
}

export default ChatMenuActions;