import React from 'react';
import imagem from "../images/imagemterra.jpg";

export default class extends React.Component {
  render() {
    return (
  
        <div>
            <div>
                <img  width="300" height="150" src={imagem}/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Phasellus bibendum aliquet erat, ut ornare purus malesuada et.
            </div>
        </div>
    );
  }
}