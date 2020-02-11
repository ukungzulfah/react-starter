import React from 'react';
import { dispactConnect, Action, combineAction } from 'combine-action';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="pages">
                <h1>Hello World</h1>
            </div>
        );
    }
}

export default dispactConnect((Home), combineAction(Action.HomeAction), ['HomeReducer']);
