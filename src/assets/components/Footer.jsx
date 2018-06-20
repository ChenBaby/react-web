import React from 'react'
import { Icon } from 'antd'
import '../css/footer.less'

function Footer () {
  return (
    <div id='footer' className='footer'>
      <div className='footerMenu'>
        <span className='menu-left'>Copyright © 2018 Aiguqin Inc.</span>
        <span className='menu-right'><Icon type='mail' />aiguqin@aiguqin.com</span>
      </div>
      <div className='footerMenu beian-menu'>
        <p><span className='beian-number'><a href='http://www.miitbeian.gov.cn' target='_blank'>粤ICP备18021454号</a></span></p>
      </div>
    </div>
  )
}

export default Footer
