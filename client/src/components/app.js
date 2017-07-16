import React,{ Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './pages/home';
import Member from './pages/member';
import Legislation from './pages/legislation';

class App extends Component{
    render(){
        return(
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path = '/member/:name' component={Member}/>
                <Route path = '/legislation/:keyword' component={Legislation}/>
            </Switch>
        )
    }
}

export default App;
