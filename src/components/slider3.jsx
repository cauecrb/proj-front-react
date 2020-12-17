import React from 'react';
import Carousel from 'nuka-carousel';
import imagem1 from "../images/foto1.jpg";
import imagem2 from "../images/foto2.jpg";
import imagem3 from "../images/foto3.jpg";

import '../styles/slider3.css';

export default class extends React.Component {
  render() {
    return (
      <div className="total-slider">
      <div className="divslider3">
      <Carousel
      slidesToShow={3} slidesToScroll={3}>
        <div>
          <img className="imgsld3" src={imagem1} alt=""/>
          <h5> Lorem ipsum</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Phasellus bibendum aliquet erat, ut ornare purus malesuada et.</p>
        </div>
        <div>
          <img className="imgsld3" src={imagem2} alt=""/>
          <h5> Lorem ipsum</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Phasellus bibendum aliquet erat, ut ornare purus malesuada et.</p>
        </div> 
        <div>
          <img className="imgsld3" src={imagem3} alt=""/>
          <h5> Lorem ipsum</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Phasellus bibendum aliquet erat, ut ornare purus malesuada et.</p>
        </div> 
        <div>
          <img className="imgsld3" src={imagem3} alt=""/>
          <h5> Lorem ipsum</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Phasellus bibendum aliquet erat, ut ornare purus malesuada et.</p>
        </div> 
        <div>
          <img className="imgsld3" src={imagem2} alt=""/>
          <h5> Lorem ipsum</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Phasellus bibendum aliquet erat, ut ornare purus malesuada et.</p>
        </div> 
        <div>
          <img className="imgsld3" src={imagem1} alt=""/>
          <h5> Lorem ipsum</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Phasellus bibendum aliquet erat, ut ornare purus malesuada et.</p>
        </div> 
        <div>
          <img className="imgsld3" src={imagem2} alt=""/>
          <h5> Lorem ipsum</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Phasellus bibendum aliquet erat, ut ornare purus malesuada et.</p>
        </div> 
        <div>
          <img className="imgsld3" src={imagem3} alt=""/>
          <h5> Lorem ipsum</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Phasellus bibendum aliquet erat, ut ornare purus malesuada et.</p>
        </div> 
        <div>
          <img className="imgsld3" src={imagem1} alt=""/>
          <h5> Lorem ipsum</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Phasellus bibendum aliquet erat, ut ornare purus malesuada et.</p>
        </div>
      </Carousel>
      </div>
      </div>
    );
  }
}