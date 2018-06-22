import React from 'react'
import PropTypes from 'prop-types'
import { Icon, Row, Col, List, Avatar, Timeline, Input, Radio } from 'antd'
import Header from './Header'
import IndexCss from '../css/index.less'
import HomeCss from '../css/home.less'

const Search = Input.Search
const RadioGroup = Radio.Group

class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: 1
    }
    this.handleScroll = this.handleScroll.bind(this)
    this.onChange = this.onChange.bind(this)
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

  gotoBook (bookid) {
    console.log('跳转琴谱页面成功')
    this.props.router.push(`/books/${bookid}`)
    location.href = `/books/${bookid}`
  }

  gotoNotation (notationid) {
    console.log('跳转指法页面成功')
    this.props.router.push(`/notations/${notationid}`)
    location.href = `/notations/${notationid}`
  }

  onChange (e) {
    console.log('radio checked', e.target.value)
    this.setState({
      value: e.target.value,
    })
  }

  render () {
    // 全球琴社页面的测试数据
    const societiesList = [
      {
        name: '乔珊古琴艺术中心',
        address: '上海市静安区成都北路777号静安雕塑公园3号门梅园',
        labels: ['名家', '直营社', '未认证'],
        score: 520,
      }, {
        name: '绿绮琴院',
        address: '东莞市万江区下坝坊52号',
        labels: ['斫琴师', '未认证'],
        score: 480,
      }, {
        name: '天虹琴馆',
        address: '广州市越秀区大德路202号2004房',
        labels: ['名家', '直营社', '未认证'],
        score: 400,
      }, {
        name: '钧天琴院',
        address: '北京市大兴区魏善庄镇前苑上村西刘路钧天坊古琴文化艺术传播有限公司',
        labels: ['名家', '直营社', '未认证'],
        score: 400,
      }, {
        name: '春风琴社',
        address: '深圳市南山区科苑南路海阔天空雅居24',
        labels: ['名家', '直营社', '未认证'],
        score: 300,
      }, {
        name: '绿绮室·宋大年古琴工作室',
        address: '郑州市郑东新区九如路与商务内环交叉口天下收藏北区三楼3078号',
        labels: ['名家', '未认证'],
        score: 300,
      },
    ]

    // 热门分享的测试数据
    const shareList = [
      {
        href: 'http://ant.design',
        title: '古琴的结构',
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        image: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1514514903,2095539617&fm=27&gp=0.jpg',
        description: '引自宋代 田紫芝 《太古遗音》',
        content: '《琴体说》 琴之首曰凤额，下曰凤舌。其次曰承露，乃临岳之前也，俗谓之岳裙。轸穴俗谓之轸眼。岳之为体，巍然而高，如山岳之状。凤嗉，琴项也。谓之喉舌。可以教令也。仙人肩者，取其若肩背之正也。龙腰者，取其曲折如龙也；又曰玉女腰，取其纤也。自肩至腰。总象凤翅耸然而张。龙唇龙龈，乃琴末承弦之异名。焦尾人谓之冠，取其状名也。',
        label: '文章',
      },
      {
        href: 'http://ant.design',
        title: '乾隆与琴 | 微杂志 · 第5期',
        avatar: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=709031208,3322676689&fm=27&gp=0.jpg',
        image: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=517701222,475752096&fm=27&gp=0.jpg',
        description: '今藏北京故宫博物院的《弘历观画图》是由擅长写实画的郎世宁绘制的一幅“画中画”。画中乾隆皇帝弘历在清风中欣赏着《洗象图》。',
        content: '乾隆早年御制诗集中的《四琴诗》，即为乾隆帝为其珍藏的四种老桐木琴——“瀛蓬仙籁”、“湘江秋碧”、“皋禽霜唳”、“云海移情”分别赐名并赋诗合并而成。乾隆还曾多次诏唐侃为其演奏琴曲，先后欣赏了《猗兰操》、《高山》、《流水》、《秋鸿》等曲。除此以外，民间还流传着很多乾隆与琴的故事，这些文化遗存让我们认识了一个“喜琴”的皇帝，“好琴”的乾隆。',
        label: '文章',
      },
      {
        href: 'http://ant.design',
        title: '分享一首《高山流水》',
        avatar: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=541435924,1167307690&fm=27&gp=0.jpg',
        image: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3388399720,526774666&fm=27&gp=0.jpg',
        description: '乔珊先生演奏',
        content: '是曲，伯牙所作，言其志在高山，仁者之樂也，言其志在流水，智者之樂也。高山流水本只是一曲，至唐，分為兩曲，不分段數。至宋，分高山爲四段，流水為八段。按琴史，列子云，伯牙善鼓，鍾子期善聽。伯牙志在高山，鍾子曰，巍巍乎，若泰山之聳。伯牙志在流水，子期聽曰，洋洋乎，若江海波潮。伯牙曰，善哉，子期之心與吾心同。子期既沒，伯牙遂絕絃，終身不復再鼓也。高山流水之曲乃傳至于今。',
        label: '音乐',
      },
      {
        href: 'http://ant.design',
        title: '我今天练琴排名第一位，你呢？',
        avatar: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2825425622,3006033936&fm=27&gp=0.jpg',
        image: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2588153910,3448064580&fm=27&gp=0.jpg',
        description: '爱古琴习琴排行榜第一名',
        content: '爱古琴习琴聚集了四面八方的琴友们，快来加入我们一起习琴吧，分享你的琴声，你的成长记录，下载APP还有调音器、节拍器等小工具',
        label: '练琴',
      },
    ]
    const IconText = ({ type, text }) => (
      <span>
        <Icon type={type} style={{ marginRight: 8 }} />
        {text}
      </span>
    )
    const bookid = 8

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
                  <a href='https://www.aiguqin.com' target='_blank' className='button'>
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
          <section className='search-sec'>
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
                  <Radio value={2}>琴谱</Radio>
                  <Radio value={3}>指法</Radio>
                  <Radio value={4}>琴曲</Radio>
                </RadioGroup>
              </div>
            </div>
          </section>
          <section id='library-sec'>
            <div className='container'>
              <Row>
                <Col span={24} className='text-center'>
                  <h2 className='section-heading'>全球最大的古琴文献资料库</h2>
                  <h3 className='section-subheading'>历代古琴文献数据库</h3>
                </Col>
              </Row>
              <Row>
                <Col span={8} className='text-center'>
                  <span className='ant-stack ant-4x'>
                    <Icon type='book' className='ant-stack-2x text-secondary' />
                  </span>
                  <h4 className='service-heading'>琴谱</h4>
                  <p className='text-muted'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                </Col>
                <Col span={8} className='text-center'>
                  <span className='ant-stack ant-4x'>
                    <Icon type='star' className='ant-stack-2x text-secondary' />
                  </span>
                  <h4 className='service-heading'>指法</h4>
                  <p className='text-muted'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                </Col>
                <Col span={8} className='text-center'>
                  <span className='ant-stack ant-4x'>
                    <Icon type='flag' className='ant-stack-2x text-secondary' />
                  </span>
                  <h4 className='service-heading'>琴曲</h4>
                  <p className='text-muted'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
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
                <Col span={8} className='text-center portfolio-item'>
                  <a className='portfolio-link' data-toggle='modal' href='#portfolioModal1'>
                    <div className='portfolio-hover'>
                      <div className='portfolio-hover-content'>
                        <i className='fa fa-plus fa-3x' />
                      </div>
                    </div>
                    <img className='img-fluid' src='/src/assets/images/artist3.jpg' alt='' />
                  </a>
                  <div className='portfolio-caption'>
                    <h4>乔珊</h4>
                    <p className='text-muted'>国际古琴学会会长</p>
                  </div>
                </Col>
                <Col span={8} className='text-center portfolio-item'>
                  <a className='portfolio-link' data-toggle='modal' href='#portfolioModal1'>
                    <div className='portfolio-hover'>
                      <div className='portfolio-hover-content'>
                        <i className='fa fa-plus fa-3x' />
                      </div>
                    </div>
                    <img className='img-fluid' src='/src/assets/images/artist1.jpg' alt='' />
                  </a>
                  <div className='portfolio-caption'>
                    <h4>戴茹</h4>
                    <p className='text-muted'>成都古琴文化学会会长</p>
                  </div>
                </Col>
                <Col span={8} className='text-center portfolio-item'>
                  <a className='portfolio-link' data-toggle='modal' href='#portfolioModal1'>
                    <div className='portfolio-hover'>
                      <div className='portfolio-hover-content'>
                        <i className='fa fa-plus fa-3x' />
                      </div>
                    </div>
                    <img className='img-fluid' src='/src/assets/images/artist2.jpg' alt='' />
                  </a>
                  <div className='portfolio-caption'>
                    <h4>谢东笑</h4>
                    <p className='text-muted'>广东古琴研究会会长</p>
                  </div>
                </Col>
                <Col span={8} className='text-center portfolio-item'>
                  <a className='portfolio-link' data-toggle='modal' href='#portfolioModal1'>
                    <div className='portfolio-hover'>
                      <div className='portfolio-hover-content'>
                        <i className='fa fa-plus fa-3x' />
                      </div>
                    </div>
                    <img className='img-fluid' src='/src/assets/images/artist4.jpg' alt='' />
                  </a>
                  <div className='portfolio-caption'>
                    <h4>赵晓霞</h4>
                    <p className='text-muted'>中国古琴学会理事</p>
                  </div>
                </Col>
              </Row>
            </div>
          </section>
          <section className='publications-music'>
            <Row>
              <Col span={12} className='publications-panel panel'>
                <div className='heading'>
                  <h3>出版物历代古琴文献汇编</h3>
                  <h4 className='subheading'>Our Humble Beginnings</h4>
                </div>
                <div className='publications-body'>
                  <p className='text-muted'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                </div>
              </Col>
              <Col>
                <div className='line' />
              </Col>
              <Col span={12} className='music-panel panel'>
                <div className='heading'>
                  <h3>优质古琴音乐资源</h3>
                  <h4 className='subheading'>Our Humble Beginnings</h4>
                </div>
                <div className='music-body'>
                  <p className='text-muted'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                </div>
              </Col>
            </Row>
          </section>
          <section className='bg-light societies-sec'>
            <div>
              <Row>
                <Col span={24} className='text-center'>
                  <h2 className='section-heading'>全球优质琴社推荐</h2>
                  <h3 className='section-subheading'>汇集了全球古琴馆资源</h3>
                </Col>
              </Row>
            </div>
          </section>
        </div>
      </div>

    )
  }
}

Home.defaultProps = {
  router: []
}

Home.propTypes = {
  router: PropTypes.array
}

export default Home
