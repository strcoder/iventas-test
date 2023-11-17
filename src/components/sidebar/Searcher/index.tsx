import { FaSearch } from 'react-icons/fa';
import Input from '../../global/Input';
import ButtonGroup from '../../global/ButtonGroup';
import Button from '../../global/Button';
import './styles.css';

const Searcher = () => {
  return (
    <div className='Searcher'>
      <div className='Searcher__input'>
        <Input
          placeholder='Buscar'
          iconStart={<FaSearch />}
        />
      </div>
      <div className='Searcher__buttons'>
        <ButtonGroup
          variant='outlined'
          color='gray'
          currentActive={0}
          fullWidth
        >
          <Button>
            Todos (300)
          </Button>
          <Button>
            No leídos (167)
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
}

export default Searcher;