import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Login from './Login/Login';

import Header from './Pages/Header/Header';

import Experts from './Pages/Home/Experts/Experts';
import Home from './Pages/Home/Home/Home';

import Services from './Pages/Home/Services/Services';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
      <Switch>
      {/* <Route exact path="/">
          <Home></Home>
        </Route> */}
        <Route exact path="/home">
          <Home></Home>
        </Route>
        <Route path="/services">
          <Services></Services>

        </Route>
        <Route path="/experts">
         <Experts></Experts>
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
