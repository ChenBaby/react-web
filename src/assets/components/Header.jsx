import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import HeaderCss from '../css/header.less';
import { Icon, Avatar } from 'antd';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        this.handleScroll();
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        this.handleScroll();
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll () {
        let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        if(location.pathname === '/') {
            if (scrollTop > 499) {
                this.setState({clearHeader: false});
            } else {
                this.setState({clearHeader: true});
            }
        } else {
            this.setState({clearHeader: false});
        }
    }

    render () {
        return (
            <div id="header" className="header-box">
                <div className={classnames(HeaderCss.menuWrapper, this.state.clearHeader ? HeaderCss.clearHeader : '')}>
                    <div className="headerMenu">
                        <h1 className={HeaderCss.menuLeft}><a>爱古琴</a></h1>                    
                        <div className={HeaderCss.menuRight}>
                            <Link className={HeaderCss.listLink} to="/">主页</Link>
                            <Link className={HeaderCss.listLink} to="/charity">公益</Link>
                            <Link className={HeaderCss.listLink} to="/about">关于</Link>
                            <Link className={HeaderCss.listLink} to="/login"><Avatar shape="circle" size="small" icon="user" src={this.props.url} className="icon-user"/></Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;