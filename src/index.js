import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/footer.css';
import './styles/caroussel.css';
import App from './App';
import Slider from './components/slidercarousel.jsx';
import Slider3 from './components/slider3.jsx';
import Accordion from './components/accordion.jsx';
import Form from './components/form.jsx';
import ImgTxt from './components/img-text.jsx';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    <div className="centralizacao">
      <Slider />
      <Slider3 />
      <Accordion/>
      <Form />
      <ImgTxt />
      <footer> roda pe</footer>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
