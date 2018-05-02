import React from 'react'
import { Icon } from 'antd'
import '../css/footer.less'

function Footer () {
  return (
    <div id='footer' className='footer'>
      <div className='footerMenu'>
        <span>Copyright © 2018 Aiguqin Inc.</span>
        <span className='menu-right'>aiguqin@aiguqin.com</span>
        <span className='menu-right'><Icon type='mail' /></span>
      </div>
    </div>
  )
}

export default Footer
