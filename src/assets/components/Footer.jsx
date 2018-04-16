import React from 'react';
import classNames from 'classnames';
import FooterCss from '../css/footer.less';
import { Icon } from 'antd';

class Footer extends React.Component {
    render () {
        return (
            <div id="footer" className="footer">
                <div className="footerMenu">
                    <span>Copyright © 2018 Aiguqin Inc.</span>
                    <span className="menu-right">aiguqin@aiguqin.com</span>
                    <span className="menu-right"><Icon type="mail" /></span>
                </div>
            </div>
        )
    }
}

export default Footer;