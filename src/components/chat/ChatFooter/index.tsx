import { IoIosAttach } from 'react-icons/io';
import { BiMicrophone } from 'react-icons/bi';
import Input from '../../global/Input';
import Button from '../../global/Button';
import './styles.css';

const ChatFooter = () => {
  return (
    <div className='ChatFooter'>
      <Input
        className='ChatFooter__input'
        placeholder='Escribe un mensaje'
        iconEnd={<IoIosAttach />}
        iconSize='lg'
      />
      <Button
        className='ChatFooter__button'
        variant='contained'
        color='success'
      >
        <BiMicrophone />
      </Button>
    </div>
  );
}

export default ChatFooter;