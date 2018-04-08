import React from 'react';
import classNames from 'classnames';
import HeaderCss from '../css/header.css';
import IndexCss from '../css/index.less';
import FontCss from '../css/font.css';

class Header extends React.Component {
    render () {
        return (
            <div id="header">
                <div className="headerMenu">
                    <h1 className={HeaderCss.menuLeft}><a>爱古琴</a></h1>                    
                    <div className={HeaderCss.menuRight}>
                        <a href="" className={HeaderCss.listLink}>发现</a>
                        <a href="" className={HeaderCss.listLink}>课程</a>
                        <a href="" className={HeaderCss.listLink}>听琴</a>
                        <a href="" className={classNames(FontCss.iconfont, FontCss.iconUser, HeaderCss.listLink)}></a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;