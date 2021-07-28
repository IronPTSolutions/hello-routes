import Navbar from './components/navbar/Navbar';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from './components/home/Home';
import Contact from './components/contact/Contact';
import About from './components/about/About';
import UserDetail from './components/detail/UserDetail';

function App() {
  return (
    <div className="App">
      <Navbar/>

      <div className="container-fluid p-5">
        <Switch>
          <Route exact path="/home" component={Home} />

          <Route exact path="/contact" component={Contact} />

          <Route exact path="/about" component={About} />

          <Route exact path="/users/:id/detail" component={UserDetail} />

          <Redirect to="/home"/>
        </Switch>
      </div>
    </div>
  );
}

export default App;
