import React from 'react'
import { Icon, Row, Col, List, Avatar } from 'antd'
import Header from './Header'
import '../css/index.less'

class Home extends React.Component {
  componentDidMount () {

  }

  componentWillUnmount () {

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

    return (
      <div className='home'>
        <Header />
        <div className='banner'>
          <div className='banner-background' />
          {/* <div className="search-box" >
            <form>
              <input type="text" placeholder="搜索课程..." id="header-search"/>
              <a><Icon type="search" /></a>
            </form>
          </div> */}
        </div>
        <div className='home-content'>
          {/* <div className='certs-societies'>
            <h3 className='certs-title'><span>全球琴社</span><a href='javascrit:void(0)' className='more-link'>查看更多</a></h3>
            <Row gutter={16}>
              {societiesList.map((society, s) => (
                <Col xs={{ span: 12 }} sm={{ span: 8 }} md={{ span: 6 }} className='cert'>
                  <div className='image-block' />
                  <div className='text-block'>
                    <p className='labels'>
                      {society.labels.map((label, l) => (
                        <label key={l}>{label}</label>
                      ))}
                    </p>
                    <h3 className='title'>{society.name}</h3>
                    <p className='address'>{society.address}</p>
                    <p className='stars'>
                      <Icon type='star' />
                      <Icon type='star' />
                      <Icon type='star' />
                      <Icon type='star' />
                      <Icon type='star' />
                      <span className='number'>{society.score}</span>
                    </p>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
          <div className='certs-hot'>
            <h3 className='certs-title'><span>热门分享</span><a href='javascrit:void(0)' className='more-link'>查看更多</a></h3>
            <List
              itemLayout='vertical'
              size='large'
              dataSource={shareList}
              renderItem={item => (
                <List.Item
                  key={item.title}
                  actions={[<IconText type='star-o' text='156' />, <IconText type='like-o' text='156' />, <IconText type='message' text='2' />, <span className='share-label'>{item.label}</span>]}
                  extra={<img width={272} alt='logo' src={item.image} />}
                >
                  <List.Item.Meta
                    avatar={<Avatar src={item.avatar} />}
                    title={<a href={item.href}>{item.title}</a>}
                    description={item.description}
                  />
                  {item.content}
                </List.Item>
              )}
            />
          </div> */}
          <div className='certs-books'>
            <h3 className='certs-title'><span>历代琴谱</span></h3>
            <Row gutter={16}>
              <Col xs={{ span: 12 }} sm={{ span: 8 }} md={{ span: 6 }} className='cert'>
                <div className='bookcover'>
                  <h2><span className='verticle'>碣石調幽蘭</span></h2>
                </div>
              </Col>
              <Col xs={{ span: 12 }} sm={{ span: 8 }} md={{ span: 6 }} className='cert'>
                <div className='bookcover'>
                  <h2><span className='verticle'>琴史</span></h2>
                </div>
              </Col>
              <Col xs={{ span: 12 }} sm={{ span: 8 }} md={{ span: 6 }} className='cert'>
                <div className='bookcover'>
                  <h2><span className='verticle'>事林廣記</span></h2>
                </div>
              </Col>
              <Col xs={{ span: 12 }} sm={{ span: 8 }} md={{ span: 6 }} className='cert'>
                <div className='bookcover'>
                  <h2><span className='verticle'>神奇秘譜</span></h2>
                </div>
              </Col>
              <Col xs={{ span: 12 }} sm={{ span: 8 }} md={{ span: 6 }} className='cert'>
                <div className='bookcover'>
                  <h2><span className='verticle'>琴書大全</span></h2>
                </div>
              </Col>
              <Col xs={{ span: 12 }} sm={{ span: 8 }} md={{ span: 6 }} className='cert'>
                <div className='bookcover'>
                  <h2><span className='verticle'>愧菴琴譜</span></h2>
                </div>
              </Col>
              <Col xs={{ span: 12 }} sm={{ span: 8 }} md={{ span: 6 }} className='cert'>
                <div className='bookcover'>
                  <h2><span className='verticle'>琴學入門</span></h2>
                </div>
              </Col>
              <Col xs={{ span: 12 }} sm={{ span: 8 }} md={{ span: 6 }} className='cert'>
                <div className='bookcover'>
                  <h2><span className='verticle'>琴學管見</span></h2>
                </div>
              </Col>
            </Row>
          </div>
          <div className='certs-notations'>
            <h3 className='certs-title'><span>指法詞典</span></h3>
            <Row gutter={16}>
              <Col xs={{ span: 12 }} sm={{ span: 8 }} md={{ span: 6 }} className='cert'>
                <div className='notation'>
                  <span className='glyph'>
                    <svg viewBox='0,0,400,400'><path d='M365.6,57.5l-9.7,9.7v114.5l-26.8,9.7v-26.8H131.8c-0.8,12.2-1.6,24.4-2.4,36.5c-4.1,30-12,57.5-24,82.4   c-16.8,35.2-40.5,63.7-71.1,85.7c20.3-21.9,36.7-45.9,49.1-71.9c16-33.6,24-68.1,24-103.5V30.7l31.7,17.1h187.6l14.6-14.6   L365.6,57.5z M329.1,157.4V55.1H131.8v102.3H329.1z' /></svg>
                  </span>
                  <span className='name'>劈</span>
                </div>
              </Col>
              <Col xs={{ span: 12 }} sm={{ span: 8 }} md={{ span: 6 }} className='cert'>
                <div className='notation'>
                  <span className='glyph'>
                    <svg viewBox='0,0,400,400'><path d='M189,214.1l116.9-9.7l26.8-26.8l29.2,29.2l-173,14.6v110.1c0.3,2.2,0.7,3.9,1.2,5.3c3.2,8.1,9.3,12.9,18.3,14.2H323   c6-1.1,10.4-2.4,13.4-4.1c9.5-4.9,14.7-12.4,15.8-22.7l4.9-53.6c0,20,0.8,34.2,2.4,42.6c3,15.7,9.5,27.5,19.5,35.3   c-4.6,5.4-8.7,9.5-12.2,12.2c-10.6,8.1-21.9,12.2-34.1,12.2H201.2c-7.6-1.9-13.3-3.9-17.1-6.1c-11.4-6.8-17.1-16.9-17.1-30.5V223.9   L25.8,236l-4.9-7.3l146.2-12.2V75.8c-16.2,2.7-29.8,4.7-40.6,6.1c-32.5,4.1-62,6.1-88.5,6.1c2.2,0,14.9-2.4,38.2-7.3   c32.2-6.8,62.9-13.8,92.2-21.1c39-9.7,76.7-20.6,113.3-32.5l29.2,29.2c-17.9,0-37.7,1.7-59.5,5.1c-21.8,3.4-42.6,6.6-62.3,9.5   V214.1z' /></svg>
                  </span>
                  <span className='name'>托</span>
                </div>
              </Col>
              <Col xs={{ span: 12 }} sm={{ span: 8 }} md={{ span: 6 }} className='cert'>
                <div className='notation'>
                  <span className='glyph'>
                    <svg viewBox='0,0,400,400'><path d='M386.4,302.3c-7.3,0-13,0.4-17.1,1.2c-12.2,2.4-20.3,7.7-24.4,15.8c-1.9,0-10.4-7-25.6-21.1c-20.6-19.2-38.6-40.7-54-64.6   c-21.9-33.8-37.6-70.2-47.1-109.2H211v250.9l-24.4,9.7V148.8c-6.8,11.1-13.4,22.2-19.9,33.3c-18.4,28.2-37.8,53.5-58.1,75.9   c-29.8,32.8-61.4,59.7-95,80.8c1.4,0,10.8-8.9,28.4-26.8c23.3-23.5,44.5-48.3,63.7-74.3c27.6-37.4,49.7-75.1,66.2-113.3H45.3   l-4.9,2.4l-7.3-9.7h153.5V14.9l39,17.1L211,41.7v75.5h104.7l24.4-24.4l31.7,31.7H225.6c4.9,11.9,9.7,23.8,14.6,35.7   c13.5,27.9,30.3,52.9,50.3,75.1C318.7,266.5,350.6,288.8,386.4,302.3z' /></svg>
                  </span>
                  <span className='name'>抹</span>
                </div>
              </Col>
              <Col xs={{ span: 12 }} sm={{ span: 8 }} md={{ span: 6 }} className='cert'>
                <div className='notation'>
                  <span className='glyph'>
                    <svg viewBox='0,0,400,400'>
                      <path d='M322.9,340c-1.9,3-3.5,5.3-4.9,6.9c-9.2,10.8-20.6,17.5-34.1,19.9H111.2c-9.7-1.9-16.6-4.6-20.7-8.1   c-7.3-6.2-11.8-14.9-13.4-26V32.2l41.4,21.9l-17.1,12.2v254.2c1.1,5.4,2.3,9.5,3.7,12.2c4.3,8.1,11.2,12.2,20.7,12.2H262   c10-0.8,17.5-3.6,22.3-8.3c4.9-4.7,7.3-10.2,7.3-16.4c0-1.9-0.1-3.4-0.4-4.5l4.9-56c1.1,18.1,2.4,32.3,4.1,42.6   C303.1,321.5,310.7,334.1,322.9,340z' />
                    </svg>
                  </span>
                  <span className='name'>挑</span>
                </div>
              </Col>
              <Col xs={{ span: 12 }} sm={{ span: 8 }} md={{ span: 6 }} className='cert'>
                <div className='notation'>
                  <span className='glyph'>
                    <svg viewBox='0,0,400,400'><path d='M363,102.2l-11.4,11.4V310c-2.2,14.3-4.9,25.3-8.1,32.9c-10.3,23-27.6,36.9-52,41.8c-1.9-12.7-9.2-22.6-21.9-29.6   c-12.2-6-24.2-11.8-36.1-17.5c17.9,2.7,35.9,5.4,54,8.1c11.4,0,20.3-2.3,26.8-6.9c7.8-5.7,12.6-15.3,14.2-28.8V99.7H131.6   c-3.5,6.8-7,13.5-10.6,20.3c-9.2,16.2-19.8,31.7-31.7,46.3c-16.2,20-33.7,36.8-52.4,50.3c1.1,0,7-7.8,17.9-23.5   c14.3-20.8,27.5-43.6,39.4-68.2c17.1-35.5,30.3-72,39.8-109.6l41.8,21.1c-11.6,1.9-20.3,9.2-26,21.9c-4.6,11.6-9.1,23.1-13.4,34.5   h189.6l13.8-14.2L363,102.2z' /></svg>
                  </span>
                  <span className='name'>勾</span>
                </div>
              </Col>
              <Col xs={{ span: 12 }} sm={{ span: 8 }} md={{ span: 6 }} className='cert'>
                <div className='notation'>
                  <span className='glyph'>
                    <svg viewBox='0,0,400,400'><path d='M129.4,211.8c-4.3,4.6-8.5,9.2-12.6,13.8c-10.6,10.6-22.3,21.1-35.3,31.7c-17.1,13.8-34.4,25.4-52,34.9   c0.5,0,6.6-5.7,18.3-17.1C63.2,260,77.9,243.8,92,226.8c20.3-24.6,38.4-49.9,54.4-75.9l26.8,21.9c-3.2,2.2-6,3.9-8.1,5.3   c-12.7,8.9-22.2,17.7-28.4,26.4h199.8l12.2-12.2l21.9,21.9c-3.8,2.7-6.6,5.3-8.5,7.7c-6.2,7.6-9.9,16.4-11,26.4l-19.5,85.3   c-3.8,9.5-7.4,16.8-11,21.9c-10.8,15.4-25,25.2-42.6,29.2c-1.1-11.6-7.2-20.2-18.3-25.6c-1.4-0.5-13.1-4.2-35.3-11l68.2,2.4   c13-11.9,22.7-33.4,29.2-64.6c4.9-24.6,9.7-49.4,14.6-74.3H129.4z' /><path d='M268.3,29.9l14.6-14.6l21.9,21.9l-9.7,9.7v90.4c-3,4.6-5.6,8.3-7.7,11c-6.8,8.9-13.1,15.8-19.1,20.7   c-4.1-9.2-10.6-16.6-19.5-22.3c-1.6-1.1-17.1-7.4-46.3-19.1l65.8,2.4c1.4,0.2,2.2-0.6,2.4-2.4l0-90.4H117.1v119.6l-21.9,9.7V17.7   l21.9,12.2H268.3z' /></svg>
                  </span>
                  <span className='name'>剔</span>
                </div>
              </Col>
              <Col xs={{ span: 12 }} sm={{ span: 8 }} md={{ span: 6 }} className='cert'>
                <div className='notation'>
                  <span className='glyph'>
                    <svg viewBox='0,0,400,400'><path d='M379,57.5H213.4v285c-3.8,6-7,10.6-9.7,13.8c-8.7,9.7-17.6,15.7-26.8,17.9c-4.1-13-13.8-22.7-29.2-29.2   c-13-4.9-26-9.7-39-14.6l75.5,2.4l2.4-2.4V57.5H33.1l-4.9,2.4L21,50.2H323l24.4-24.4L379,57.5z' /></svg>
                  </span>
                  <span className='name'>打</span>
                </div>
              </Col>
              <Col xs={{ span: 12 }} sm={{ span: 8 }} md={{ span: 6 }} className='cert'>
                <div className='notation'>
                  <span className='glyph'>
                    <svg viewBox='0,0,400,400'><path d='M312.1,135.4h-82.8c10.8-12.4,18-20.4,21.5-24c7.8-7.6,16.9-14.2,27.2-19.9l-24.4-21.9H390l-29.2-29.2l-21.9,21.9h-134  c6-7.6,8.9-14.2,8.9-19.9c0-8.4-9.1-16.4-27.2-24c-10.8-4.6-17.7-7.8-20.7-9.7c7.3,7.3,14.3,18.4,21.1,33.3  c2.2,4.9,4.9,11.6,8.1,20.3H10l7.3,9.7l4.9-2.4h226.5c-4.1,15.4-10.1,31-18.3,46.7c-2.7,5.1-6.4,11.5-11,19.1h-53.6  c3.8-5.4,5.7-10.7,5.7-15.8c0-8.4-5.4-16.1-16.2-23.1c-6.2-4.1-16.5-8.9-30.9-14.6c8.1,8.1,15.4,19.5,21.9,34.1  c2.2,4.9,4.6,11.4,7.3,19.5H50.4l7.3,9.7l4.9-2.4h252v209.5l-2.4,2.4l-56-2.4c6.5,3.2,17.1,8,31.7,14.2  c12.2,6.5,20.3,14.7,24.4,24.8c10-5.1,18-13.3,24-24.4c0.8-1.9,1.8-4.3,2.8-7.3V152.5l9.7-9.7l-21.9-21.9L312.1,135.4z' /></svg>
                  </span>
                  <span className='name'>摘</span>
                </div>
              </Col>
            </Row>

          </div>
          <div className='certs-songs'>
            <h3 className='certs-title'><span>琴曲大全</span></h3>
            <Row gutter={16}>
              <Col xs={{ span: 12 }} sm={{ span: 8 }} md={{ span: 6 }} className='cert'>
                <div className='song'>
                  <a href=''>
                    <Icon type='book' />
                  </a>
                  <a href=''><span>廣陵散</span></a>
                </div>
              </Col>
              <Col xs={{ span: 12 }} sm={{ span: 8 }} md={{ span: 6 }} className='cert'>
                <div className='song'>
                  <a href=''>
                    <Icon type='book' />
                  </a>
                  <a href=''><span>胡笳十八拍</span></a>
                </div>
              </Col>
              <Col xs={{ span: 12 }} sm={{ span: 8 }} md={{ span: 6 }} className='cert'>
                <div className='song'>
                  <a href=''>
                    <Icon type='book' />
                  </a>
                  <a href=''><span>流水</span></a>
                </div>
              </Col>
              <Col xs={{ span: 12 }} sm={{ span: 8 }} md={{ span: 6 }} className='cert'>
                <div className='song'>
                  <a href=''>
                    <Icon type='book' />
                  </a>
                  <a href=''><span>梅花三弄</span></a>
                </div>
              </Col>
              <Col xs={{ span: 12 }} sm={{ span: 8 }} md={{ span: 6 }} className='cert'>
                <div className='song'>
                  <a href=''>
                    <Icon type='book' />
                  </a>
                  <a href=''><span>平沙落雁</span></a>
                </div>
              </Col>
              <Col xs={{ span: 12 }} sm={{ span: 8 }} md={{ span: 6 }} className='cert'>
                <div className='song'>
                  <a href=''>
                    <Icon type='book' />
                  </a>
                  <a href=''><span>瀟湘水雲</span></a>
                </div>
              </Col>
              <Col xs={{ span: 12 }} sm={{ span: 8 }} md={{ span: 6 }} className='cert'>
                <div className='song'>
                  <a href=''>
                    <Icon type='book' />
                  </a>
                  <a href=''><span>漁樵問答</span></a>
                </div>
              </Col>
              <Col xs={{ span: 12 }} sm={{ span: 8 }} md={{ span: 6 }} className='cert'>
                <div className='song'>
                  <a href=''>
                    <Icon type='book' />
                  </a>
                  <a href=''><span>憶故人</span></a>
                </div>
              </Col>
              <Col xs={{ span: 12 }} sm={{ span: 8 }} md={{ span: 6 }} className='cert'>
                <div className='song'>
                  <a href=''>
                    <Icon type='book' />
                  </a>
                  <a href=''><span>陽關三疊</span></a>
                </div>
              </Col>
              <Col xs={{ span: 12 }} sm={{ span: 8 }} md={{ span: 6 }} className='cert'>
                <div className='song'>
                  <a href=''>
                    <Icon type='book' />
                  </a>
                  <a href=''><span>離騷</span></a>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>

    )
  }
}

export default Home
