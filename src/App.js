import React from 'react';
// import Home from './routers/Home'
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import About from './routers/About';
import Home from './routers/Home';
import Navigation from './component/Navigation';
import Detail from './routers/Detail';


function App() {

    return (
        <HashRouter>
            <Navigation/>
            <Route path = "/" exact = {true} Component={Home}/>
            <Route path = "/about" Component={About}/>
            <Route path='/movie-detail' Component={Detail} />
        </HashRouter>
    );

}

export default App;