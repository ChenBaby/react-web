import React from 'react';
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
        window.addEventListener('scroll', this.handleScroll);
    }
    
    componentWillUnmount () {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll (e) {
        let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        if (scrollTop > 499) {
            this.setState({transparent: true});
        } else {
            this.setState({transparent: false});
        }
    }

    render () {
        return (
            <div id="header" className="header-box" onScroll={this.handleScroll}>
                <div className="banner">
                    <div className="banner-background">
                    </div>
                    {/* <div className="search-box" >
                        <form>
                            <input type="text" placeholder="搜索课程..." id="header-search"/>
                            <a><Icon type="search" /></a>
                        </form>
                    </div> */}
                </div>
                <div className={classnames(HeaderCss.menuWrapper, this.state.transparent ? HeaderCss.transparent : '')}>
                    <div className="headerMenu">
                        <h1 className={HeaderCss.menuLeft}><a>爱古琴</a></h1>                    
                        <div className={HeaderCss.menuRight}>
                            <a href="" className={HeaderCss.listLink}>主页</a>
                            <a href="" className={HeaderCss.listLink}>公益</a>
                            <a href="" className={HeaderCss.listLink}>关于</a>
                            <a href="javescript:void(0)" className={HeaderCss.listLink}><Avatar shape="circle" size="small" icon="user" src={this.props.url} className="icon-user"/></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;