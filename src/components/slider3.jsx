import React from 'react';
import Carousel from 'nuka-carousel';
import imagem1 from "../images/imagemjupter.jpg";
import imagem2 from "../images/imagemsaturno.jpg";
import imagem3 from "../images/imagemterra.jpg";

import '../styles/slider3.css';

export default class extends React.Component {
  render() {
    return (
      <div className="divslider3">
      <Carousel
      slidesToShow={3} slidesToScroll={3}>
        <div>
          <img className="imgsld3" src={imagem1} alt=""/>
          <p>oioioioiooioioioi</p>
        </div>
        <div>
          <img className="imgsld3" src={imagem1} alt=""/>
          <p>oioioioiooioioioi</p>
        </div> 
        <div>
          <img className="imgsld3" src={imagem1} alt=""/>
          <p>oioioioiooioioioi</p>
        </div> 
        <div>
          <img className="imgsld3" src={imagem1} alt=""/>
          <p>oioioioiooioioioi</p>
        </div> 
        <div>
          <img className="imgsld3" src={imagem1} alt=""/>
          <p>oioioioiooioioioi</p>
        </div> 
        <div>
          <img className="imgsld3" src={imagem1} alt=""/>
          <p>oioioioiooioioioi</p>
        </div> 
        <div>
          <img className="imgsld3" src={imagem1} alt=""/>
          <p>oioioioiooioioioi</p>
        </div> 
        <div>
          <img className="imgsld3" src={imagem1} alt=""/>
          <p>oioioioiooioioioi</p>
        </div> 
        <div>
          <img className="imgsld3" src={imagem1} alt=""/>
          <p>oioioioiooioioioi</p>
        </div>
      </Carousel>
      </div>
    );
  }
}