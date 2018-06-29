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
    const style1 = {
      textIndent: '3em'
    }
    const style2 = {
      textIndent: '4em'
    }
    const style3 = {
      textIndent: '2em'
    }
    const style4 = {
      textIndent: '8em'
    }
    return (
      <div className='about-content'>
        <Header />

        <section>
          <div className='section-tit'>
            <h2>爱古琴iGuChin</h2>
            <h3>About</h3>
          </div>
          <ul className='timeline'>
            <li>
              <div className='timeline-image'>
                <img className='rounded-circle img-fluid' src='src/assets/images/about1.jpg' alt='' />
              </div>
              <div className='timeline-panel'>
                <div className='timeline-heading'>
                  <h4>2018 02</h4>
                  <h4 className='subheading'>公司简介</h4>
                </div>
                <div className='timeline-body'>
                  <p className='text-muted' style={style1}>“爱古琴”全称深圳市爱古琴文化有限公司，于2018年2月8日在深圳正式创立。以历史首次最大批量的整理古琴历史古籍资料为基础，设计互联网古琴文献搜索引擎为核心，重点开发互联网学习古琴系统和古琴音乐第一平台</p>
                  <p className='text-muted' style={style2}>公司的全球统一中文名字为“爱古琴”【有报道指出取义“对古琴的挚爱，对文化的挚爱，对生活的挚爱”，该名的繁体中文为“愛古琴”】，全球统一英文名字为“iGuChin”</p>
                </div>
              </div>
            </li>
            <li className='timeline-inverted'>
              <div className='timeline-image'>
                <img className='rounded-circle img-fluid' src='src/assets/images/about2.jpg' alt='' />
              </div>
              <div className='timeline-panel'>
                <div className='timeline-heading'>
                  <h4>2010-2018</h4>
                  <h4 className='subheading'>公司创办史</h4>
                </div>
                <div className='timeline-body'>
                  <p className='text-muted'>2010年10月份，创始人初被古琴深邃悠远充满无限想象空间的声音打动，并开始学习接触古琴。2012年夏天，学琴遇到了一些障碍和瓶颈，于是开始搜寻查阅大量的古琴原始文献。2013年6月份到2014年10月份，开始梳理古琴历代所有原始文献资料结构。并且搭建爱古琴初步生态链模式。直至2018年2月份，古琴领域的全产业链模式全部定型，未来五年发展方向明确目标清晰。全球第一古琴应用“爱古琴app”，拥有自己品牌的古琴</p>
                </div>
              </div>
            </li>
            <li>
              <div className='timeline-image'>
                <img className='rounded-circle img-fluid' src='src/assets/images/about3.jpg' alt='' />
              </div>
              <div className='timeline-panel'>
                <div className='timeline-heading'>
                  <h4>爱古琴iGuChin</h4>
                  <h4 className='subheading'>名字由来</h4>
                </div>
                <div className='timeline-body'>
                  <p className='text-muted' style={style1}>爱是与生俱来的，可以包括心灵上的爱、对自己和他人的爱、对学习的爱等。爱本质上是一个抽象概念，可以体验却难以用言语或文字来表达。怀揣着对古琴的特殊情感对传统文化的情感，由此“爱古琴”应时代的声音而生。</p>
                  <p className='text-muted' style={style2}>“iGuChin”一词源于单词“ ai+guqin+China ” ，即爱+古琴+中国，写出的形式为iGuChin。该词现在也可以理解为“爱古琴”中文的汉语谐音，爱古琴 = iGuChin！</p>
                </div>
              </div>
            </li>
            <li className='timeline-inverted'>
              <div className='timeline-image'>
                <img className='rounded-circle img-fluid' src='src/assets/images/about4.jpg' alt='' />
              </div>
              <div className='timeline-panel'>
                <div className='timeline-heading'>
                  <h4>logo</h4>
                  <h4 className='subheading'>图标的诞生</h4>
                </div>
                <div className='timeline-body'>
                  <p className='text-muted'>基于爱古琴的弘扬传统文化保护历史古籍文献的核心观念，现代艺术与传统文化的精髓高度巧妙的融合思想。创始人和设计师共同碰撞出了爱古琴的字母图标，即为“I”。颜色选用了中国传统色系中的紫色</p>
                </div>
              </div>
            </li>
            <li>
              <div className='timeline-image'>
                <img className='rounded-circle img-fluid' src='src/assets/images/about6.jpg' alt='' />
              </div>
              <div className='timeline-panel'>
                <div className='timeline-heading'>
                  <h4>原型</h4>
                  <h4 className='subheading'>设计理念</h4>
                </div>
                <div className='timeline-body'>
                  <p className='text-muted' style={style3}>古琴腔体内会有两个柱子，用以支撑古琴放置年代久远后不会“塌腰”变形，其中一根为方形为地柱靠近琴头这边，另外一根为圆形柱子靠近琴尾一边，为天柱。当下斫琴师为了追求利益缩短工时不息放弃此工艺，会导致古琴传承千年以后会产生形变，此图标的首要用意为时刻提醒当代斫琴师恢复古法工艺，精益求精的传承古琴文化</p>
                  <p className='text-muted'><img src='src/assets/images/about7.jpg' alt='logo-source' width='100%' /></p>
                </div>
              </div>
            </li>
            <li className='timeline-inverted'>
              <div className='timeline-image'>
                <img className='rounded-circle img-fluid' src='src/assets/images/about8.jpg' alt='' />
              </div>
              <div className='timeline-panel'>
                <div className='timeline-heading'>
                  <h4>Own</h4>
                  <h4 className='subheading'>产品与服务</h4>
                </div>
                <div className='timeline-body'>
                  <p className='text-muted'>爱古琴拥有全球最大的古琴文献数据库搜索引擎，包含159部古琴谱书文献资料，800多首带有古琴曲释意曲目，1600多个古琴指法解析</p>
                  <p className='text-muted'>“学院”定位与古琴互联网名家琴课，汇集数十位知名古琴艺术家，联合打造与时俱进的互联网学习系统</p>
                  <p className='text-muted'>“听琴”模块为全球业内最专业最权威的古琴音乐网络平台。</p>
                  <p className='text-muted'>除了学习传承的吉人以外，也专门为学琴的朋友专门设计开发了学习工具，“练琴”“调音器”“节拍器”。</p>
                  <p className='text-muted'>出版物：历代古琴文献合集DVD、《历代古琴指法解析汇编》、《历代古琴曲释意汇编》、《历代古琴谱书汇编》、《历代古琴制作汇编》、《历代古琴指法手势图汇编》、《历代古琴圣贤汇编》、《历代古琴样式汇编》、《历代古琴弹奏要则汇编》</p>
                  <p />
                </div>
              </div>
            </li>
            <li>
              <div className='timeline-image'>
                <img className='rounded-circle img-fluid' src='src/assets/images/about5.jpg' alt='' />
              </div>
              <div className='timeline-panel'>
                <div className='timeline-heading'>
                  <h4>VALUES</h4>
                  <h4 className='subheading'>使命与价值观</h4>
                </div>
                <div className='timeline-body'>
                  <p className='text-muted'>使命：随时随地，听古琴学古琴</p>
                  <p className='text-muted'>愿景：让古琴成为每个人生活的一部分</p>
                  <p className='text-muted'>价值观：传承古琴文化，推动古琴的历史发展进程</p>
                  <p className='text-muted'>广告语：爱古琴，爱生活</p>
                </div>
              </div>
            </li>
            <li className='timeline-inverted'>
              <div className='timeline-image'>
                <h4>2018 08
                  <br />爱古琴
                  <br />全面上线发布
                </h4>
              </div>
            </li>
          </ul>
        </section>
      </div>
    )
  }
}

export default About
