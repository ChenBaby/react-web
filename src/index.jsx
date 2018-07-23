import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { BackTop } from 'antd'
import classnames from 'classnames'

import Home from './assets/components/Home'
// import Header from './assets/components/Header'
import Footer from './assets/components/Footer'
import About from './assets/components/About'
import Login from './assets/components/Login'
import Book from './assets/components/Book'
import Books from './assets/components/Books'
import Notations from './assets/components/Notations'
import Notation from './assets/components/Notation'
import Songs from './assets/components/Songs'


import IndexCss from './assets/css/index.less'
import './assets/css/header.less'
import './assets/css/font.css'


class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div className={classnames(IndexCss.aiguqin)}>
        {/* <Header /> */}
        <div className='content'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/login' component={Login} />
            <Route path='/books/:id' component={Book} />
            <Route path='/books' component={Books} />
            <Route path='/notations/:id' component={Notation} />
            <Route path='/notations' component={Notations} />
            <Route path='/songs' component={Songs} />
          </Switch>
        </div>
        <BackTop className='top-button' />
        <Footer />
      </div>
    )
  }
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
)
