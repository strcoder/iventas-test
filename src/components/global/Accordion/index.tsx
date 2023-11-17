import cx from 'classnames';
import React, { useState } from 'react';
import { LuChevronDown } from 'react-icons/lu';
import Button from '../Button';
import './styles.css';

type AccordionProps = {
  title: string;
  children: React.ReactNode;
  active?: boolean;
};

const Accordion = ({
  title,
  children,
  active: defaultActive = false,
}: AccordionProps) => {
  const [active, setActive] = useState(defaultActive);

  const classes = cx({
    'accordion': true,
    'accordion-active': active,
  });

  const handleAccordion = () => {
    setActive(!active);
  }

  return (
    <div className={classes}>
      <Button
        color='text'
        variant='text'
        className='accordion-title'
        onClick={handleAccordion}
      >
        <p>{title}</p>
        <span className='accordion-icon'>
          <LuChevronDown />
        </span>
      </Button>
      {active && (
        <div className='accordion-content'>
          {children}
        </div>
      )}
    </div>
  );
}

export default Accordion;