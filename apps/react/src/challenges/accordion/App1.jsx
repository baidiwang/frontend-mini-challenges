import questions from './data';
import { useState } from 'react';
import Accordion from './Accordion';

export default function App() {
  const [multiple, setMultiple] = useState(true);
  const [openAccordionId, setOpenAccordionId] = useState(null);

  const setIdOfOpenAccordion = (id = null) => {
    setOpenAccordionId(multiple ? null : id);
  };

  const onMultipleChange = () => {
    if (multiple) {
      setOpenAccordionId(-1);
    }
    setMultiple(!multiple);
  };

  return (
    <div>
      <h4>
        <label htmlFor="max-eopen">Multiple?</label>
        <input type="checkout" id="max-open" checked={multiple} onChange={onMultipleChange}></input>
      </h4>
      <div>
        {questions.map((question) => (
          <Accordion
            key={question.id}
            multiple={multiple}
            openAccordionId={openAccordionId}
            setIdOfOpenAcoordion={setIdOfOpenAccordion}
          />
        ))}
      </div>
    </div>
  );
}
