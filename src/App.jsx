
//import './App.css';
import ConnectWorkbench from './Pages/ConnectWorkbench.jsx';
import Home from './Pages/Home.jsx'
import Projeto from './Pages/Projeto.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
/*<style>
@import url('https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
</style> */
function App() {
  return (
    <div style={{fontFamily: 'Fira Sans'}}>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
      </style>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path='/Projeto' Component={Projeto} />
          <Route path='/ConnectWorkbench' Component={ConnectWorkbench}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
