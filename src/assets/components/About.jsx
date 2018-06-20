import React from 'react'
import ReactDOM from 'react-dom'
import { Icon } from 'antd'
import Header from './Header'

import '../css/about.less'

class About extends React.Component {
  componentDidMount () {
    // let header = document.getElementById('header')
    // ReactDOM.findDOMNode(header).find('.menuWrapper').removeClass('clearHeader')
  }
  render () {
    return (
      <div className='about-content'>
        <Header />
        <div className='section-tit'>
          <h2>关于爱古琴</h2>
          <h3>ABOUT US</h3>
        </div>
        <p className='about-cot'>爱古琴隶属于深圳市爱古琴文化有限公司，一个专注古琴教学的网络平台，网络课程是由专业的制作团队协助古琴名家打造而成，我们也将会为琴课申请知识产权。爱古琴拥有数据量全的古琴谱库，一千六百多个的指法释义以及上千首琴曲资料等提供给每一位琴友去查阅以及了解学习古琴这一项传统文化产业，目前网站的文献资料正在陆续完善更新。</p>
        <p>&nbsp;</p>
        <p className='about-cot'>爱古琴除了拥有文献资料以及网络课程，即将会开发一项功能：全面的全球琴社地图，帮各大琴友找到身边的琴社，可以帮琴友们找到线下交流的“朋友圈”，下载爱古琴APP更有调音器、节拍器以及练琴等小工具陪伴你学古琴</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p className='about-cot'><b style={{ fontSize: '18px' }}>古琴&nbsp;</b>原称琴，又称瑶琴、玉琴、五弦琴和七弦琴，是中国的拨弦乐器，有三千年以上历史，属于八音中的丝。古琴音域宽广，音色深沉，余音悠远。自古“琴”为其特指，于1920年代起为了与钢琴区别而改称古琴。初为五弦，汉朝起定制为七弦，且有标志音律的13个徽，亦为礼器和乐律法器。</p>
        <div className='section-tit value-tit'>
          <h2>核心价值观</h2>
          <h3>CORE VALUES</h3>
        </div>
        <p className='about-cot value-cot'>专业、开放、利他、共融</p>
        <div className='section-tit contact-tit'>
          <h2>联系我们</h2>
          <h3>CONTACT US</h3>
        </div>
        <p className='about-cot'><Icon type='environment' />地址：深圳市罗湖区笋岗街道笋岗东路3002号万通大厦204室</p>
        <p className='about-cot'><Icon type='phone' />电话：(+86)13537807868</p>
        <p className='about-cot'> <Icon type='mail' />邮箱：aiguqin@aiguqin.com</p>
        <p>&nbsp;</p>
      </div>
    )
  }
}

export default About
