import React from 'react';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';
import HomePage from "./homePage";

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div>
                <Route exact path='/' component={HomePage}/>
            </div>
        )
    }

}

export default App;