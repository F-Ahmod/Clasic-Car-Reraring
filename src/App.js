import { BrowserRouter,Switch,Route } from 'react-router-dom';

import './App.css';


import Header from './Pages/Header/Header';
import Experts from './Pages/Home/Experts/Experts';
import Home from './Pages/Home/Home/Home';
import Services from './Pages/Home/Services/Services';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import SingUp from './Pages/SingUp/SingUp';
import AddService from './Pages/AddService/AddService';
import AddToBook from './Pages/AddToBook/AddToBook';
import Managebook from './Pages/Managebook/Managebook';





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
        <Route path="/addToBook/:id">
          <AddToBook></AddToBook>
        </Route>
        <Route path="/manageBook">
          <Managebook></Managebook>
        </Route>
        <Route exact path="manageBook">
          <Managebook></Managebook>
        </Route>

        <Route path="/AddService">
          <AddService></AddService>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/singup">
         <SingUp></SingUp>
        </Route>

      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
