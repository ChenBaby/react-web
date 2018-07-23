import React from 'react'
import { Row, Col, Input, Radio } from 'antd'
import Header from './Header'
import IndexCss from '../css/index.less'
import '../css/home.less'

const Search = Input.Search
const RadioGroup = Radio.Group

class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      // value: 1
    }
    this.handleScroll = this.handleScroll.bind(this)
    // this.onChange = this.onChange.bind(this)
  }

  componentDidMount () {
    this.handleScroll()
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount () {
    this.handleScroll()
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll () {
    const scrollTop = document.body.scrollTop || document.documentElement.scrollTop
    if (scrollTop > 100 && scrollTop < 499) {
      this.setState({ addOpacity: true })
    } else {
      this.setState({ addOpacity: false })
    }
  }

  // onChange (e) {
  //   console.log('radio checked', e.target.value)
  //   this.setState({
  //     value: e.target.value,
  //   })
  // }

  render () {
    const style1 = {
      textIndent: '2em'
    }
    return (
      <div className='home' id='home-page'>
        <Header />
        <div className='banner'>
          <div className='banner-background'>
            <div className='container flex'>
              <div className='col-6 flex flex-column center-vertical mobile-text-center'>
                <h1 className={this.state.addOpacity ? IndexCss.addOpacity : ''}>爱古琴, 爱生活</h1>
                <h2 className={this.state.addOpacity ? IndexCss.addOpacity : ''}>iGuChin for a better life</h2>
                <div className='mt40'>
                  <a href='javascript:void(0)' className='button'>
                    <span>去应用商店下载 APP </span>
                  </a>
                </div>
              </div>
              <div className='col-6 flex flex-column center-vertical mobile-text-center'>
                <div className='iphone launchaco-builder-hoverable'>
                  <div className='mask mask__noimage'>
                    <img alt='' className='mask-img' src='/src/assets/images/app.jpg' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='home-content text-center'>
          {/* <section className='search-sec'>
            <div className='search-box' >
              <div className='text-center'>
                <Search
                  placeholder='搜一搜...'
                  size='large'
                  onSearch={value => console.log(value)}
                />
              </div>
              <div className='radios-container'>
                <RadioGroup onChange={this.onChange} value={this.state.value}>
                  <Radio value={1}>全部</Radio>
                  <Radio value={2}>谱书</Radio>
                  <Radio value={3}>指法</Radio>
                  <Radio value={4}>琴曲</Radio>
                </RadioGroup>
              </div>
            </div>
          </section> */}
          <section id='library-sec'>
            <div className='container'>
              <Row>
                <Col span={24} className='text-center'>
                  <h2 className='section-heading'>全球最大的古琴文献资料库</h2>
                  <h3 className='section-subheading'>历代古琴文献数据库</h3>
                </Col>
              </Row>
              <Row>
                <Col span={8} className='text-center sec'>
                  <span className='ant-stack ant-4x'>
                    <i className='icon icon-book ant-stack-2x text-secondary' />
                  </span>
                  <h4 className='service-heading'>谱书</h4>
                  <p>156部历代传世谱书</p>
                  <p>整理历史刊行的谱书，高清处理图像，考证版本年代，以及编辑目录分类等</p>
                </Col>
                <Col span={8} className='text-center sec'>
                  <div className='notation ant-stack ant-4x'>
                    <span className='glyph'>
                      <svg viewBox='0,0,400,400' width='130' height='130'>
                        <path d='M200,39.2c-6.2,4.3-11.2,8.1-15,11.4c-11.4,9.7-20.2,19.8-26.4,30c-6,6.8-11.9,13.4-17.9,19.9   c-15.2,15.7-31.9,29.9-50.3,42.6c-25.7,18.1-51.7,31.4-78,39.8c1.6,0,10.8-5.4,27.6-16.2c22.2-14.3,42.6-30.6,61.3-48.7   c26.5-25.4,47.2-52.5,62.1-81.2H51.4l-4.9,2.4l-7.3-9.7H161l14.6-14.6L200,39.2z M95.3,112.3c-3.2-8.4-6.1-15.3-8.5-20.7   c-7.3-16.2-15-30.5-23.1-42.6c10.8,4.3,20.7,10.1,29.6,17.5c11.4,9.5,17.1,18.1,17.1,26C110.3,100,105.3,106.6,95.3,112.3z    M387.6,141.5c-3,0.8-5.4,1.5-7.3,2c-11.6,4.6-20.6,11.2-26.8,19.9c-29.2-15.2-50.3-27.1-63.3-35.7c-21.9-14.6-39.2-30.2-52-46.7   c-15.2-19.8-25.4-42.6-30.9-68.6h4.9c1.4,4.3,2.6,8,3.7,11c6.5,17.3,14.2,32.3,23.1,45.1c8.1-6.2,14.7-11.6,19.9-16.2   c15.4-13.8,28.3-27.9,38.6-42.2l24.4,21.9c-15.4,1.9-29.9,7.6-43.4,17.1c-11.6,8.1-23.1,16.2-34.5,24.4c1.9,2.4,3.7,4.5,5.3,6.1   c9.5,9.7,21.5,18.3,36.1,25.6c7.3-6.2,13.3-11.5,17.9-15.8C318,75.6,330.7,63,341.3,51.4l21.9,21.9c-11.1,3.2-19.9,6.1-26.4,8.5   c-19.5,7.6-35.1,16.1-46.7,25.6c10.8,5.1,20,9.2,27.6,12.2C342.1,129.4,365.4,136.7,387.6,141.5z' /><path d='M207.3,269.8v106.7l-21.9,9.7V269.8H95.3v18.7l-24.4,9.7V192.8l29.2,17.1h85.3v-37H86.2l-4.9,2.4l-7.3-9.7h111.4v-45.7   l36.5,17.1l-14.6,9.7v18.9h65.1l24.4-24.4l31.7,31.7H207.3v37h90.1l14.6-14.6l19.5,19.5l-9.7,9.7v51.9l-21.9,9.7v-16.3H207.3z    M185.4,262.5v-45.4H95.3v45.4H185.4z M299.9,262.5v-45.4h-92.6v45.4H299.9z' />
                      </svg>
                    </span>
                  </div>
                  <h4 className='service-heading'>指法</h4>
                  <p>1600多个原样采集的譜字释义</p>
                  <p>人工勾线条，技术显示处理，保证媒体设备解析度上的锐利，罗列出处、原文释义等资料</p>
                </Col>
                <Col span={8} className='text-center sec'>
                  <span className='ant-stack ant-4x'>
                    <i className='icon icon-file ant-stack-2x text-secondary' />
                  </span>
                  <h4 className='service-heading'>琴曲</h4>
                  <p>共收录832首琴歌</p>
                  <p>收集附在曲谱内的释义，多轮校勘，将每首曲目按照不同的年代和谱书记载分类处理</p>
                </Col>
              </Row>
            </div>
          </section>
          <section className='bg-light learn-sec' id='learn-sec'>
            <div className='container'>
              <Row>
                <Col span={24} className='text-center'>
                  <h2 className='section-heading'>顶尖古琴艺术家网络学院</h2>
                  <h3 className='section-subheading'>低成本高效率地学习弹奏古琴</h3>
                </Col>
              </Row>
              <Row>
                <Col span={8} className='text-center'>
                  <div className='musicians-member'>
                    <img src='/src/assets/images/artist3.jpg' alt='' />
                    <h4>乔珊</h4>
                    <p>国际古琴学会会长</p>
                    <p>古琴演奏家、琴歌演唱家</p>
                  </div>
                </Col>
                <Col span={8} className='text-center'>
                  <div className='musicians-member'>
                    <img src='/src/assets/images/artist5.jpg' alt='' />
                    <h4>陈成渤</h4>
                    <p>中国传统文化促进会</p>
                    <p>古琴文化委员会副主任</p>
                  </div>
                </Col>
                <Col span={8} className='text-center'>
                  <div className='musicians-member'>
                    <img src='/src/assets/images/artist2.jpg' alt='' />
                    <h4>谢东笑</h4>
                    <p>广东古琴研究会会长</p>
                    <p>岭南派广东省级代表性传承人</p>
                  </div>
                </Col>
              </Row>
            </div>
          </section>
          <section className='publications-music'>
            <Row>
              <Col span={12} className='publications-panel panel'>
                <div className='heading'>
                  <h3>历代古琴文献汇编</h3>
                  <h4 className='subheading'>图书出版物</h4>
                </div>
                <div className='publications-body'>
                  <p style={style1}>历代古琴文献汇编为一套书共计8本：琴曲释意卷、斫琴卷、抚琴要则卷、音律卷、指法释义卷、古琴谱书卷、古琴圣贤卷、古琴款式卷</p>
                  <p>（琴曲释义卷）共计整理了156部古琴谱中的内容，共计包含900首古琴曲在每部琴谱中的曲意、歌词、解题、段标题、后记内容</p>
                </div>
              </Col>
              <Col>
                <div className='line' />
              </Col>
              <Col span={12} className='music-panel panel'>
                <div className='heading'>
                  <h3>优质古琴音乐资源</h3>
                  <h4 className='subheading'>随时随地分享古琴音乐</h4>
                </div>
                <div className='music-body'>
                  <p>权威、专业、全面、高品质的古琴音乐</p>
                  <p>收录了三千多首的古琴曲，按照名家以及古琴曲进行归类，同一名家不同琴曲不同年代不同版本、同一琴曲不同演奏家不同年代不同版本，便捷的检索，随时随地的欣赏古琴这一独特的音乐艺术</p>
                </div>
              </Col>
            </Row>
          </section>
          <section className='bg-light societies-sec'>
            <div className='societies-container'>
              <Row>
                <Col span={24} className='text-center'>
                  <h2 className='section-heading'>全球优质琴社推荐</h2>
                  <h3 className='section-subheading'>汇集了全球古琴馆资源</h3>
                </Col>
              </Row>
              <Row>
                <Col span={8} className='society'>
                  <div className='society-img'>
                    <label>吴门琴社</label>
                    <img src='/src/assets/images/society1.jpg' alt='' />
                  </div>
                  <div className='society-info'>
                    <h4>社长：吴明涛</h4>
                    <p>一九八六年秋吴兆基先生与吴地琴人徐忠伟先生、叶名佩女士和吴先生弟子裴金宝先生四人发起筹建，结社吴门</p>
                  </div>
                </Col>
                <Col span={8} className='society'>
                  <div className='society-img'>
                    <label>修竹琴舍</label>
                    <img src='/src/assets/images/society2.jpg' alt='' />
                  </div>
                  <div className='society-info'>
                    <h4>社长：谢东笑</h4>
                    <p>修竹琴舍，是个安静习琴、听琴的地方，秉持“琴以修身”的理念传承琴学</p>
                  </div>
                </Col>
                <Col span={8} className='society'>
                  <div className='society-img'>
                    <label>德音琴社</label>
                    <img src='/src/assets/images/society3.jpg' alt='' />
                  </div>
                  <div className='society-info'>
                    <h4>社长：王笑天</h4>
                    <p>又名“音乐传习社”，是20世纪国内第一个古琴组织。1910年由山东诸城派琴家王心葵发起于济南大明湖畔</p>
                  </div>
                </Col>
              </Row>
            </div>
          </section>
          <section>
            <Row>
              <Col span={24} className='text-center'>
                <h2 className='section-heading'>公益慈善</h2>
                <h3 className='section-subheading'>为捐助而分享</h3>
              </Col>
              <Col span={24} className='text-center share-img'>
                <img src='/src/assets/images/love.jpg' alt='' />
              </Col>
            </Row>
            <div className='share-info'>
              <p>随心分享随手捐，力行做公益，传递爱心。多一份爱心，多一份希望。</p>
              <p>公益慈善活动旨在帮助琴友们以及身边有需要帮助的人士，慈善资金是由用户向身边的琴友推荐分享爱古琴获得的鼓励琴贝等组成，用户自主选择参加捐助计划，把鼓励金捐助给有需要的人。</p>
              <p>当您在现实生活中遇到重大困难的时候，联系我们，爱古琴将通过“捐助计划”给予您最大限度内的帮助。</p>
            </div>
          </section>
        </div>
      </div>

    )
  }
}

export default Home
