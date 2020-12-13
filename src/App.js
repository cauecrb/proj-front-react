import logo from './logo.svg';
import './App.css';
/* import AwesomeSlider from 'react-awesome-slider';
import AwsSliderStyles from 'react-awesome-slider/src/styles.scss';


  const slider = (
    <AwesomeSlider cssModule={styles}>
      <div data-src="../images/imagemjupter.jpg"/>
      <div data-src="../images/imagemsaturno.jpg"/>
      <div data-src="../images/imagemterra.jpg" />
    </AwesomeSlider>
  ); */
  function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
