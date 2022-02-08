import { Fragment } from 'react';
import './App.css';
import { Switch, Route} from 'react-router-dom';
import Home from './components/Home'
import GrillaDino from './components/GrillaDino'
import DetalleDino from './components/DetalleDino'
import BatallaDino from './components/BatallaDino'
import AdminPrincipal from './components/AdminPrincipal'
import Insertar from './components/Insertar'
import Actualizar from './components/Actualizar'
import EliminarLogic from './components/EliminarLogic'


const App = () => {

  
    return(

     
      <Fragment>

          <Switch>

            <Route exact path="/" component={Home} ></Route>
            <Route exact path="/grillaDino" component={GrillaDino} ></Route>
            <Route exact path="/detalleDino/:id" component={DetalleDino} ></Route>
            <Route exact path="/batallaDino" component={BatallaDino} ></Route>
            <Route exact path="/admin" component={AdminPrincipal} ></Route>
            <Route exact path="/insertar" component={Insertar} ></Route>
            <Route exact path="/actualizar/:id" component={Actualizar} ></Route>
            <Route exact path="/eliminarLog/:id" component={EliminarLogic} ></Route>

          </Switch>

      </Fragment>

    );



}

export default App;
