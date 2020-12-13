import React from 'react';

export default class extends React.Component {
  render() {
    return (
  
       <form>
            <label>
                Nome:
                <input type="text" name="name" />
            </label>
            <input type="submit" value="Enviar" />
        </form>

    );
  }
}