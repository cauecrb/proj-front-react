import React from 'react';
import { Accordion, AccordionItem } from 'react-sanfona';
import '../styles/accordion.css';


export default class extends React.Component {
  render() {
    return (
      <Accordion className="accordioncss">
        {[1, 2, 3, 4, 5].map(item => {
          return (
            <AccordionItem title={`Item ${item}`} expanded={item === 1}>
              <div className="divinacc">
                {`Item ${item} content`}
              </div>
            </AccordionItem>
          );
        })}
      </Accordion>
    );
  }
}