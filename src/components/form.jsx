import React from 'react';
import '../styles/form.css';

export default class extends React.Component {
  render() {
    return (
      <div className="div-form">
       <form>
            <label>
                
                <input type="text" className="nome" value=' *Nome: '/>
            </label>
            <div className='div-email'>
            
                <input type="text" className="email" value=' *Email: ' />
            
                <input type="text" className="telefone" value=' *Telefone: ' />
            </div>
            
                <input type="text" className="mensagem" value=' *mensagem: ' />
            <input type="submit" className='button-form' value="Enviar" />
        </form>
      </div>

    );
  }
}