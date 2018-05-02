import React from 'react'
import { Icon } from 'antd'
import '../css/about.less'

function About () {
  return (
    <div className='about-content'>
      <div className='section-tit'>
        <h2>关于爱古琴</h2>
        <h3>ABOUT US</h3>
      </div>
      <p className='about-cot'>爱古琴隶属于深圳市爱古琴文化有限公司，一个专注古琴教学的网络平台，网络课程是由专业的制作团队配合古琴名家打造而成，为琴课申请知识产权。平台除此之外拥有数据量全的古琴谱库，一千六百多个的指法释义以及上千首琴曲资料。</p>
      <p>&nbsp;</p>
      <p className='about-cot'>我们除了拥有文献资料以及网络课程，更有全面的全球琴社地图帮你找到身边的琴社，可以帮琴友们找到线下交流的“朋友圈”，爱古琴APP更有调音器、节拍器以及练琴等小工具陪伴你学古琴</p>
      <div className='section-tit value-tit'>
        <h2>核心价值观</h2>
        <h3>VALUES</h3>
      </div>
      <p className='about-cot value-cot'>专业、开放、利他、共融</p>
      <div className='section-tit contact-tit'>
        <h2>联系我们</h2>
        <h3>CONTACT US</h3>
      </div>
      <p className='about-cot'><Icon type='environment' />地址：深圳市福田中心区八卦岭八卦北路428栋西座5楼</p>
      <p className='about-cot'><Icon type='phone' />电话：(+86)13537807868</p>
      <p className='about-cot'> <Icon type='mail' />邮箱：aiguqin@aiguqin.com</p>
      <p>&nbsp;</p>
    </div>
  )
}

export default About
