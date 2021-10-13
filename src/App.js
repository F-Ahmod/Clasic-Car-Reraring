import { BrowserRouter,Switch,Route } from 'react-router-dom';

import './App.css';


import Header from './Pages/Header/Header';
import Experts from './Pages/Home/Experts/Experts';
import Home from './Pages/Home/Home/Home';
import Services from './Pages/Home/Services/Services';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
      
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/services">
          <Services></Services>
        </Route>
        <Route path="/experts">
         <Experts></Experts>
        </Route>
        <Route exact path="/about">
        <About></About>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>

      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
