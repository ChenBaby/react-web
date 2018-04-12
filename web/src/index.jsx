import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Icon, Row, Col, List, Avatar, BackTop } from 'antd';

import Home from './assets/components/Home';
import Header from './assets/components/Header';
import Footer from './assets/components/Footer';
import Charity from './assets/components/Charity';
import About from './assets/components/About';
import Login from './assets/components/Login';

import classnames from 'classnames';
import IndexCss from './assets/css/index.less';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render () {
        return (
            <div className={classnames(IndexCss.aiguqin)}>
                <Header></Header>
                <div className="content">
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/about' component={About} />
                        <Route path='/login' component={Login} />
                        <Route path='/charity' component={Charity} />
                    </Switch>
                </div>
                <BackTop className="top-button"/>
                <Footer></Footer>
            </div>
        )
    }
}

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);
