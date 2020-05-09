import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import AdoptAdv from './adopt-adv';
import MainPage from './main';

var classNames = require('classnames');
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowed: false
        }
    }
    render() {
        var subpage = classNames({
            'subpage': true,
            'show-subpage': this.state.isShowed
        })
        return (
            <Router>
                <div id="show-route-menu"
                    onClick={() => this.setState({ isShowed: !this.state.isShowed })}
                >
                    <ul className={subpage}>
                        <li>
                            <Link to="/">Strona główna</Link>
                        </li>
                        <li>
                            <Link to="/adopt-adv">Zalety adopcji</Link>
                        </li>
                    </ul>
                </div>
                <Route exact path="/" component={MainPage} />
                <Route path="/adopt-adv" component={AdoptAdv} />
            </Router >
        );
    }
}

export default App;