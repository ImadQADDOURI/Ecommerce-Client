import logo from './logo.svg';
import './App.css';
import Navbaar from './components/header/Navbaar';
import Slide from './components/home/Slide';

import store from './store';


function App() {
  return (
    <div>
      <div><Navbaar /></div>
      <div><Slide/></div>
      

    </div>
   
  );
}

export default App;
