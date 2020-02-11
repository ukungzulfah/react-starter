import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { dispactConnect, Action, combineAction } from 'combine-action';
import Home from './Application/Module/Home';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    theContent() {
        return (
            <div className="main-app">
                <Route exact path="/" component={Home} />
            </div>
        );
    }

    render() {
        return (
            <Router>
                <div className="wrap">
                    {this.theContent()}
                </div>
            </Router>
        );
    }
}

export default dispactConnect((App), combineAction(Action.HomeAction), ['HomeReducer']);
