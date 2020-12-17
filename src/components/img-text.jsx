import React from 'react';
import imagem from "../images/foto1.jpg";
import '../styles/img-text.css';

export default class extends React.Component {
  render() {
    return (
  
        <div>
            <div className='txt-img'>
                <img className='img-circ'  width="300" height="150" src={imagem}/>
                <p> <h4>Lorem Ipsum</h4>                 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br></br>
                Phasellus bibendum aliquet erat, ut ornare purus malesuada et.<br></br>
                </p>
            </div>
        </div>
    );
  }
}