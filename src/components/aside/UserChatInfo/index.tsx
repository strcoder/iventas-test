import { BiDislike, BiLike } from 'react-icons/bi';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { AiOutlinePlus } from 'react-icons/ai';
import Avatar from '../../global/Avatar';
import IconButton from '../../global/IconButton';
import ButtonGroup from '../../global/ButtonGroup';
import Button from '../../global/Button';
import Chip from '../../global/Chip';
import './styles.css';

const tags = [
  'Reasignada',
  'Potencial',
  'Factura',
  'Prospecto',
  'Llamada urgente',
];

const UserChatInfo = () => {
  return (
    <div className='UserChatInfo'>
      <div className='UserChatInfo__user'>
        <Avatar
          src='https://avatars.githubusercontent.com/u/57289153?v=4'
          alt='Avatar'
          size='lg'
        />
        <div className='UserChatInfo__user--info'>
          <p className='UserChatInfo__user--infoName'>Adrian Ocerguera</p>
          <p className='UserChatInfo__user--infoPhone'>+52 556 097 8904</p>
        </div>
        <IconButton color='text' size='lg'>
          <HiOutlineDotsVertical />
        </IconButton>
      </div>
      <div className='UserChatInfo__buttons'>
        <ButtonGroup
          variant='contained'
          color='primary' currentActive={0}
          fullWidth
        >
          <Button iconEnd={<BiLike />}>
            Potencial
          </Button>
          <Button iconEnd={<BiDislike />}>
            No potencial
          </Button>
        </ButtonGroup>
      </div>
      <div className='UserChatInfo__tags'>
        <div className='UserChatInfo__tags--list'>
          {tags.map((tag) => (
            <Chip
              key={tag}
              label={tag}
              color='grey'
              variant='contained'
              onDelete={() => null}
            />
          ))}
        </div>
        <Button
          variant='outlined'
          color='primary'
          iconStart={<AiOutlinePlus />}
          fullWidth
          iconSize='lg'
          className='UserChatInfo__tags--button'
        >
          Agregar etiqueta
        </Button>
      </div>
    </div>
  );
}

export default UserChatInfo;