import React,{useEffect} from 'react';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import LogIn from './Components/LogIn/LogIn';
import CheckOut from './Components/CheckOut/CheckOut';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import LogIn from './Components/LogIn/LogIn';
import { auth } from './Firebase/Firebase';
import {useStateValue} from './Reducer/StateProvider'
// import Pratice from './Components/Pratice'

function App() {
  const [{}, dispatch] = useStateValue();
      useEffect(() => {
          // will only run ones the app Components loads...
          auth.onAuthStateChanged(authUser => {
            console.log('the user is ..... ', authUser );

            if(authUser){
              // the user just logged in / the user was logged in
              dispatch({
                type: 'SET_USER',
                user: authUser
              })

            }else{
              // the user is not logged in
              dispatch({
                type: 'SET_USER',
                user: null
              })
            }
          })
      }, [])

    return ( 
      <Router>
        <Header/>
        <div className = "app" >
        <Switch>
        <Route path = "/login" exact > <LogIn/> </Route> 
        <Route path = "/checkout" exact > <CheckOut/> </Route> 
        <Route path = "/"exact > <Home/> </Route> 
        </Switch> 
        </div> 
        </Router>
    );
}

export default App;