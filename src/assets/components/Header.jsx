import React from 'react'
import { Link } from 'react-router-dom'
import classnames from 'classnames'
import { Avatar } from 'antd'
import PropTypes from 'prop-types'
import HeaderCss from '../css/header.less'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    this.handleScroll()
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    this.handleScroll()
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll() {
    const scrollTop = document.body.scrollTop || document.documentElement.scrollTop
    if (document.location.pathname === '/') {
      if (scrollTop > 499) {
        this.setState({ clearHeader: false })
      } else {
        this.setState({ clearHeader: true })
      }
    } else {
      this.setState({ clearHeader: false })
    }
  }

  render() {
    return (
      <div id='header' className='header-box'>
        <div className={classnames(HeaderCss.menuWrapper, this.state.clearHeader ? HeaderCss.clearHeader : '')}>
          <div className='headerMenu'>
            <h1 className={HeaderCss.menuLeft}>
              <Link className={HeaderCss.listLink} to='/'>爱古琴</Link>
            </h1>
            <div className={HeaderCss.menuRight}>
              <Link className={HeaderCss.listLink} to='/'>主页</Link>
              <Link className={HeaderCss.listLink} to='/charity'>公益</Link>
              <Link className={HeaderCss.listLink} to='/about'>关于</Link>
              <Link className={HeaderCss.listLink} to='/login'><Avatar shape='circle' size='small' icon='user' src={this.props.url} className='icon-user' /></Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Header.defaultProps = {
  url: '',
}

Header.propTypes = {
  url: PropTypes.string,
}

export default Header
