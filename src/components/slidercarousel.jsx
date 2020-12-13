/* import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
} */
import React from 'react';
import '../styles/caroussel.css';
import Carousel from 'nuka-carousel';
import imagem1 from "../images/imagemjupter.jpg";
import imagem2 from "../images/imagemsaturno.jpg";
import imagem3 from "../images/imagemterra.jpg";

export default class extends React.Component {
  render() {
    return (
      <div className="divcarousel">
      <Carousel>
        <img src={imagem1} height="400" width="cover" background="cover"/>
        <img src={imagem2} height="400" background="cover"/>
        <img src={imagem3} height="400" background="cover"/>
      </Carousel>
      </div>
    );
  }
}