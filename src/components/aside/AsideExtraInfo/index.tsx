import { extraInfoItems } from '../../../mocks/extraInfoItems';
import Accordion from '../../global/Accordion';
import './styles.css';

const AsideExtraInfo = () => {
  return (
    <aside className='AsideExtraInfo'>
      {extraInfoItems.map((item) => (
        <Accordion
          key={item.id}
          title={item.title}
        >
          <p>{item.description}</p>
        </Accordion>
      ))}
    </aside>
  );
}

export default AsideExtraInfo;