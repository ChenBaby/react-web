import React from 'react'
import { Link } from 'react-router-dom'

import classnames from 'classnames'
import PropTypes from 'prop-types'
import HeaderCss from '../css/header.less'

class Header extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.handleScroll = this.handleScroll.bind(this)
  }


  componentDidMount () {
    this.handleScroll()
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount () {
    this.handleScroll()
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll () {
    const ua = window.navigator.userAgent.toLowerCase()

    const scrollTop = document.body.scrollTop || document.documentElement.scrollTop
    if (document.location.pathname === '/') {
      if (scrollTop > 100 && scrollTop < 499) {
        this.setState({ clearBackground: true })
      } else {
        this.setState({ clearBackground: false })
        if (/micromessenger/.test(ua) || (/android/.test(ua)) || (/iphone|ipod|ipad/.test(ua))) {
          if (scrollTop > 100 && scrollTop < 1100) {
            this.setState({ clearBackground: true })
          } else {
            this.setState({ clearBackground: false })
          }
        }
      }
      if (scrollTop > 499) {
        this.setState({ clearHeader: false })
        if (/micromessenger/.test(ua) || (/android/.test(ua)) || (/iphone|ipod|ipad/.test(ua))) {
          if (scrollTop < 1100) {
            this.setState({ clearHeader: true })
          } else {
            this.setState({ clearHeader: false })
          }
        }
      } else {
        this.setState({ clearHeader: true })
      }
    } else {
      this.setState({ clearHeader: false })
    }
  }

  handleScrolltop () {
    document.documentElement.scrollTop = 0
    this.handleScroll()
  }

  render () {
    return (
      <div id='header' className='header-box'>
        <div className={classnames(HeaderCss.menuWrapper, this.state.clearHeader ? HeaderCss.clearHeader : '', this.state.clearBackground ? HeaderCss.clearBackground : '')}>
          <div className='headerMenu'>
            <h1 className={HeaderCss.menuLeft}>
              <Link to='/' onClick={this.handleScrolltop}>iGuChin</Link>
            </h1>
            <div className={HeaderCss.menuRight}>
              {/* <Link className={HeaderCss.listLink} to='/' onClick={this.handleScroll}>主页</Link> */}
              {/* <Link className={HeaderCss.listLink} to='/library'>资料库</Link> */}
              {/* <Link className={HeaderCss.listLink} to='/charity'>公益</Link> */}
              <Link className={HeaderCss.listLink} to='/about' onClick={this.handleScrolltop}>关于</Link>
              {/* <Link className={HeaderCss.listLink} to='/login'><Avatar shape='circle' size='small' icon='user' src={this.props.url} className='icon-user' /></Link> */}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Header.defaultProps = {
  url: ''
}

Header.propTypes = {
  url: PropTypes.string
}

export default Header
