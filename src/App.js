import React, {useEffect} from "react";
import './App.css';
import {
  BrowserRouter,
 Switch,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserRoute from './components/UserRoute';
import {useDispatch} from 'react-redux';
import {auth} from './firebase';
import {setUser} from './redux/actions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
auth.onAuthStateChanged((authUser) =>{
  if(authUser){
    dispatch(setUser(authUser));
  }else{
    dispatch(setUser(null));
  }
});
  }, [dispatch]);
  return (
    <BrowserRouter>
 <div className="App">

<Switch>
  <UserRoute exact path="/" component={Home}/>
  <Route exact path="/login" component={Login}/>
  <Route exact path="/register" component={Register}/>
</Switch>
      
    </div>
    </BrowserRouter>
   
  );
}

export default App;
