import { useEffect, useState } from 'react';

const Accordion = ({ id, title, info, openAccordionId, setIdOfOpenAcoordion }) => {
  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow((prev) => !prev);
    setIdOfOpenAcoordion(id);
  };

  useEffect(() => {
    if (openAccordionId) {
      setShow(openAccordionId === id);
    }
  }, [id, openAccordionId]);

  return (
    <div key={id}>
      <div>
        <h3>{title}</h3>
        <button onClick={toggle}>{show ? '-' : '+'}</button>
      </div>
      {show && <p>{info}</p>}
    </div>
  );
};

export default Accordion;
