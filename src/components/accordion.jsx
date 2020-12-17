import React from 'react';
import { Accordion, AccordionItem } from 'react-sanfona';
import imagem from '../images/foto1.jpg'
// import '../styles/accordion.css';


export default class extends React.Component {
  render() {
    return (
      <Accordion className="accordioncss">
        {[1, 2, 3, 4, 5].map(item => {
          return (
            <AccordionItem title={`Lorem ipsum`} expanded={item === 1}>
              <div className="divinacc">
                
                  <h5> Lorem ipsum</h5>
                  <div className="div-interna-acc">
                  <img className="img-acc" src={imagem} alt=""/> 
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus bibendum aliquet erat, ut ornare purus malesuada et.
                  </p>
                </div>
              </div>
            </AccordionItem>
          );
        })}
      </Accordion>
    );
  }
}